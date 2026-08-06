import AboutPage from "./aboutPage"
import Collection from "./collection"
import HeroSection from "./heroSection"
import NavBar from "./navBar"
import Testimonials from "./testimonials"


const HomePage = () => {
  return (
    <div>
      <NavBar header="#home" about="#about" products="#products" testimonials="#testimonials" />
      <HeroSection />
      <Collection />
      <AboutPage />
      <Testimonials />
    </div>
  )
}

export default HomePage
