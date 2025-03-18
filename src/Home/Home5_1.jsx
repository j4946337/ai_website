import mobile_1 from '../assets/images/Ai_E_9.png'
import mobile_2 from '../assets/images/Ai_E_10.png'
import mobile_3 from '../assets/images/Ai_E_11.png'
import pint from '../assets/images/Ai_E_12.png'
import { useState, useEffect, useRef } from 'react'

const Home5_1 = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const images = [mobile_1, mobile_2, mobile_3]
  const [positions, setPositions] = useState([
    'right',
    'center',
    'left',
  ])

  // 添加状态来控制元素的可见性
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  // 创建引用来获取元素
  const titleRef = useRef(null);
  const carouselRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    // 轮播图效果
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

  useEffect(() => {
    // 创建Intersection Observer来检测元素是否在视口中
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target === titleRef.current && entry.isIntersecting) {
          setIsTitleVisible(true);
        } else if (entry.target === carouselRef.current && entry.isIntersecting) {
          setIsCarouselVisible(true);
        } else if (entry.target === descriptionRef.current && entry.isIntersecting) {
          setIsDescriptionVisible(true);
        }
      });
    }, { threshold: 0.3 }); // 当30%的元素可见时触发

    // 观察元素
    if (titleRef.current) observer.observe(titleRef.current);
    if (carouselRef.current) observer.observe(carouselRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);

    // 清理函数
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (carouselRef.current) observer.unobserve(carouselRef.current);
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
    };
  }, []);

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
        <div
          ref={titleRef}
          className={`w-full flex flex-col ${isTitleVisible ? '' : ''}`}
        >
          <div
            className={`text-[#fff] text-[34px] leading-[34px] font-semibold text-center transition-all duration-[1200ms] ${isTitleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[50px]'}`}
          >
            CHAT WITH
          </div>
          <div
            className={`text-[#fff] text-[34px] leading-[34px] font-semibold text-center transition-all duration-[1200ms] ${isTitleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50px]'}`}
          >
            YOUR AI
          </div>
          <div
            className={`text-[#fff] text-[34px] leading-[34px] font-thin text-center transition-opacity duration-[4000ms] ${isTitleVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            ANYTIME
          </div>
          <div
            className={`text-[#fff] text-[34px] leading-[34px] font-thin text-center transition-opacity duration-[4000ms] ${isTitleVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            ANYWHERE
          </div>
        </div>

        <div
          ref={carouselRef}
          className={`pt-[50px] flex justify-center items-center relative w-[45%] mx-auto transition-opacity duration-[4000ms] ${isCarouselVisible ? 'opacity-100' : 'opacity-0'}`}
        >
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

        <div
          ref={descriptionRef}
          className={`text-[#cdcdcd] text-[11px] w-[225px] leading-[11px] font-light mx-auto transition-opacity duration-[4000ms] ${isDescriptionVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          "Shape your AI companion—choose your style, voice, and personality (e.g., "Empathetic Listener")—and chat to ease your loneliness. Your talks earn ME tokens via Train-to-Earn, growing your emotional ally with the community's support, all on your device!"
        </div>
      </div>
    </div>
  )
}

export default Home5_1