import Collection from "./collection"
import HeroSection from "./heroSection"
import NavBar from "./navBar"


const HomePage = () => {
  return (
    <div>
      <NavBar header="#home" about="#about" products="#products" testimonials="#testimonials" />
      <HeroSection />
      <Collection />
    </div>
  )
}

export default HomePage
