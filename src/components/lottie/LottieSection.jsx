import un from '../../../public/un.json'
import Lottie from "react-lottie";
const LottieSection = () => {
    const optionOne={
        loop:true,
        autoplay:true,
        animationData:un,
        rendererSetting:{
          preserveAspectRatio:'xMidYMid slice'
        }
      }
    return (
        <div className='lottie-container'>
            <Lottie options={optionOne} width={800} height={800} />
        </div>
    );
}

export default LottieSection;
