import Image from 'next/image'

export default function EmePortalSection() {
  return (
    <section className='py-16 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 w-full'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row items-center gap-12'>
          <div className='flex-1 space-y-6'>
            <span className='inline-block bg-teal-500/10 text-teal-300 px-4 py-2 rounded-full font-medium text-sm border border-teal-400/30'>
              Predictive Analytics
            </span>

            <h2 className='text-3xl md:text-5xl font-bold text-white leading-tight'>
              EME Portal
              <span className='block text-teal-400 text-2xl md:text-3xl mt-2'>
                AI-Powered Defense Readiness Intelligence Platform
              </span>
            </h2>

            <p className='text-lg text-slate-300 leading-relaxed'>
              Our next-generation Defense Readiness Intelligence Platform
              harnesses Artificial Intelligence to transform maintenance,
              logistics, and operational planning.
            </p>
            <p className='text-lg text-slate-300 leading-relaxed'>
              The platform continuously analyzes equipment performance, predicts
              potential failures, recommends maintenance actions, optimizes spare
              part requirements, and evaluates force readiness under real-world
              operational scenarios.
            </p>
            <p className='text-lg text-slate-300 leading-relaxed'>
              Commanders and planners gain a comprehensive, real-time view of
              asset availability, risk factors, and mission preparedness within
              seconds. Moving beyond conventional reporting systems, the solution
              enables predictive readiness management, strengthens operational
              resilience, and supports data-driven decision-making at every level
              of military command. Currently demonstrated as a successful Proof
              of Concept, the platform is engineered for enterprise-scale
              deployment across defense organizations
            </p>
          </div>

          <div className='flex-1 flex justify-center'>
            <div className='relative'>
              <div className='w-80 h-96 bg-gradient-to-br from-teal-900 to-slate-700 rounded-3xl overflow-hidden shadow-2xl border border-teal-400/20'>
                <Image
                  src='/eme.png'
                  alt='EME Portal - AI-Powered Defense Readiness Intelligence Platform'
                  width={400}
                  height={400}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='absolute -top-4 -right-4 w-8 h-8 bg-teal-400 rounded-full opacity-60 shadow-md'></div>
              <div className='absolute -bottom-6 -left-6 w-12 h-12 bg-teal-200 rounded-full opacity-40 shadow-md'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
