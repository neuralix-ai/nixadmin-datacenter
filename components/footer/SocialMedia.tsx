import React from 'react';
import linkedIn from '@/assets/icons/footer_linkedin.svg'
import twitter from '@/assets/icons/footer_twitter-x.svg'
import youtube from '@/assets/icons/footer_youtube.svg'
import Image from 'next/image';
import Link from 'next/link'

interface SocialMediaProps { }

const SocialMedia: React.FC<SocialMediaProps> = () => {
  const socialIcons = [
    { src: linkedIn, alt: "LinkedIn", hreflink: "https://www.linkedin.com/company/neuralixai/" },
    { src: twitter, alt: "Twitter", hreflink: "" },
    { src: youtube, alt: "Youtube", hreflink: "https://youtube.com/@neuralixinc?feature=shared" },
  ];

  return (
    <div className="flex gap-6 items-start self-stretch my-auto">
      {socialIcons.map((icon, index) => (
        <Link href={icon.hreflink} legacyBehavior key={index}>
          <a target='_blank' rel='noopener noreferrer' key={index}>
            <Image loading="lazy" src={icon.src} alt={icon.alt} width={32} height={32} className="object-contain shrink-0 w-8 aspect-square" />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;