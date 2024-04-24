import React from 'react'
import CustomLink from '../Link';

function SubscribeForm() {
  return (
    <form>
    <div className="mt-10 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">
              <label htmlFor="hero-input" className="sr-only">
                Trial form
              </label>
        <input
          type="text"
          className="p-4 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="Enter your email"
        />
        <div className="absolute top-1/2 end-2 -translate-y-1/2 right-1">
            <CustomLink
              url="/"
            >
              <button
               type="button"
                className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-blue-600 text-white hover:bg-blue-700 text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white focus:text-gray-200 focus:dark:text-gray-200">
                  Start free trial
              </button>
            </CustomLink>
        </div>
      </div>
    </div>
    </form>
  )
}

export default SubscribeForm;