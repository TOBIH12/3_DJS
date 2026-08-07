import AboutPage from "./aboutPage"
import Collection from "./collection"
import HeroSection from "./heroSection"
import Testimonials from "./testimonials"
import Contact from "./contact"
import Footer from "./footer"


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Collection />
      <AboutPage />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage
