import React from 'react';
import Menu from './Menu';
import GetInTouch from './GetInTouch';
import LegalPrivacy from './LegalPrivacy';
import Logo from './Logo';
import SocialMedia from './SocialMedia';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="flex flex-col p-20 bg-zinc-900 max-md:px-5">
      <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
        <Menu />
        <div className="flex flex-col grow shrink justify-center text-base leading-loose min-w-[240px] w-40">
          <GetInTouch />
          <LegalPrivacy />
        </div>
        <Logo />
      </div>
      <hr className="mt-10 w-full border border-solid bg-neutral-800 border-neutral-800 min-h-[1px] max-md:max-w-full" />
      <div className="flex flex-wrap gap-10 items-center mt-10 w-full max-md:max-w-full">
        <p className="flex-1 shrink self-stretch my-auto text-base tracking-wide leading-loose text-gray-400 basis-0 max-md:max-w-full">
          © Neuralix Datacenter Pvt Ltd 2026. All right reserved.
        </p>
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;