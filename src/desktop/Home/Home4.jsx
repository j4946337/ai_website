import BRAIN from "../assets/images/Ai_C_1.png"
import SQUARE from "../assets/images/Ai_C_2.png"
import LEFT from "../assets/images/Ai_C_3.png"
import RIGHT_UP from "../assets/images/Ai_C_4.png"
import RIGHT_DOWN from "../assets/images/Ai_C_5.png"
import PEOPLE from "../assets/images/Ai_C_6.png"
import { useState, useEffect, useRef } from 'react'
import translations from '../assets/multi_language.json'

const Home4 = ({ currentLanguage }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [titleVisible, setTitleVisible] = useState(false)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [leftCardVisible, setLeftCardVisible] = useState(false)
  const [rightUpCardVisible, setRightUpCardVisible] = useState(false)
  const [rightDownCardVisible, setRightDownCardVisible] = useState(false)
  const [part2Visible, setPart2Visible] = useState(false)
  const [text1Visible, setText1Visible] = useState(false)
  const [text2Visible, setText2Visible] = useState(false)
  const [text3Visible, setText3Visible] = useState(false)
  const containerRef = useRef(null)
  const part2Ref = useRef(null)

  const getText = (id) => {
    const translation = translations.find(t => t.id === id);
    return translation ? translation[currentLanguage === 'english' ? 'english' : 't_chinese'] : '';
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setTitleVisible(true);
          }, 500);
          setTimeout(() => {
            setSubtitleVisible(true);
          }, 1000);
          setTimeout(() => {
            setLeftCardVisible(true);
          }, 1500);
          setTimeout(() => {
            setRightUpCardVisible(true);
          }, 2000);
          setTimeout(() => {
            setRightDownCardVisible(true);
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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setPart2Visible(true);
          setTimeout(() => {
            setText1Visible(true);
          }, 500);
          setTimeout(() => {
            setText2Visible(true);
          }, 1000);
          setTimeout(() => {
            setText3Visible(true);
          }, 1500);
        }
      });
    }, { threshold: 0.3 });

    if (part2Ref.current) {
      observer.observe(part2Ref.current);
    }

    return () => {
      if (part2Ref.current) {
        observer.unobserve(part2Ref.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-auto min-h-[1687px] bg-[#0a1650] relative overflow-hidden py-10 mt-[-1px]">
      {/* Part 1 */}
      <div className={`transition-opacity duration-[2000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <img src={BRAIN} className="absolute mx-auto top-[239px] left-[50%] translate-x-[-55%] w-auto" alt="" />
        <div className="flex flex-col items-center pt-[95px] px-4">
          <div className={`transition-all duration-[2000ms] ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <p className="text-[#ffffff] text-[80px] font-semibold text-center">{getText(21)}</p>
          </div>
          <div className={`transition-opacity duration-[2000ms] ${subtitleVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-[#94a4f2] text-[38px] mt-[-25px] font-light text-center">{getText(22)} | {getText(23)}</p>
          </div>
        </div>

        {/* left start */}
        <div className={`block transition-opacity duration-[2000ms] ${leftCardVisible ? 'opacity-100' : 'opacity-0'}`}>
          <img src={SQUARE} className="absolute top-[425px] left-[18%] translate-x-[-51%] w-[348px] h-[228px]" alt="" />
          <img src={LEFT} className="absolute top-[515px] left-[29%] w-[12%]" alt="" />
          <div className="flex flex-col absolute top-[450px] left-[8%]">
            <p className="text-[#ff6b4c] text-[30px] font-normal w-[290px] text-right">{getText(24)}</p>
            <p className="text-[#cdcdcd] text-[24px] font-light w-[290px] text-right">{getText(25)}</p>
          </div>
        </div>
        {/* left end */}

        {/* right up start */}
        <div className={`block transition-opacity duration-[2000ms] ${rightUpCardVisible ? 'opacity-100' : 'opacity-0'}`}>
          <img src={SQUARE} className="rotate-180 absolute top-[309px] left-[82%] translate-x-[-50%] w-[348px] h-[228px]" alt="" />
          <img src={RIGHT_UP} className="absolute top-[415px] left-[60%] w-[11%]" alt="" />
          <div className="flex flex-col absolute top-[320px] left-[73%]">
            <p className="text-[#ff6b4c] text-[30px] font-normal w-[277px] text-left">{getText(26)}</p>
            <p className="text-[#cdcdcd] text-[24px] font-light w-[277px] text-left">{getText(27)}</p>
          </div>
        </div>
        {/* right up end */}

        {/* right down start */}
        <div className={`block transition-opacity duration-[2000ms] ${rightDownCardVisible ? 'opacity-100' : 'opacity-0'}`}>
          <img src={SQUARE} className="rotate-180 absolute top-[580px] left-[82%] translate-x-[-50%] w-[348px] h-[228px]" alt="" />
          <img src={RIGHT_DOWN} className="absolute top-[600px] left-[48%] translate-x-[-1.5%] w-[23%]" alt="" />
          <div className="flex flex-col absolute top-[600px] left-[73%]">
            <p className="text-[#ff6b4c] text-[30px] font-normal w-[303px] text-left">{getText(28)}</p>
            <p className="text-[#cdcdcd] text-[24px] font-light w-[303px] text-left">{getText(29)}</p>
          </div>
        </div>
        {/* right down end */}
      </div>

      {/* Part 2 */}
      <div ref={part2Ref} className={`flex flex-row justify-between mt-0 absolute top-[570px] left-0 px-0 transition-opacity duration-[2000ms] ${part2Visible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative w-auto mb-0">
          <img src={PEOPLE} alt="" className={`max-w-full max-h-full mx-0 object-cover z-20 transition-all duration-[2000ms] ${part2Visible ? 'blur-0' : 'blur-[10px]'}`} />
        </div>

        <div className="flex flex-col h-full pt-[320px] gap-[10px] ml-[-70px]">
          <div className={`flex flex-col transition-all duration-[2000ms] ${text1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <p className="font-semibold text-[#ffffff] text-[40px]">{getText(30)}</p>
            <p className="text-[#ff6b4c] text-[30px] mt-[-10px]">{getText(31)}</p>
            <p className="text-[#cdcdcd] text-[24px] font-light w-[482px]">{getText(32)}</p>
          </div>
          <div className={`flex flex-col transition-all duration-[2000ms] ${text2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <p className="font-semibold text-[#ffffff] text-[40px]">{getText(33)}</p>
            <p className="text-[#ff6b4c] text-[30px] mt-[-10px]">{getText(34)}</p>
            <p className="text-[#cdcdcd] text-[24px] font-light w-[490px]">{getText(35)}</p>
          </div>
          <div className={`flex flex-col transition-all duration-[2000ms] ${text3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <p className="font-semibold text-[#ffffff] text-[40px]">{getText(36)}</p>
            <p className="text-[#ff6b4c] text-[30px] mt-[-10px]">{getText(37)}</p>
            <p className="text-[#cdcdcd] text-[24px] font-light w-[487px]">{getText(38)}</p>
          </div>
        </div>
      </div>

      {/* Mobile version of the diagrams */}
      <div className="hidden px-4 mt-10">
        <div className="mb-10">
          <p className="text-[#ff6b4c] text-2xl font-normal text-center">{getText(24)}</p>
          <p className="text-[#cdcdcd] text-lg font-light text-center mt-2">{getText(25)}</p>
        </div>
        <div className="mb-10">
          <p className="text-[#ff6b4c] text-2xl font-normal text-center">{getText(26)}</p>
          <p className="text-[#cdcdcd] text-lg font-light text-center mt-2">{getText(27)}</p>
        </div>
        <div className="mb-10">
          <p className="text-[#ff6b4c] text-2xl font-normal text-center">{getText(28)}</p>
          <p className="text-[#cdcdcd] text-lg font-light text-center mt-2">{getText(29)}</p>
        </div>
      </div>
    </div>
  )
}

export default Home4