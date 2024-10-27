import un from "../../../public/un.json"
import Lottie from "react-lottie"

const LottieSection = () => {
  const optionOne = {
    loop: true,
    autoplay: true,
    animationData: un,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <div className="lottie-container d-flex justify-content-center">
      <Lottie options={optionOne} width={800} height={800} />
    </div>
  )
}

export default LottieSection
