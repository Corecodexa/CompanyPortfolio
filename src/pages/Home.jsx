import React from 'react';
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import AboutSection from '../components/home/AboutSection'
import WhyTrustUs from '../components/home/WhyTrustUs'
import ClientTestimonials from '../components/home/ClientTestimonials'
import CaseStudies from '../components/home/CaseStudies'
import FAQSection from '../components/home/FAQSection'


function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <AboutSection/>
      <WhyTrustUs/>
      <CaseStudies/>
    
      <ClientTestimonials/>
      <FAQSection/>
    </div>
  )
}

export default Home;
