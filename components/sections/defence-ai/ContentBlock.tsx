import { ContentBlockProps } from '@/constants/defence-ai-section';
import React from 'react';


const ContentBlock: React.FC<ContentBlockProps> = ({ title, description }) => {
  return (
    <article className="flex flex-col max-w-full min-h-[220px] w-[389px] mb-10">
      <h2 className="text-3xl font-bold leading-10 text-white">{title}</h2>
      <p className="mt-3 text-lg tracking-wide leading-7 text-slate-300">{description}</p>
    </article>
  );
};

export default ContentBlock;