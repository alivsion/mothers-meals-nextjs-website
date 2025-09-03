// import CookingProcess from "./components/CookingProcess"
import HeroSec from "./components/HeroSec"
import Reviews from "./components/Reviews"
import SafetySec from "./components/SafetySec"
import SectionTwo from "./components/SectionTwo"

const Home = () => {
  return (
    <>
      <HeroSec/>
      <SectionTwo/>
      <SafetySec/>
      {/* <CookingProcess/> */}
      <Reviews/>
    </>
  )
}

export default Home