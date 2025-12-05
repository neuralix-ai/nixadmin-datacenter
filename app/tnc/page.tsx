import Header from '@/components/header'

type PointTextProps = {
  title: string
  text: string
}
function PointText({ title, text }: PointTextProps) {
  return (
    <div className='flex flex-col gap-y-1'>
      <h2 className='text-lg font-medium'>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

const TermsAndConditions = () => (
  <div className='flex flex-col gap-y-6'>
    <PointText
      title='1. Acceptance of Terms'
      text='By accessing or using this website/application (the "Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree with any part of these Terms, you may not use the Service.'
    />
    <PointText
      title='2. Use of the Service'
      text='You agree to use the Service solely for lawful purposes and in accordance with these Terms. You are responsible for all activities conducted through your account.'
    />
    <PointText
      title='3. Intellectual Property'
      text='All content on the Service, including text, graphics, logos, images, and software, is the property of the Service provider or its licensors and is protected by copyright and other intellectual property laws.'
    />
    <PointText
      title='4. User Contributions'
      text='You may be able to post, submit, or transmit content on or through the Service. By doing so, you grant the Service provider a worldwide, non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content.'
    />
    <PointText
      title='5. Privacy Policy'
      text='Your use of the Service is also governed by our Privacy Policy, which can be found https://neuralix.ai/privacy-policy . By using the Service, you consent to the terms of the Privacy Policy.'
    />
    <PointText
      title='6. Limitation of Liability'
      text="The Service is provided 'as is' and 'as available' without any warranties, express or implied. The Service provider shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or relating to the use or inability to use the Service."
    />
    <PointText
      title='7. Indemnification'
      text="You agree to indemnify and hold the Service provider harmless from any claims, losses, liabilities, damages, costs, and expenses, including attorney's fees, arising out of your use of the Service or violation of these Terms."
    />
    <PointText
      title='8. Termination'
      text='The Service provider reserves the right to terminate or suspend your access to the Service at any time, without notice, for any reason.'
    />
    <PointText
      title='9. Governing Law'
      text='These Terms are governed by and construed in accordance with the laws of Texas, USA, without regard to its conflict of law principles.'
    />
    <PointText
      title='10. Changes to Terms'
      text='The Service provider reserves the right to modify or revise these Terms at any time. Your continued use of the Service following the posting of any changes constitutes acceptance of those changes.'
    />
  </div>
)

export default function TncPage() {
  return (
    <div className='px-8 lg:px-32 max-w-6xl py-10'>
      <Header hideNavs />
      <h1 className='text-2xl font-semibold my-6 mt-16'>
        Terms and Conditions
      </h1>
      <TermsAndConditions />
    </div>
  )
}
