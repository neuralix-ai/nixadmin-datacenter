import { NextRequest, NextResponse } from 'next/server'

import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import * as pm from 'postmark'
import { z } from 'zod'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

const ratelimit = new Ratelimit({
  redis,
  // 5 requests from the same IP in 10 seconds
  limiter: Ratelimit.slidingWindow(8, '1 d'),
})

const NotifyContactUsArgsSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required.' })
    .max(50, { message: 'Name is too long.' }),
  email: z
    .string()
    .min(1, { message: 'Email is required.' })
    .max(100, { message: 'Email is too long.' })
    .email('Please enter a valid email.'),
  message: z.string().max(300, { message: 'Message is too long.' }),
})

interface NotifyContactUsProps {
  name: string
  email: string
  message?: string
}

async function NotifyContactUs(props: NotifyContactUsProps) {
  const pmClient = new pm.ServerClient(process.env.POSTMARK_API_KEY as string)

  await pmClient.sendEmail({
    From: 'ashish@neuralix.ai',
    To: process.env.CONTACT_US_MAIL_RECIPIENTS,
    Subject: `Contact Request from ${props.name}`,
    TextBody: `Email: ${props.email} Message: ${props.message}`,
  })
}

export async function POST(request: NextRequest) {
  const ip = request.ip ?? '127.0.0.1'
  const { success, pending, limit, reset, remaining } =
    await ratelimit.limit(ip)
  if (!success)
    return NextResponse.json({ status: 'failed', reason: 'Too many requests' })

  try {
    const data: NotifyContactUsProps = await request.json()
    const errs = NotifyContactUsArgsSchema.parse(data)
    const info = await NotifyContactUs(data)
    return NextResponse.json({ status: 'ok' })
  } catch (e) {
    return NextResponse.json({ status: 'failed', reason: e })
  }
}
