import home_2 from '../assets/images/home_3_1.png'
import Ai_B_2 from '../assets/images/Ai_B_2.png'
import Ai_B_3 from '../assets/images/Ai_B_3.png'
import Ai_B_4 from '../assets/images/Ai_B_4.png'
import { useEffect, useState, useRef } from 'react';

const Home2 = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isIconsVisible, setIsIconsVisible] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const titleRef = useRef(null);
  const iconsRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target === titleRef.current && entry.isIntersecting) {
          setIsTitleVisible(true);
        } else if (entry.target === iconsRef.current && entry.isIntersecting) {
          setIsIconsVisible(true);
        } else if (entry.target === descriptionRef.current && entry.isIntersecting) {
          setIsDescriptionVisible(true);
        }
      });
    }, { threshold: 0.3 });

    if (titleRef.current) observer.observe(titleRef.current);
    if (iconsRef.current) observer.observe(iconsRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (iconsRef.current) observer.unobserve(iconsRef.current);
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
    };
  }, []);

  return (
    <div className='home_2 w-full bg-[#0a1650] h-[415px]  relative mt-[-1px]'>
      <img src={home_2} alt="" className='absolute  top-0  left-[-60%] h-[415px] w-[200%] max-w-none' />
      <div className='absolute  mt-[33px] font-semibold text-[34px] leading-[30px]  ml-[33px]  w-[156px] '>
        <p
          ref={titleRef}
          className={`flex flex-col transition-opacity duration-[4000ms] ${isTitleVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <span className='text-[#ff6b4c]'>ME AI</span>
          <span className='text-[#ffffff]'>UNVEILED</span>
        </p>
        {/* mobile */}
        <div
          ref={iconsRef}
          className={`flex flex-col w-full justify-center items-start gap-[13px] mt-[31px] transition-opacity duration-[4000ms] ${isIconsVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className='flex  items-center gap-[9px]'>
            <img src={Ai_B_2} alt="" className='w-[37px] h-[37px]' />
            <p className='text-[12px] text-[#cfd5f6]'>COMPANION</p>
          </div>
          <div className='flex  items-center gap-[9px]'>
            <img src={Ai_B_3} alt="" className='w-[37px] h-[37px]' />
            <p className='text-[12px] text-[#cfd5f6] text-center'>RULES</p>
          </div>
          <div className='flex  items-center gap-[9px]'>
            <img src={Ai_B_4} alt="" className='w-[37px] h-[37px]' />
            <p className='text-[12px] text-[#cfd5f6]'>REWARDS</p>
          </div>
        </div>
        <div
          ref={descriptionRef}
          className={`w-[253px] mt-[59px] transition-opacity duration-[4000ms] ${isDescriptionVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <p className='text-[11px] leading-[11px] text-[#cfd5f6] font-extralight'>ME AI fights for you—a decentralized space where you and your community build the best AI companion on a blockchain LLM. Train-to-Earn gives you ME tokens as you shape your friend across different types (e.g., "Creative Dreamer"), easing your loneliness with a caring, fair partner.</p>
        </div>
      </div>
    </div>
  )
}

export default Home2