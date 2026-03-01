'use client'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className='relative md:pt-44 pt-28 bg-white dark:bg-darklight bg-cover text-white'>
        <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10'>
          
          {/* LEFT CONTENT */}
          <div
            className='md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center'
            data-aos='fade-right'
          >
            <div className='flex gap-2 items-center'>
              <span className='w-3 h-3 rounded-full bg-success'></span>
              <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
                career support
              </span>
            </div>

            <h1 className='text-midnight_text font-bold dark:text-white text-4xl md:text-5xl md:leading-[1.15]'>
              Your Job Search, Handled Until You Get Hired
            </h1>

            <p className='text-grey dark:text-white/70 text-xl font-semibold'>
              We update your resume, manually apply for relevant jobs based on your skills,
              follow up with recruiters, and support you until placement.
            </p>

            <div className='flex gap-3 flex-wrap'>
              <a className='py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 px-8'>
                Apply Jobs for Me
              </a>

              <a className='py-3 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition duration-300 px-8 font-medium'>
                Get Career Support
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:col-span-6 col-span-12 relative">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-white">
              <Image
                src="/images/hero/hero-image.png"
                alt="Professional at work"
                width={900}
                height={900}
                quality={100}
                priority
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

     
    </>
  )
}

export default Hero
