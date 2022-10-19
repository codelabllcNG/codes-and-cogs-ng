import React from 'react'

function Section1(props) {
  const {heroBgImage, heroText} = props
  return (
      <div className=" bg-center bg-cover bg-no-repeat  text-xs 320:text-base 350:text-2xl sm:text-2xl md:text-4xl font-larken text-white px-5 md:px-10 lg:px-16 -mx-5 md:-mx-10  lg:-mx-16 py-20 md:py-32 lg:py-40 text-center"
      dangerouslySetInnerHTML={{ __html: heroText }}
      // bg-[url('/images/career-first-bg.png')]
          style={{ backgroundImage: `url(${heroBgImage || '/images/career-first-bg.png'})` }}
      >
          {}
    </div>
  )
}

export default Section1