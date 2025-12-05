import facebook from '@/assets/icons/facebook.svg'
import instagram from '@/assets/icons/instagram.svg'
import linkedIn from '@/assets/icons/linkedIn.svg'
import twitter from '@/assets/icons/twitter.svg'
import youtube from '@/assets/icons/youtube.svg'

export const FOOTER_DATA = {
  tableOne: [
    { label: 'Home', id: '#about', type: 'text' },
    { label: 'Challenges', id: '#challenges', type: 'text' },
    { label: 'Solutions', id: '#solutions', type: 'text' },
    { label: 'Projects', id: '#projects', type: 'text' },
    { label: 'Focus', id: '#focus', type: 'text' },
    { label: 'Our Team', id: '#ourteam', type: 'text' },
    { label: 'Contact Us', id: '#contact', type: 'text' },
  ],
  tableTwo: [
    { label: 'Terms of Services', link: '/tnc', type: 'link' },
    { label: 'Privacy Policy', link: '/privacy-policy', type: 'link' },
  ],
  tableThree: [
    {
      label: 'info@neuralixai.in',
      link: 'mailto:info@neuralixai.in',
      type: 'link',
    },
    { label: 'Bengaluru, Karnataka, India', type: 'text' },
    { label: 'Houston, Texas, USA', type: 'text' },
  ],
  socialMedia: [
    { icon: instagram, iconUrl: '' },
    { icon: facebook, iconUrl: '' },
    { icon: youtube, iconUrl: '' },
    { icon: twitter, iconUrl: '' },
    { icon: linkedIn, iconUrl: '' },
  ],
  locations: [
    {
      country: 'India',
      address:
        '428, Railway Line Road NGEF Layout, Sadananda Nagar, Bangalore, Karnataka - 560038',
    },
    {
      country: 'United States',
      address: `Neuralix Inc. 
                4200 San Jacinto St. 
                Houston, TX 77004`,
    },
  ],
}
