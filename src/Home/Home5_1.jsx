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
        return 'absolute -left-25 z-5 opacity-70 scale-90 transform -translate-x-20';
      case 'center':
        return 'relative z-10 opacity-100 scale-110';
      case 'right':
        return 'absolute -right-25 z-5 opacity-70 scale-90 transform translate-x-20';
      default:
        return '';
    }
  }

  return (
    <div className="w-full h-[780px] bg-[#0a1650] mt-[-1px]">
      <div className='flex pt-[70px] gap-[15%] ml-[9%]'>
        <div className='w-[436px] flex flex-col'>
          <div className='text-[#fff] text-[80px] font-semibold'>CHAT WITH</div>
          <div className='text-[#fff] text-[80px] mt-[-50px] font-semibold'>YOUR AI</div>
          <div className='text-[#fff] text-[80px] mt-[-50px] font-thin'>ANYTIME</div>
          <div className='text-[#fff] text-[80px] mt-[-50px] font-thin'>ANYWHERE</div>
          <div className='text-[#fff] text-[24px] mt-[-10px] font-light'>"Shape your AI companion—choose your style, voice, and personality (e.g., "Empathetic Listener")—and chat to ease your loneliness. Your talks earn ME tokens via Train-to-Earn, growing your emotional ally with the community's support, all on your device!"</div>
        </div>
        <div className="flex justify-center items-center relative h-[800px]">
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
          <img src={pint} alt="" className='absolute max-w-none top-[-100px] left-[-350px] w-[500px] h-[500px]' />
          <img src={pint} alt="" className='absolute max-w-none bottom-[0px] right-[-350px] w-[500px] h-[500px]' />
        </div>
      </div>
    </div>
  )
}

export default Home5_1