import React from 'react'
import BgGradient from '../gradient';
import SubscribeForm from '../subscribeForm';

function Hero() {
  return (
    <>

          {/* Hero */}
  <div className="relative overflow-hidden">
    
      <BgGradient />
    
    <div className="relative z-10 lg:top-8 py-28">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="max-w-2xl text-center mx-auto">
          <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
            Preline: A vision for 2023
          </p>
          {/* Title */}
          <div className="mt-5 max-w-2xl">
            <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              The Intuitive Web Solutions
            </h1>
          </div>
          {/* End Title */}
          <div className="mt-5 max-w-3xl">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              Preline UI is an open-source set of prebuilt UI components,
              ready-to-use examples and Figma design system based on the
              utility-first Tailwind CSS framework.
            </p>
          </div>
          {/* Buttons */}

          <SubscribeForm />
          
          {/* <div className="mt-8 gap-3 flex justify-center">
            <a
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Get started
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
            <a
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-800"
              href="#"
            >
              <svg
                className="flex-shrink-0 size-4"
                width={19}
                height={18}
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.875 18C8.531 18 9.875 16.656 9.875 15V12H6.875C5.219 12 3.875 13.344 3.875 15C3.875 16.656 5.219 18 6.875 18Z"
                  fill="#0ACF83"
                />
                <path
                  d="M3.875 9C3.875 7.344 5.219 6 6.875 6H9.875V12H6.875C5.219 12 3.875 10.656 3.875 9Z"
                  fill="#A259FF"
                />
                <path
                  d="M3.875 3C3.875 1.344 5.219 0 6.875 0H9.875V6H6.875C5.219 6 3.875 4.656 3.875 3Z"
                  fill="#F24E1E"
                />
                <path
                  d="M9.87501 0H12.875C14.531 0 15.875 1.344 15.875 3C15.875 4.656 14.531 6 12.875 6H9.87501V0Z"
                  fill="#FF7262"
                />
                <path
                  d="M15.875 9C15.875 10.656 14.531 12 12.875 12C11.219 12 9.87501 10.656 9.87501 9C9.87501 7.344 11.219 6 12.875 6C14.531 6 15.875 7.344 15.875 9Z"
                  fill="#1ABCFE"
                />
              </svg>
              Preline Figma
            </a>
          </div> */}
          {/* End Buttons */}
        </div>
      </div>
    </div>
  </div>
  {/* End Hero */}

    </>
  )
}

export default Hero;