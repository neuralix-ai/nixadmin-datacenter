import React from 'react';
import ContentBlock from './ContentBlock';
import { contentData } from '@/constants/defence-ai-section';
import defenceAi from '@/assets/images/defence_ai.png'
import Image from 'next/image';

const DefenceAI: React.FC = () => {
    return (
        <main className="flex overflow-hidden flex-col p-20 bg-zinc-900 max-md:px-5 w-full">
            <h1 className="text-6xl font-bold text-center text-white leading-[63px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
                Advanced AI Solutions for <br /> National Security and Intelligence
            </h1>

            <section className="flex flex-wrap gap-10 items-start mt-10 w-full max-md:max-w-full">
                
                <div className="flex flex-col grow shrink justify-center min-w-[240px] w-[311px]">
                    {contentData.slice(0, 2).map((block, index) => (
                        <ContentBlock key={index} {...block} />
                    ))}
                </div>
                <div className="flex flex-col grow shrink justify-center min-w-[240px] w-[311px]">
                    {contentData.slice(2, 4).map((block, index) => (
                        <ContentBlock key={index} {...block} />
                    ))}
                </div>
                <figure className="flex overflow-hidden flex-col grow shrink justify-center rounded-2xl min-w-[240px] w-[342px]">
                    <Image loading="lazy" src={defenceAi} width={500} height={500} className="object-contain w-full aspect-[0.87]" alt="AI Solutions for National Security" />
                </figure>
            </section>
        </main>
    );
};

export default DefenceAI;