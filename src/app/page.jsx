"use client"
import BestDealsSection from "@/components/section/BestDealsSection"
import HeroSection from "@/components/section/HeroSection"
import NewReleasedSection from "@/components/section/NewReleasedSection"

const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <BestDealsSection />
      <NewReleasedSection/>
    </>
  )
}

export default HomePage