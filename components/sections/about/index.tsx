import React from 'react';
import AboutSection from './AboutSection';

const AboutSectionWrapper: React.FC = () => {
  const leftText = "Neuralix provides advanced AI solutions in the energy, manufacturing, and defense sectors, turning complex operational data into precise, actionable insights. Our technology enhances real-time decision-making, allowing industries to anticipate issues ahead of time, optimize equipment performance, minimize operational costs, and enhance security and operational efficiency. Designed for seamless integration, Neuralix's adaptable frameworks improve efficiency and support critical sustainability goals. "
  const rightText = "We're committed to driving measurable improvements that empower clients to achieve long-term success. Leveraging cutting-edge generative AI and data lifecycle templatization, Neuralix ensures rapid deployment with minimal disruption, transforming maintenance strategies from reactive to proactive. With scalable, versatile solutions, we help businesses unlock valuable new opportunities while advancing sustainability and operational excellence."

  return <AboutSection leftText={leftText} rightText={rightText} />;
};

export default AboutSectionWrapper;