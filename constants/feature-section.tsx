import chartline from '@/assets/icons/ChartLine.svg'
import bell from '@/assets/icons/Bell.svg'
import gear from '@/assets/icons/Gear2.svg'
import satellite from '@/assets/icons/satelite.svg'
import personImage from '@/assets/images/person2.png'
import machines1Image from '@/assets/images/machine1.png'
import machines2Image from '@/assets/images/machine2.png'
import alertsImage from '@/assets/images/alerts.png'
import { StaticImageData } from 'next/image'

interface Feature {
    icon: string;
    title: string;
    description: string;
    image: StaticImageData;
  }
  
export const featureData: Feature[] = [
    {
      icon: chartline,
      title: "Predictive Data Modeling",
      description: "Leverage cutting-edge AI models that analyze historical and real-time data, enabling proactive insights to mitigate risks and optimize resource allocation.",
      image: personImage
    },
    {
      icon: bell,
      title: "Real-Time Data and Alerts",
      description: "Gain immediate insights and receive real-time alerts to respond swiftly to operational changes and challenges as they arise.",
      image: alertsImage
    },
    {
      icon: gear,
      title: "High-Performance Optimization Engine",
      description: "Deploy powerful AI engines that enhance equipment performance, extend operational lifespans, and reduce maintenance costs.",
      image: machines1Image
    },
    {
      icon: satellite,
      title: "Autonomous Edge Intelligence",
      description: "Run AI algorithms directly at the edge to support autonomous decisions and enable efficient, on-site data-driven actions.",
      image: machines2Image
    }
  ];