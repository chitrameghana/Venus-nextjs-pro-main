import React from 'react'

const Testimonial = () => {
  return (
    <section className='scroll-mt-24 bg-section dark:bg-darklight border-none py-16' id='testimonials'>
      <div className='container mx-auto max-w-4xl px-4'>
        <div className='bg-white dark:bg-darkmode rounded-2xl shadow-lg p-8 md:p-12 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold text-midnight_text dark:text-white mb-6'>
            Stop Struggling With Job Applications. Start Getting Interview Calls.
          </h2>
          <p className='text-base md:text-lg text-secondary dark:text-white/80 mb-8'>
            Applying to jobs every day, tracking applications, and preparing alone is exhausting — and often doesn’t work.
          </p>
          <p className='text-base md:text-lg text-secondary dark:text-white/80 mb-8'>
            We take care of the entire job search process for you. Our team manually applies to jobs on your behalf, matches roles to your skills, and prepares you for interviews so you can focus on what truly matters — getting hired.
          </p>
          <h3 className='text-xl font-semibold text-midnight_text dark:text-white mb-4'>What We Do for You</h3>
          <ul className='text-left inline-block mx-auto mb-8 space-y-3'>
            <li className='flex items-start gap-2'><span className='text-green-500 text-lg mt-1'>✔</span> 100% manual job applications by real career assistants</li>
            <li className='flex items-start gap-2'><span className='text-green-500 text-lg mt-1'>✔</span> Skill-based role matching — no irrelevant jobs</li>
            <li className='flex items-start gap-2'><span className='text-green-500 text-lg mt-1'>✔</span> Interview preparation & mock interviews (virtual)</li>
            <li className='flex items-start gap-2'><span className='text-green-500 text-lg mt-1'>✔</span> End-to-end support until you get hired</li>
          </ul>
          <div className='text-base md:text-lg text-midnight_text dark:text-white font-medium'>
            Human support. No bots. No mass spam.
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
