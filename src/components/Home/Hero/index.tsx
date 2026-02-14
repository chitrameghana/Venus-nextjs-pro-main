'use client'
import Image from 'next/image'
import Link from 'next/link'
// using real hero photo with styled overlays

const Hero = () => {
  return (
    <section className='relative md:pt-44 pt-28 bg-white  dark:bg-darklight bg-cover text-white'>
      <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10'>
        <div
          className='md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <div className='flex gap-2 items-center'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              career support
            </span>
          </div>
          <h1 className='text-midnight_text font-bold dark:text-white text-4xl  md:text-5xl md:leading-[1.15]'>
            Your Job Search, Handled Until You Get Hired
          </h1>
          <p className='text-grey dark:text-white/70 text-xl font-semibold'>
            We update your resume, manually apply for relevant jobs based on your skills, follow up with recruiters, and support you until placement.
          </p>
          <div className='flex gap-3 flex-wrap'>
            <a
              href='#apply-jobs'
              className='py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 px-8'>
              Apply Jobs for Me
            </a>
            <a
              href='#get-support'
              className='py-3 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition duration-300 px-8 font-medium'>
              Get Career Support
            </a>
          </div>
          <div className='mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200'>
            <p className='text-midnight_text font-semibold mb-2'>
              Stressed about job applications?
            </p>
            <p className='text-grey text-sm mb-3'>
              Don't worry — we apply for you until you get hired.
            </p>
            <p className='text-sm text-grey'>
              <span className='font-semibold'>Resume updates</span> • <span className='font-semibold'>Manual job applications</span> • <span className='font-semibold'>Recruiter follow-ups</span> • <span className='font-semibold'>Interview support</span>
            </p>
          </div>
          <div className='flex items-center mt-8 gap-4'>
            <div className='flex items-center'>
              <Image
                src='/images/hero/hero-profile-1.jpg'
                alt='hero-image'
                width={40}
                height={40}
                quality={100}
                className='w-10! h-10! rounded-full border border-solid border-white -ml-0'
              />
              <Image
                src='/images/hero/hero-profile-2.jpg'
                alt='hero-image'
                width={40}
                height={40}
                quality={100}
                className='w-10! h-10! rounded-full border border-solid border-white -ml-3'
              />
              <Image
                src='/images/hero/hero-profile-3.jpg'
                alt='hero-image'
                width={40}
                height={40}
                quality={100}
                className='w-10! h-10! rounded-full border border-solid border-white -ml-3'
              />
            </div>
            <div>
              <p className='text-sm font-normal text-grey max-w-56'>
                Need help?{' '}
                <Link href='#' className='text-primary hover:text-blue-700 font-semibold'>
                  Talk to our career experts
                </Link>{' '}
                Tell us your role, skills, and job preference
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 col-span-12 relative before:absolute before:content-[''] before:bg-[url('/images/hero/line-leyar.svg')] before:bg-no-repeat before:left-1/2 before:top-0 before:h-24 before:w-52 before:-z-10 before:translate-x-70% before:-translate-y-40% lg:before:inline-block before:hidden after:absolute after:content-[''] after:bg-[url('/images/hero/round-leyar.svg')] after:bg-no-repeat xl:after:inline-block after:hidden after:left-0 after:bottom-0 after:h-6.25 after:w-6.25 after:-z-10 after:-translate-x-1/2 after:translate-y-1/2">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-white">
              <Image
                src="/images/hero/hero-image.png"
                alt="Professional at work"
                width={900}
                height={900}
                quality={100}
                priority
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                className=""
              />

              {/* Top-left floating card */}
              <div className="absolute left-6 top-6 bg-white rounded-lg shadow-md w-40 md:w-48 p-3 border border-gray-100">
                <div className="bg-indigo-600 text-white rounded-md px-3 py-2 text-sm font-semibold text-center">Job Offer</div>
                <div className="mt-2 space-y-1">
                  <div className="h-1.5 bg-gray-100 rounded w-3/4"></div>
                  <div className="h-1.5 bg-gray-100 rounded w-5/6"></div>
                </div>
                <div className="mt-3 text-green-600 font-semibold text-sm">Congratulations! ✓</div>
              </div>

              {/* Top-right check */}
              <div className="absolute right-10 top-16 w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center border-2 border-emerald-300">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Career path */}
              <svg className="absolute left-8 md:left-14 bottom-36 md:bottom-44 w-64 h-40" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 90 C60 60, 110 40, 180 10" stroke="#6366f1" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <circle cx="30" cy="82" r="6" fill="#6366f1" />
                <circle cx="95" cy="60" r="6" fill="#6366f1" />
                <circle cx="160" cy="28" r="6" fill="#6366f1" />
              </svg>

              {/* Bottom-right briefcase */}
              <div className="absolute right-6 bottom-8 bg-white rounded-lg shadow-md w-36 md:w-44 p-3 border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-8 bg-indigo-600 rounded-md flex items-center justify-center"></div>
                <div>
                  <div className="text-sm font-semibold text-midnight_text">Your New Role</div>
                  <div className="text-xs text-gray-400">Position Confirmed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Stats Section */}
    
    </section>
  )
}

export default Hero
