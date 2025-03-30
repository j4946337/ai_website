import ICON_BG from "../assets/images/Ai_B_6.png"
import ICON_1 from "../assets/images/Ai_B_5.png"
import ICON_2 from "../assets/images/Ai_B_7.png"
import ICON_3 from "../assets/images/Ai_B_8.png"
import { useState, useEffect, useRef } from 'react'
import translations from '../assets/multi_language.json'

const Home3 = ({ currentLanguage }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [titleVisible, setTitleVisible] = useState(false)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [card1Visible, setCard1Visible] = useState(false)
  const [card2Visible, setCard2Visible] = useState(false)
  const [card3Visible, setCard3Visible] = useState(false)
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
          // 副标题显示
          setTimeout(() => {
            setSubtitleVisible(true);
          }, 1000);
          // 卡片依次显示
          setTimeout(() => {
            setCard1Visible(true);
          }, 1500);
          setTimeout(() => {
            setCard2Visible(true);
          }, 2000);
          setTimeout(() => {
            setCard3Visible(true);
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
    <div ref={containerRef} className="h-[774px] w-full bg-[#0b0f20] pt-[128px] mt-[-1px]">
      <div className={`flex flex-col items-center transition-opacity duration-[2000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`transition-all duration-[2000ms] ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <p className="text-[#ffffff] text-[80px] font-semibold">{getText(13)}</p>
        </div>
        <div className={`transition-all duration-[2000ms] ${subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <p className="text-[#94a4f2] text-[48px] font-light">{getText(14)}</p>
        </div>
        <div className="flex mt-[88px] gap-[45px] justify-center items-center">
          <div className={`w-[300px] h-[268px] bg-[#1f2131] rounded-[25px] relative transition-all duration-[2000ms] ${card1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <img src={ICON_BG} className="absolute" />
            <img src={ICON_1} className="absolute left-[33px] top-[-25px]" alt="" />
            <div className="flex flex-col gap-[27px] items-start w-[231px] ml-[35px] mt-[53px]">
              <p className="text-[#ff6b4c] text-[30px] font-normal">{getText(15)}</p>
              <p className="text-[#ffffff] text-[24px] font-light">{getText(16)}</p>
            </div>
          </div>
          <div className={`w-[300px] h-[268px] bg-[#1f2131] rounded-[25px] relative transition-all duration-[2000ms] ${card2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <img src={ICON_BG} className="absolute" />
            <img src={ICON_2} className="absolute left-[33px] top-[-25px]" alt="" />
            <div className="flex flex-col gap-[27px] items-start w-[231px] ml-[35px] mt-[53px]">
              <p className="text-[#ff6b4c] text-[30px] font-normal">{getText(17)}</p>
              <p className="text-[#ffffff] text-[24px] font-light">{getText(18)}</p>
            </div>
          </div>
          <div className={`w-[300px] h-[268px] bg-[#1f2131] rounded-[25px] relative transition-all duration-[2000ms] ${card3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <img src={ICON_BG} className="absolute" />
            <img src={ICON_3} className="absolute left-[33px] top-[-25px]" alt="" />
            <div className="flex flex-col gap-[27px] items-start w-[231px] ml-[35px] mt-[53px]">
              <p className="text-[#ff6b4c] text-[30px] font-normal">{getText(19)}</p>
              <p className="text-[#ffffff] text-[24px] font-light">{getText(20)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home3