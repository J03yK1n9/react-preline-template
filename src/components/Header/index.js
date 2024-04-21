import React from 'react'
import PropTypes from 'prop-types';
import DarkMode from '../darkMode';
import CustomLink from '../Link';
import BgGradient from '../gradient';

function Header({ links }) {
  return (
<header className="overflow-hidden flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-transparent border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700">
      <BgGradient />
  <nav
    className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
    aria-label="Global"
  >
    <div className="flex items-center justify-between">
      <CustomLink
        className="flex-none text-xl font-semibold dark:text-white"
        url="/"
        aria-label="Brand"
      >
        Brand
      </CustomLink>
      <div className="sm:hidden">
        <button
          type="button"
          className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
          data-hs-collapse="#navbar-collapse-with-animation"
          aria-controls="navbar-collapse-with-animation"
          aria-label="Toggle navigation"
        >
          <svg
            className="hs-collapse-open:hidden flex-shrink-0 size-4"
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
            <line x1={3} x2={21} y1={6} y2={6} />
            <line x1={3} x2={21} y1={12} y2={12} />
            <line x1={3} x2={21} y1={18} y2={18} />
          </svg>
          <svg
            className="hs-collapse-open:block hidden flex-shrink-0 size-4"
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </div>
    <div
      id="navbar-collapse-with-animation"
      className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
    >
      <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
        {/* <CustomLink
          className="font-medium text-blue-600 sm:py-6 dark:text-blue-500"
          url="#"
          aria-current="page"
        >
          Landing
        </CustomLink> */}
        
        {/* Beginning of resume dropdown */}
<div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-6">
<button
    id="hs-dropdown-default"
    type="button"
    className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 z-50 text-sm font-bold text-gray-500 hover:text-gray-400 sm:py-6 dark:text-neutral-400 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 focus:text-blue-600 focus:dark:text-blue-500"
  >
    Why Brand?
    <svg
      className="hs-dropdown-open:rotate-180 size-4"
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  </button>
  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-80 hidden z-50 bg-white md:shadow-2xl rounded-lg py-2 md:p-2 dark:bg-neutral-800 dark:divide-neutral-700 before:absolute top-full before:-top-5 before:start-0 before:w-full before:h-5">
    <CustomLink
      className="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
      url="#"
    >
      <svg
        className="flex-shrink-0 size-5 mt-1"
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
        <line x1={22} x2={2} y1={12} y2={12} />
        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        <line x1={6} x2="6.01" y1={16} y2={16} />
        <line x1={10} x2="10.01" y1={16} y2={16} />
      </svg>
      <div className="grow">
        <span className="block font-semibold mb-1 text-gray-800 dark:text-neutral-200">
          Data
        </span>
        How you get the most accurate and up-to-date data
      </div>
    </CustomLink>
    <div className="my-2 border-t border-gray-100 dark:border-neutral-800" />
    <CustomLink
      className="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
      url="#"
    >
      <svg
        className="flex-shrink-0 size-5 mt-1"
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
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx={9} cy={7} r={4} />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
      <div className="grow">
        <span className="block font-semibold mb-1 text-gray-800 dark:text-neutral-200">
          Team{" "}
          <span className="inline ms-1 text-xs bg-blue-600 text-white py-1 px-2 rounded-full">
            We're hiring
          </span>
        </span>
        Meet the people building products to help your business grow
      </div>
    </CustomLink>
    <div className="my-2 border-t border-gray-100 dark:border-neutral-800" />
    <CustomLink
      className="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
      url="#"
    >
      <svg
        className="flex-shrink-0 size-5 mt-1"
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
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
        <path d="M18 14h-8" />
        <path d="M15 18h-5" />
        <path d="M10 6h8v4h-8V6Z" />
      </svg>
      <div className="grow">
        <span className="block font-semibold mb-1 text-gray-800 dark:text-neutral-200">
          Blog
        </span>
        The latest news, feature releases, and how to grow with data
      </div>
    </CustomLink>
  </div>
</div>
{/* End of resume dropdown */}

        {/* Beginning of resume dropdown */}
        <div className="hs-dropdown relative inline-flex">
  <button
    id="hs-dropdown-default"
    type="button"
    className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 z-50 text-sm font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-neutral-400 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 focus:text-blue-600 focus:dark:text-blue-500"
  >
    Resume
    <svg
      className="hs-dropdown-open:rotate-180 size-4"
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  </button>
  <div
    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 z-50 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
    // aria-labelledby="hs-dropdown-default"
  >
    <CustomLink
      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
      url="#"
    >
      Newsletter
    </CustomLink>
    <CustomLink
      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
      url="#"
    >
      Purchases
    </CustomLink>
    <CustomLink
      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
      url="#"
    >
      Downloads
    </CustomLink>
    <CustomLink
      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
      url="#"
    >
      Team Account
    </CustomLink>
  </div>
</div>
{/* End of resume dropdowm */}

        {/* <CustomLink
          className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-neutral-400 dark:hover:text-neutral-500 focus:text-blue-600 focus:dark:text-blue-500"
          url="/about"
        >
          Resume
        </CustomLink> */}

{/* Beginning of resources dropdown */}
        <div className="hs-dropdown relative inline-flex">
  <button
    id="hs-dropdown-default"
    type="button"
    className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 z-50 text-sm font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-neutral-400 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none  dark:border-neutral-700 focus:text-blue-600 focus:dark:text-blue-500"
  >
    Resources
    <svg
      className="hs-dropdown-open:rotate-180 size-4"
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  </button>
  <div
    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 z-50 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
    // aria-labelledby="hs-dropdown-default"
  >
    <CustomLink
      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
      url="#"
    >
      Newsletter
    </CustomLink>
    <CustomLink
      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
      url="#"
    >
      Purchases
    </CustomLink>
    <CustomLink
      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
      url="#"
    >
      Downloads
    </CustomLink>
    <CustomLink
      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
      url="#"
    >
      Team Account
    </CustomLink>
  </div>
</div>
{/* End of resources dropdowm */}



{links.map(link => {
  return (
    <div key={link.to}>
      <CustomLink 
        className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-neutral-400 dark:hover:text-neutral-500" 
        url={link.to}>
          {link.name}
      </CustomLink>
    </div>
  );
})}

{/* 
        <CustomLink
          className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-neutral-400 dark:hover:text-neutral-500"
          url="#"
        >
          About
        </CustomLink>
        <CustomLink
          className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-neutral-400 dark:hover:text-neutral-500"
          url="/pricing"
        >
          Pricing
        </CustomLink> */}


        <div className="flex items-center gap-x-2 sm:ms-auto">
          <CustomLink
            className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-500"
            url="/"
          >
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
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
            Log in
          </CustomLink>
        </div>

  <CustomLink
    url="/"
  >
    <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 focus:text-blue-600 focus:dark:text-blue-500">
      Signup free
      <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
      </svg>
    </button>
  </CustomLink>
<DarkMode />

      </div>
    </div>
  </nav>
</header>
  )
}

Header.defaultProps = {
  links: [],
};
Header.propTypes = {
  links: PropTypes.array,
}

export default Header;