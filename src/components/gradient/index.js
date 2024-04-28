import React from 'react'

function BgGradient() {
  return (
    <>
      {/* Gradients */}
      <div
        aria-hidden="true"
        className="hidden sm:flex absolute -z-0 -top-96 start-1/2 transform -translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900" />
        <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70" />
      </div>
      {/* End Gradients */}
    </>
  )
}

export default BgGradient
