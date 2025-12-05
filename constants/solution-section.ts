import aiStrategyIcon from '@/assets/icons/bulb.svg';
import customAIIcon from '@/assets/icons/globe.svg';
import industrialProcessIcon from '@/assets/icons/gear.svg';
import seamlessIntegrationIcon from '@/assets/icons/puzzle.svg';


interface SolutionData {
  imageSrc: string;
  title: string;
  description: string;
}

export const solutionsData: SolutionData[] = [
  {
    imageSrc: aiStrategyIcon,
    title: "AI Strategy & Consulting",
    description: "Identify and implement AI strategies tailored to your unique use cases."
  },
  {
    imageSrc: customAIIcon,
    title: "Custom AI Solutions",
    description: "Build tailored AI tools to automate workflows and support critical decisions."
  },
  {
    imageSrc: industrialProcessIcon,
    title: "Industrial Process Optimization",
    description: "Enhance speed, accuracy, and scalability in operations with AI-driven optimizations."
  },
  {
    imageSrc: seamlessIntegrationIcon,
    title: "Seamless Integration",
    description: "Integrate AI smoothly into existing systems with minimal disruption and maximum impact."
  }
];

export const INFO_CARDS = [
  {
    icon: aiStrategyIcon,
    text: 'Identify and implement AI strategies tailored to your unique use cases.',
    title:'AI Strategy & Consulting'
  },
  {
    icon: customAIIcon,
    text: 'Build tailored AI tools to automate workflows and support critical decisions.',
    title:'Custom AI Solutions'
  },
  {
    icon: industrialProcessIcon,
    text: 'Enhance speed, accuracy, and scalability in operations with AI-driven optimizations.',
    title:'Industrial Process Optimization'
  },
  {
    icon: seamlessIntegrationIcon,
    text: 'Integrate AI smoothly into existing systems with minimal disruption and maximum impact.',
    title:'Seamless Integration'
  },
];
