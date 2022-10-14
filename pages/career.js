import React from 'react'
import Section1 from '../components/career/Section1';
import Section2 from '../components/career/Section2';
import Section3 from '../components/career/Section3';
import Section4 from '../components/career/Section4';
import HeaderBanner from "../components/HeaderBanner";

function CareerPage() {
  return (
      <div className='px-5 md:px-10 lg:px-16'>
          <HeaderBanner title='Career' />
          
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4/>
    </div>
  )
}

export default CareerPage