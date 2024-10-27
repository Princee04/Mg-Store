import Intro from "../Intro/Intro"
import LottieSection from "../Lottie/LottieSection"

const Body = () => {
  return (
    <div className="body-container container" style={{ marginTop: "70px" }}>
      {/* Ajustez la valeur de marginTop en fonction de la hauteur de votre Header */}
      <Intro />
      <LottieSection />
    </div>
  )
}

export default Body
