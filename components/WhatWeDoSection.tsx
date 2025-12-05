import { BarChart3, Brain, Cog, Server, Shield, Target } from 'lucide-react'

export default function WhatWeDoSection() {
  return (
    <section className=' w-full min-h-screen  bg-gradient-to-b from-[#F6FBFB] via-[#E4E8E8] to-[#DEEDED] '>
      <div className='max-w-7xl mx-auto pt-16'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>
            What we do
          </h2>
        </div>

        <div className='mb-20'>
          <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
            <div className='flex items-start space-x-6'>
              <div className='flex-shrink-0'>
                <div className='w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg'>
                  <Shield className='w-8 h-8 text-white' />
                </div>
              </div>
              <div className='flex-1'>
                <h3 className='text-xl font-semibold text-slate-900 mb-3'>
                  Boost Operational Excellence & Sustainability
                </h3>
                <p className='text-slate-600 leading-relaxed'>
                  We help the Defence sector boost operational excellence and
                  sustainability by addressing critical gaps in AI adoption and
                  DataOps
                </p>
              </div>
            </div>

            <div className='flex items-start space-x-6'>
              <div className='flex-shrink-0'>
                <div className='w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg'>
                  <Target className='w-8 h-8 text-white' />
                </div>
              </div>
              <div className='flex-1'>
                <h3 className='text-xl font-semibold text-slate-900 mb-3'>
                  Enhance Decision‑Making & Efficiency
                </h3>
                <p className='text-slate-600 leading-relaxed'>
                  By combining AI and data‑driven automation, ND enhances
                  decision‑making, optimises processes, and ensures sustainable
                  efficient operations
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className='text-2xl font-semibold text-slate-900 text-center mb-12'>
            Our Offerings in Defence Tech
          </h3>

          <div className='grid md:grid-cols-2 gap-6 lg:gap-8'>
            <div className='bg-white/70 border border-slate-300 rounded-2xl p-8 hover:bg-white/90 transition-colors hover:border-teal-500/50 shadow-lg'>
              <div className='flex items-center space-x-4 mb-4'>
                <div className='w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center shadow-md'>
                  <Cog className='w-6 h-6 text-white' />
                </div>
                <div className='bg-teal-50 px-4 py-2 rounded-full border border-teal-200'>
                  <span className='text-teal-700 font-medium text-sm'>
                    Turnkey Solutions
                  </span>
                </div>
              </div>
              <p className='text-slate-600 leading-relaxed'>
                AI‑as‑a‑Service along with infrastructure and customised
                strategic solutions
              </p>
            </div>

            <div className='bg-white/70 border border-slate-300 rounded-2xl p-8 hover:bg-white/90 transition-colors hover:border-teal-500/50 shadow-lg'>
              <div className='flex items-center space-x-4 mb-4'>
                <div className='w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center shadow-md'>
                  <BarChart3 className='w-6 h-6 text-white' />
                </div>
                <div className='bg-teal-50 px-4 py-2 rounded-full border border-teal-200'>
                  <span className='text-teal-700 font-medium text-sm'>
                    Predictive Analytics
                  </span>
                </div>
              </div>
              <p className='text-slate-600 leading-relaxed'>
                AI‑powered analytics and decision‑support services tailored for
                military applications
              </p>
            </div>

            <div className='bg-white/70 border border-slate-300 rounded-2xl p-8 hover:bg-white/90 transition-colors hover:border-teal-500/50 shadow-lg'>
              <div className='flex items-center space-x-4 mb-4'>
                <div className='w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center shadow-md'>
                  <Brain className='w-6 h-6 text-white' />
                </div>
                <div className='bg-teal-50 px-4 py-2 rounded-full border border-teal-200'>
                  <span className='text-teal-700 font-medium text-sm'>
                    Language Models & AI Agents
                  </span>
                </div>
              </div>
              <p className='text-slate-600 leading-relaxed'>
                Development of indigenous Large Language Models (LLMs) and Small
                Language Models (SLMs) trained on Defence‑specific datasets to
                ensure relevance and accuracy
              </p>
            </div>

            <div className='bg-white/70 border border-slate-300 rounded-2xl p-8 hover:bg-white/90 transition-colors hover:border-teal-500/50 shadow-lg'>
              <div className='flex items-center space-x-4 mb-4'>
                <div className='w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center shadow-md'>
                  <Server className='w-6 h-6 text-white' />
                </div>
                <div className='bg-teal-50 px-4 py-2 rounded-full border border-teal-200'>
                  <span className='text-teal-700 font-medium text-sm'>
                    AI Infrastructure
                  </span>
                </div>
              </div>
              <p className='text-slate-600 leading-relaxed'>
                Building a robust and scalable AI infrastructure (HW & SW)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
