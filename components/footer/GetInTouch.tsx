import { FOOTER_DATA } from '@/constants/footer';
import Link from 'next/link';
import React from 'react';

interface GetInTouchProps {}

const GetInTouch: React.FC<GetInTouchProps> = () => {
  return (
    <section className="flex flex-col w-full">
      <h2 className="font-bold text-white">GET IN TOUCH</h2>
      <div className='flex flex-col gap-y-2'>
        {FOOTER_DATA.tableThree.map(
          (item, index) =>
            item.type === 'link' && (
              <Link
                key={index}
                href={item.link || ''}
                className='text-gray-400'
              >
                {item.label}
              </Link>
            ),
        )}
        </div>
    </section>
  );
};

export default GetInTouch;