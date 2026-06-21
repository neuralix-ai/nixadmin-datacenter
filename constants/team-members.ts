import FemalePlaceHolder from '@/assets/placeholders/female-placeholder.svg'
import MalePlaceHolder from '@/assets/placeholders/male-placeholder.svg'
import MajRavi from '@/assets/team/Major_General_Ravi_Murugan.png'
import Paramesh from '@/assets/team/Paramesh.png'
import RohitGangwal from '@/assets/team/Rohit.png'
import SaritaSingh from '@/assets/team/Sarita.png'
import Siddharth from '@/assets/team/Siddharth.png'
import Tarang from '@/assets/team/Tarang.png'
import Ushpinder from '@/assets/team/Ushpinder.png'
import VikramJayaram from '@/assets/team/Vikram_Jayaram.png'

export const TEAM_MEMBERS_DATA = [
  {
    name: 'Vikram Jayaram, Ph.D.',
    linkedinHref: 'https://www.linkedin.com/in/vjayaram/',
    designation: 'Co-Founder & CTO',
    description:
      'With over 20 years in tech and data science, Vikram is committed to guiding industries toward a low-carbon future through innovative AI solutions. His expertise in machine learning and geophysics has earned him recognition in the energy and manufacturing sectors, where he continually drives impactful change.',
    image: VikramJayaram || MalePlaceHolder,
  },
  {
    name: 'Paramesh',
    linkedinHref: 'https://www.linkedin.com/in/parameshprofile/',
    designation: 'Vice President (Product and Development)',
    description: '',
    image: Paramesh || MalePlaceHolder,
  },
  {
    name: 'Rohit Gangwal',
    linkedinHref: '',
    designation: 'Co-Founder',
    description:
      'Rohit provides strategic guidance to the company, focusing on operational direction, growth initiatives, and customer success. His role spans support in operations, fundraising, financial management, and government contracts. Rohit is also the CEO and Managing Director at Covetus and serves as Managing Director at Cosmos Granite and Marble, overseeing a $400M turnover.',
    image: RohitGangwal || MalePlaceHolder,
  },
  {
    name: 'Maj Gen Ravi Murugan (Retd.)',
    linkedinHref: 'https://www.linkedin.com/in/ravi-murugan-07b68829',
    designation: 'Sr. Advisor',
    description:
      'With over 35 years in the Indian Army, General Murugan is known for his leadership, strategic vision, and expertise in global diplomacy. His experience in international partnerships and organizational development strengthens Neuralix’s mission to drive AI innovation and deliver impactful solutions to global markets.',
    image: MajRavi || MalePlaceHolder,
  },
  {
    name: 'Siddharth Elango',
    linkedinHref: 'https://www.linkedin.com/in/siddharth-elango',
    designation: 'Product Management',
    description:
      'Siddharth leads product innovation by fusing technical insight with strategic vision. He transforms complex product and data challenges into intuitive, scalable solutions – aligning cross-functional teams to deliver rapid, measurable impact.',
    image: Siddharth || MalePlaceHolder,
  },
  {
    name: 'Ushpinder Singh',
    linkedinHref: 'https://www.linkedin.com/in/ushpinder',
    designation: 'CBO',
    description:
      'A revenue focused executive with 20+ years of driving enterprise growth, advancing digital initiatives & enabling market expansion. Spearheaded go-to-market strategies & cultivated transformative partnerships. Recognized for unifying diverse teams, Ushpinder connects product vision, revenue levers & ecosystem plays to unlock innovation & sustained advantage.',
    image: Ushpinder || MalePlaceHolder,
  },
  {
    name: 'Sqn Ldr Tarang Singh (Retd.)',
    linkedinHref: 'https://www.linkedin.com/in/tarangsingh',
    designation: 'Project Management',
    description:
      'Tarang drives technical project delivery with disciplined precision and strategic foresight. Drawing on 10+ years of leading high-stakes operations in the Indian Air Force, she excels at orchestrating complex initiatives, building high-performing teams, and ensuring operational excellence.',
    image: Tarang || FemalePlaceHolder,
  },
  {
    name: 'Sarita Singh',
    linkedinHref: 'https://www.linkedin.com/in/sarita-singh-b361a41ab/',
    designation: 'People Operations',
    description:
      'Sarita is a strategic leader in HR and operations, dedicated to fostering growth and a people-centric culture. She aligns Neuralix’s talent strategies with business goals, supporting its mission of innovation and sustainability.',
    image: SaritaSingh || FemalePlaceHolder,
  },
]

export type TeamMemberDetailsType = {
  name: string
  designation: string
  linkedinHref: string
}
