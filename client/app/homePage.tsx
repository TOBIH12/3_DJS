import AboutPage from "./aboutPage"
import Collection from "./collection"
import HeroSection from "./heroSection"
import NavBar from "./navBar"


const HomePage = () => {
  return (
    <div>
      <NavBar header="#home" about="#about" products="#products" testimonials="#testimonials" />
      <HeroSection />
      <Collection />
      <AboutPage />
    </div>
  )
}

export default HomePage
