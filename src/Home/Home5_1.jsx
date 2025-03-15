import mobile_1 from '../assets/images/Ai_E_9.png'
import mobile_2 from '../assets/images/Ai_E_10.png'
import mobile_3 from '../assets/images/Ai_E_11.png'
import pint from '../assets/images/Ai_E_12.png'
import { useState, useEffect } from 'react'

const Home5_1 = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const images = [mobile_1, mobile_2, mobile_3]
  const [positions, setPositions] = useState([
    'right',
    'center',
    'left',
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      // 向左轮转位置：right -> center -> left -> right
      setPositions(prev => {
        const newPositions = [...prev];
        const lastPosition = newPositions.pop();
        newPositions.unshift(lastPosition);
        return newPositions;
      });
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // 获取位置对应的样式类
  const getPositionClasses = (position) => {
    switch (position) {
      case 'left':
        return 'absolute -left-0 z-5 opacity-70 scale-90 transform -translate-x-20';
      case 'center':
        return 'relative z-10 opacity-100 scale-110';
      case 'right':
        return 'absolute -right-0 z-5 opacity-70 scale-90 transform translate-x-20';
      default:
        return '';
    }
  }

  return (
    <div className="w-full h-[600px] bg-[#0a1650] mt-[-1px]">
      <div className='flex flex-col gap-[15%] '>
        <div className='w-full flex flex-col'>
          <div className='text-[#fff] text-[34px] leading-[34px] font-semibold text-center'>CHAT WITH</div>
          <div className='text-[#fff] text-[34px] leading-[34px] font-semibold text-center'>YOUR AI</div>
          <div className='text-[#fff] text-[34px] leading-[34px] font-thin text-center'>ANYTIME</div>
          <div className='text-[#fff] text-[34px] leading-[34px] font-thin text-center'>ANYWHERE</div>

        </div>
        <div className=" pt-[50px] flex justify-center items-center relative w-[45%] mx-auto">
          <img
            src={mobile_1}
            alt=""
            className={`transition-all duration-1000 ease-in-out ${getPositionClasses(positions[0])}`}
          />
          <img
            src={mobile_2}
            alt=""
            className={`transition-all duration-1000 ease-in-out ${getPositionClasses(positions[1])}`}
          />
          <img
            src={mobile_3}
            alt=""
            className={`transition-all duration-1000 ease-in-out ${getPositionClasses(positions[2])}`}
          />
          {/* <img src={pint} alt="" className='absolute max-w-none top-[-150px] left-[-400px] w-[600px] h-[600px]' />
          <img src={pint} alt="" className='absolute max-w-none bottom-[-50px] right-[-400px] w-[600px] h-[600px]' /> */}
        </div>
        <div className='text-[#cdcdcd] text-[11px] w-[225px] leading-[11px] font-light  mx-auto'>"Shape your AI companion—choose your style, voice, and personality (e.g., "Empathetic Listener")—and chat to ease your loneliness. Your talks earn ME tokens via Train-to-Earn, growing your emotional ally with the community's support, all on your device!"</div>
      </div>
    </div>
  )
}

export default Home5_1