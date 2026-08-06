import AboutPage from "./aboutPage"
import Collection from "./collection"
import HeroSection from "./heroSection"
import NavBar from "./navBar"
import Testimonials from "./testimonials"
import Contact from "./contact"


const HomePage = () => {
  return (
    <div>
      <NavBar header="#home" about="#about" products="#products" testimonials="#testimonials" />
      <HeroSection />
      <Collection />
      <AboutPage />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default HomePage
