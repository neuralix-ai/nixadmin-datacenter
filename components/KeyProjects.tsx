import Image from 'next/image'

export default function KeyProjects() {
  const projects = [
    {
      id: 1,
      category: 'Enterprise AI',
      title: 'EKAM AI - AIaaS Platform for the Indian Army',
      description:
        'IDEX ADITI grant winner; enterprise AI stack delivering model management and rapid deployment across Army data centres',
      features: [
        'Model management and deployment',
        'Enterprise-grade AI infrastructure',
      ],
      image: '/ekam.png',
    },
    {
      id: 2,
      category: 'Border Security',
      title: 'Surya Drishti AI – Border Management Engine',
      description:
        'Automated intrusion detection and alerting operational in high‑altitude sectors',
      features: [
        'Real-time intrusion detection',
        'High-altitude operational capability',
      ],
      image: '/suryadrihti.png',
    },
    {
      id: 3,
      category: 'Predictive Analytics',
      title: 'EME Portal - AI‑based Equipment Analytics',
      description:
        'Pilot completed for predictive maintenance insights on armoured vehicle fleets',
      features: [
        'Predictive maintenance algorithms',
        'Fleet optimization insights',
      ],
      image: '/eme.png',
    },
  ]

  return (
    <section className='py-16 px-4 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 w-full'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>
            Key Projects
          </h2>
          <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
            Innovative AI solutions delivering strategic advantages for defense
            and security operations
          </p>
        </div>

        <div className='space-y-24'>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className='flex-1 space-y-6'>
                <div className='flex items-center gap-4'>
                  <div className='w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-md'>
                    <span className='text-white font-semibold text-sm'>
                      {project.id}
                    </span>
                  </div>
                  <span className='bg-teal-50 text-teal-700 hover:bg-teal-100 px-4 py-2 rounded-full font-medium text-sm border border-teal-200 transition-colors'>
                    {project.category}
                  </span>
                </div>

                <div className='space-y-4'>
                  <h3 className='text-3xl md:text-4xl font-bold text-slate-900 leading-tight'>
                    {project.title}
                  </h3>
                  <p className='text-lg text-slate-600 leading-relaxed'>
                    {project.description}
                  </p>
                </div>

                <div className='space-y-3'>
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className='flex items-center gap-3'>
                      <div className='w-2 h-2 bg-teal-500 rounded-full flex-shrink-0 shadow-sm'></div>
                      <span className='text-slate-700'>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className='flex-1 flex justify-center'>
                <div className='relative'>
                  <div className='w-80 h-96 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full overflow-hidden shadow-xl'>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={400}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='absolute -top-4 -right-4 w-8 h-8 bg-teal-300 rounded-full opacity-60 shadow-md'></div>
                  <div className='absolute -bottom-6 -left-6 w-12 h-12 bg-teal-200 rounded-full opacity-40 shadow-md'></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
