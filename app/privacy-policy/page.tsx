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

const PrivacyPolicy = () => (
  <div className='flex flex-col gap-y-6'>
    <PointText
      title='Information We Collect'
      text='We may collect personal information that you provide directly to us, such as your name, email address, postal address, phone number, and other information you choose to provide. We may also automatically collect information about your use of the Service, including your IP address, device information, browser type, and other usage details.'
    />
    <PointText
      title='How We Use Your Information'
      text='We use the information we collect for various purposes, including providing and improving the Service, responding to your inquiries and requests, sending you updates, newsletters, and marketing communications, customizing and tailoring the content we display to you, and analyzing and understanding how the Service is used.'
    />
    <PointText
      title='Sharing Your Information'
      text='We may share your information with third parties for various purposes, including service providers who assist us in operating the Service, compliance with legal obligations, and protection of our rights, privacy, safety, or property.'
    />
    <PointText
      title='Your Choices'
      text='You have choices regarding the use of your information, including the ability to opt-out of receiving marketing communications from us. You can update your preferences by dropping us a mail at help@neuralixai.in .'
    />
    <PointText
      title='Security'
      text='We take reasonable measures to protect your information from unauthorized access and use. However, no security measure is perfect, and we cannot guarantee the security of your information.'
    />
    <PointText
      title="Children's Privacy"
      text='The Service is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe we may have collected information about your child, please contact us at help@neuralixai.in.'
    />
    <PointText
      title='Changes to this Privacy Policy'
      text='We may update this Privacy Policy from time to time. Any changes will be effective immediately upon the posting of the revised Privacy Policy. By continuing to use the Service, you agree to the terms of the updated Privacy Policy.'
    />
    <PointText
      title='Contact Us'
      text='If you have any questions or concerns about this Privacy Policy, please contact us at info@neuralixai.in.'
    />
  </div>
)

export default function PrivacyPolicyPage() {
  return (
    <div className='px-8 lg:px-32 max-w-6xl py-10'>
      <Header hideNavs />
      <h1 className='text-2xl font-semibold my-6 mt-16'>Privacy Policy</h1>
      <PrivacyPolicy />
    </div>
  )
}
