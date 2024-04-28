import React from 'react'

function OneSolution() {
  return (
    <>
      <nav className="flex space-x-1" aria-label="Tabs" role="tablist">
        <button
          type="button"
          className="hs-tab-active:bg-blue-600 hs-tab-active:text-white hs-tab-active:hover:text-white hs-tab-active:dark:text-white py-3 px-4 text-center basis-0 grow inline-flex justify-center items-center gap-x-2 bg-transparent text-sm font-medium text-gray-500 hover:text-blue-600 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-neutral-300 active"
          id="equal-width-elements-item-1"
          data-hs-tab="#equal-width-elements-1"
          aria-controls="equal-width-elements-1"
          role="tab"
        >
          Tab 1
        </button>
        <button
          type="button"
          className="hs-tab-active:bg-blue-600 hs-tab-active:text-white hs-tab-active:hover:text-white hs-tab-active:dark:text-white py-3 px-4 text-center basis-0 grow inline-flex justify-center items-center gap-x-2 bg-transparent text-sm font-medium text-gray-500 hover:text-blue-600 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-neutral-300"
          id="equal-width-elements-item-2"
          data-hs-tab="#equal-width-elements-2"
          aria-controls="equal-width-elements-2"
          role="tab"
        >
          {/* Escaping `'` with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo; */}
          {`This is the longest link I've seen`}
        </button>
        <button
          type="button"
          className="hs-tab-active:bg-blue-600 hs-tab-active:text-white hs-tab-active:hover:text-white hs-tab-active:dark:text-white py-3 px-4 text-center basis-0 grow inline-flex justify-center items-center gap-x-2 bg-transparent text-sm font-medium text-gray-500 hover:text-blue-600 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-neutral-300"
          id="equal-width-elements-item-3"
          data-hs-tab="#equal-width-elements-3"
          aria-controls="equal-width-elements-3"
          role="tab"
        >
          Tab 3
        </button>
      </nav>
      <div className="mt-3">
        <div
          id="equal-width-elements-1"
          role="tabpanel"
          aria-labelledby="equal-width-elements-item-1"
        >
          <p className="text-gray-500 dark:text-neutral-400">
            This is the{' '}
            <em className="font-semibold text-gray-800 dark:text-neutral-200">
              first
            </em>{' '}
            {/* Escaping `'` with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo; */}
            {`item's tab body.`}
          </p>
        </div>
        <div
          id="equal-width-elements-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="equal-width-elements-item-2"
        >
          <p className="text-gray-500 dark:text-neutral-400">
            This is the{' '}
            <em className="font-semibold text-gray-800 dark:text-neutral-200">
              second
            </em>{' '}
            {`item's tab body.`}
          </p>
        </div>
        <div
          id="equal-width-elements-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="equal-width-elements-item-3"
        >
          <p className="text-gray-500 dark:text-neutral-400">
            This is the{' '}
            <em className="font-semibold text-gray-800 dark:text-neutral-200">
              third
            </em>{' '}
            {`item's tab body.`}
          </p>
        </div>
      </div>
    </>
  )
}

export default OneSolution
