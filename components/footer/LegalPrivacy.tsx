import { FOOTER_DATA } from '@/constants/footer';
import React from 'react';
import Link from 'next/link'

interface LegalPrivacyProps {}

const LegalPrivacy: React.FC<LegalPrivacyProps> = () => {
  return (
    <section className="flex flex-col mt-10 w-full text-gray-400">
      <h2 className="font-bold text-white">LEGAL & PRIVACY</h2>
      <div className='flex flex-col gap-y-2'>
        {FOOTER_DATA.tableTwo.map((item, index) =>
          item.type === 'link' ? (
            <Link key={index} href={item.link || ''}>
              {item.label}
            </Link>
          ) : (
            <p key={index}>{item.label}</p>
          ),
        )}
      </div>
    </section>
  );
};

export default LegalPrivacy;