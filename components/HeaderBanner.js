import Image from 'next/image';
import React from 'react'

function HeaderBanner(props) {
  return (
    <div dangerouslySetInnerHTML={{ __html: props.title.toUpperCase() }} className="bg-[url('/images/header-banner.png')] bg-center bg-cover bg-no-repeat  text-xs 320:text-base 350:text-2xl sm:text-2xl md:text-4xl font-larken text-white px-5 md:px-10 lg:px-24 -mx-5 md:-mx-10  lg:-mx-16 py-5 md:py-10 lg:py-12 ">
     {}
    </div>
  )
}

export default HeaderBanner