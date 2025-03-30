import home_2 from '../assets/images/home_3_1.png'
import Ai_B_2 from '../assets/images/Ai_B_2.png'
import Ai_B_3 from '../assets/images/Ai_B_3.png'
import Ai_B_4 from '../assets/images/Ai_B_4.png'
import { useState, useEffect, useRef } from 'react'
import translations from '../assets/multi_language.json'

const Home2 = ({ currentLanguage }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [titleVisible, setTitleVisible] = useState(false)
  const [iconsVisible, setIconsVisible] = useState(false)
  const [textVisible, setTextVisible] = useState(false)
  const [icon1Visible, setIcon1Visible] = useState(false)
  const [icon2Visible, setIcon2Visible] = useState(false)
  const [icon3Visible, setIcon3Visible] = useState(false)
  const containerRef = useRef(null)

  const getText = (id) => {
    const translation = translations.find(t => t.id === id);
    return translation ? translation[currentLanguage === 'english' ? 'english' : 't_chinese'] : '';
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 标题先显示
          setTimeout(() => {
            setTitleVisible(true);
          }, 500);
          // 图标区域显示
          setTimeout(() => {
            setIconsVisible(true);
            // 依次显示三个图标
            setTimeout(() => {
              setIcon1Visible(true);
            }, 100);
            setTimeout(() => {
              setIcon2Visible(true);
            }, 1000);
            setTimeout(() => {
              setIcon3Visible(true);
            }, 1900);
          }, 1500);
          // 文字最后显示
          setTimeout(() => {
            setTextVisible(true);
          }, 2500);
        }
      });
    }, { threshold: 0.3 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className='home_2 w-full bg-[#0a1650] h-[773px] relative mt-[-1px]'>
      <img src={home_2} alt="" className='absolute right-0 top-0 h-[773px]' />
      <div className={`absolute mt-[148px] font-semibold text-[88px] ml-[122px] w-[780px] transition-opacity duration-[2000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`transition-all duration-[2000ms] ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <p><span className='text-[#ff6b4c]'>VIBELY</span> <span className='text-[#ffffff]'>{getText(8)}</span></p>
        </div>
        <div className={`grid grid-cols-3 grid-rows-2 gap-x-[75px] w-full grid-flow-col justify-center items-center transition-opacity duration-[2000ms] ${iconsVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`col-span-1 row-span-1 transition-all duration-[2000ms] ${icon1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <img src={Ai_B_2} alt="" className='mx-auto' />
          </div>
          <div className={`col-span-1 row-span-1 text-center transition-all duration-[2000ms] ${icon1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <p className='text-[24px] text-[#cfd5f6] mt-[-50px]'>{getText(9)}</p>
          </div>
          <div className={`col-span-1 row-span-1 mx-auto transition-all duration-[2000ms] ${icon2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <img src={Ai_B_3} alt="" />
          </div>
          <div className={`col-span-1 row-span-1 transition-all duration-[2000ms] ${icon2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <p className='text-[24px] text-[#cfd5f6] text-center mt-[-50px]'>{getText(10)}</p>
          </div>
          <div className={`col-span-1 row-span-1 mx-auto transition-all duration-[2000ms] ${icon3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <img src={Ai_B_4} alt="" />
          </div>
          <div className={`col-span-1 row-span-1 transition-all duration-[2000ms] ${icon3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <p className='text-[24px] text-[#cfd5f6] text-center mt-[-50px]'>{getText(11)}</p>
          </div>
        </div>
        <div className={`transition-opacity duration-[2000ms] ${textVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className='text-[24px] text-[#cfd5f6] font-extralight'>{getText(12)}</p>
        </div>
      </div>
    </div>
  )
}

export default Home2