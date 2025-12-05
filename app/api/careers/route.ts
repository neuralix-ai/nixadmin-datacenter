import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { NextRequest, NextResponse } from 'next/server'
import * as pm from 'postmark'
import { z } from 'zod'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

const ratelimit = new Ratelimit({
  redis,
  // 5 requests from the same IP in 10 seconds
  limiter: Ratelimit.slidingWindow(50, '1 d'),
})

const NotifyJobDetailsArgsSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: 'Name is required.' })
    .max(100, { message: 'Name is too long.' }),
  email: z
    .string()
    .min(1, { message: 'Email is required.' })
    .max(100, { message: 'Email is too long.' })
    .email('Please enter a valid email.'),
  mobile: z.string(),
  experience: z.string(),
  linkedInProfile: z
    .string()
    .min(1, { message: 'LinkedIn is required.' })
    .max(100, { message: 'LinkedIn is too long.' })
    .url('Please enter a valid LinkedIn profile.'),
  resume: z.object({}),
})

interface NotifyJobDetailsProps {
  fullName: string
  jobId: string
  email: string
  countryCode: string
  mobile: string
  experience: string
  linkedInProfile: string
  portfolioLink: string
  resume: object
}

async function NotifyJobDetails(props: NotifyJobDetailsProps) {
  const pmClient = new pm.ServerClient(process.env.POSTMARK_API_KEY as string)
  const jobMessage = `Job application for Job ID: ${
    props.jobId
  } \n Applicant details- \n Name: ${props.fullName} \n Email: ${
    props.email
  } \n Contact Number: ${props.countryCode} ${
    props.mobile
  } \n LinkedInProfile: ${props.linkedInProfile} \n ${
    props.portfolioLink && `Portfolio Link:${props.portfolioLink} \n`
  }`
  await pmClient.sendEmail({
    From: 'sid@neuralix.ai',
    To: process.env.NEXT_PUBLIC_CAREERS_MAIL_RECIPIENTS,
    Subject: `Job Application Request from ${props.fullName}`,
    TextBody: `Email: ${props.email} Message: ${jobMessage} `,
  })
}

export async function POST(request: NextRequest) {
  const ip = request.ip ?? '127.0.0.1'
  const { success, pending, limit, reset, remaining } =
    await ratelimit.limit(ip)
  if (!success)
    return NextResponse.json({ status: 'failed', reason: 'Too many requests' })
  try {
    const data: NotifyJobDetailsProps = await request.json()
    const errs = NotifyJobDetailsArgsSchema.parse(data)
    const info = await NotifyJobDetails(data)
    return NextResponse.json({ status: 'ok' })
  } catch (e) {
    return NextResponse.json({ status: 'failed', reason: e })
  }
}
