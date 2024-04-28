import React from 'react'
import SubscribeForm from '../subscribeForm'

function Subscribe() {
  return (
    <>
      {/* Subscribe */}
      <div className="max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto">
        <div className="max-w-xl text-center mx-auto">
          <div className="mb-5">
            <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
              Ready to boost your growth?
            </h2>
            <h3 className="text-base/7 px-2 font-normal md:text-lg/10 md:leading-tight dark:text-gray-500">
              14-day free trial - no credit card required
            </h3>
          </div>
          <SubscribeForm />
        </div>
      </div>
      {/* End Subscribe */}
    </>
  )
}

export default Subscribe
