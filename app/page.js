import Img from '@/components/Img'
import React from 'react'
import HeadingSection from '@/components/HeadingSection'
import Card from '@/components/Card'
import WorkExplanation from '@/components/WorkExplanation'
import Dashboard from '@/components/Dashboard'
import Slider from '@/components/Slider'

function page() {
  return (
    <div className="overflow-hidden">
      <Slider/>
      <Img/>
      <HeadingSection/>
      <Card/>
      <WorkExplanation/>
      <Dashboard/>
    </div>
  )
}


export default page

