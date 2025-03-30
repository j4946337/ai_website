import wire_1 from "../assets/images/Ai_D_Wire_1.png"
import wire_2 from "../assets/images/Ai_D_Wire_2.png"
import wire_3 from "../assets/images/Ai_D_Wire_3.png"
import wire_4 from "../assets/images/Ai_D_Wire_4.png"
import step_bg from "../assets/images/Ai_D_1.png"
import step_1 from "../assets/images/Ai_D_4.png"
import step_2 from "../assets/images/Ai_D_5.png"
import step_3 from "../assets/images/Ai_D_6.png"
import step_4 from "../assets/images/Ai_D_7.png"
import step_5 from "../assets/images/Ai_D_3.png"
import step_6 from "../assets/images/Ai_D_2.png"
import { useState, useEffect, useRef } from 'react'
import translations from '../assets/multi_language.json'

const Home5 = ({ currentLanguage }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [titleVisible, setTitleVisible] = useState(false)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [step1Visible, setStep1Visible] = useState(false)
  const [step2Visible, setStep2Visible] = useState(false)
  const [step3Visible, setStep3Visible] = useState(false)
  const [step4Visible, setStep4Visible] = useState(false)
  const [step5Visible, setStep5Visible] = useState(false)
  const [step6Visible, setStep6Visible] = useState(false)
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
          setTimeout(() => {
            setTitleVisible(true);
          }, 500);
          setTimeout(() => {
            setSubtitleVisible(true);
          }, 1000);
          setTimeout(() => {
            setStep1Visible(true);
          }, 1500);
          setTimeout(() => {
            setStep2Visible(true);
          }, 2000);
          setTimeout(() => {
            setStep3Visible(true);
          }, 2500);
          setTimeout(() => {
            setStep4Visible(true);
          }, 3000);
          setTimeout(() => {
            setStep5Visible(true);
          }, 3500);
          setTimeout(() => {
            setStep6Visible(true);
          }, 4000);
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
    <div ref={containerRef} className="w-full h-auto min-h-[795px] overflow-hidden bg-[#0a1650] py-10 mt-[-1px]">
      <div className="flex justify-between flex-col items-center pt-[60px] px-4">
        <div className={`transition-all duration-[2000ms] ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <p className="z-0 text-[#ffffff] text-[80px] font-semibold text-center">{getText(39)}</p>
        </div>
        <div className={`transition-all duration-[2000ms] ${subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <p className="text-[#94a4f2] font-light text-[38px] mt-[-25px] text-center">{getText(40)}</p>
        </div>
      </div>

      {/* Desktop version with wires and absolute positioning */}
      <div className="w-full relative mt-[-80px] block">
        <img src={wire_1} alt="wire_1" className={`absolute w-[12%] left-[13%] top-[150px] transition-opacity duration-[2000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '4500ms' }} />
        <img src={wire_2} alt="wire_2" className={`absolute top-[310px] left-[35%] w-[22%] transition-opacity duration-[2000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '5000ms' }} />
        <img src={wire_3} alt="wire_3" className={`absolute top-[300px] left-[58%] w-[25%] transition-opacity duration-[2000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '5500ms' }} />
        <img src={wire_4} alt="wire_4" className={`absolute top-[10px] right-[100px] w-[12%] transition-opacity duration-[2000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '6000ms' }} />

        {/* step_1 */}
        <div className={`5_step_1 absolute top-[100px] left-[8%] flex w-[530px] h-[158px] gap-[23px] transition-all duration-[2000ms] ${step1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="w-[158px] h-[158px] relative">
            <img src={step_bg} alt="step_bg" className="absolute max-w-none w-[264px] h-[264px] top-[-55px] left-[-55px]" />
            <img src={step_1} alt="step_1" className="w-[140px] h-[140px] max-w-none absolute top-[0px] left-[-0px]" />
          </div>
          <div className="flex flex-col grow gap-[5px] pt-[20px]">
            <div className="flex h-[39px] items-center gap-[10px]">
              <div className="w-[39px] h-[39px] bg-[#ff6b4c] rounded-full leading-[38px] text-center text-[#ffffff] text-[30px] font-bold">1</div>
              <span className="text-[#ffffff] text-[26px] font-semibold">{getText(41)}</span>
            </div>
            <div className="text-[#cdcdcd] text-[22px] font-light w-[252px]">{getText(42)}</div>
          </div>
        </div>

        {/* step_2 */}
        <div className={`5_step_2 absolute top-[420px] left-[25%] flex w-[530px] h-[158px] gap-[23px] transition-all duration-[2000ms] ${step2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="w-[158px] h-[158px] relative">
            <img src={step_bg} alt="step_bg" className="absolute max-w-none  w-[264px] h-[264px] top-[-55px] left-[-55px]" />
            <img src={step_2} alt="step_2" className="w-[140px] h-[201px] max-w-none absolute top-[-43px] left-[6px]" />
          </div>
          <div className="flex flex-col grow gap-[5px] pt-[20px]">
            <div className="flex h-[39px] items-center gap-[10px]">
              <div className="w-[39px] h-[39px] bg-[#ff6b4c] rounded-full leading-[38px] text-center text-[#ffffff] text-[30px] font-bold">2</div>
              <span className="text-[#ffffff] text-[26px] font-semibold">{getText(43)}</span>
            </div>
            <div className="text-[#cdcdcd] text-[22px] font-light w-[279px]">{getText(44)}</div>
          </div>
        </div>

        {/* step_3 */}
        <div className={`5_step_3 absolute top-[240px] left-[48%] flex w-[530px] h-[158px] gap-[23px] transition-all duration-[2000ms] ${step3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="w-[158px] h-[158px] relative">
            <img src={step_bg} alt="step_bg" className="absolute max-w-none w-[264px] h-[264px] top-[-55px] left-[-55px]" />
            <img src={step_3} alt="step_3" className="w-[140px] h-[151px] max-w-none absolute top-[0] left-[12px]" />
          </div>
          <div className="flex flex-col grow gap-[5px] pt-[20px]">
            <div className="flex h-[39px] items-center gap-[10px]">
              <div className="w-[39px] h-[39px] bg-[#ff6b4c] rounded-full leading-[38px] text-center text-[#ffffff] text-[30px] font-bold">3</div>
              <span className="text-[#ffffff] text-[26px] font-semibold">{getText(45)}</span>
            </div>
            <div className="text-[#cdcdcd] text-[22px] font-light w-[322px]">{getText(46)}</div>
          </div>
        </div>

        {/* step_4 */}
        <div className={`5_step_4 absolute top-[400px] left-[55%] flex w-[530px] h-[158px] gap-[23px] transition-all duration-[2000ms] ${step4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="flex flex-col grow gap-[5px] pt-[20px] items-end">
            <div className="flex h-[39px] items-center gap-[10px]">
              <span className="text-[#ffffff] text-[26px] font-semibold">{getText(47)}</span>
              <div className="w-[39px] h-[39px] bg-[#ff6b4c] rounded-full leading-[38px] text-center text-[#ffffff] text-[30px] font-bold">4</div>
            </div>
            <div className="text-[#cdcdcd] text-[22px] font-light w-[237px]">{getText(48)}</div>
          </div>
          <div className="w-[158px] h-[158px] relative">
            <img src={step_bg} alt="step_bg" className="absolute max-w-none w-[264px] h-[264px] top-[-55px] left-[-55px]" />
            <img src={step_4} alt="step_4" className="w-[175px] h-[151px] max-w-none absolute top-[0] left-[5px]" />
          </div>
        </div>

        {/* step_5 */}
        <div className={`5_step_5 absolute top-[80px] left-[55%] flex w-[530px] h-[158px] gap-[23px] transition-all duration-[2000ms] ${step5Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="flex flex-col grow gap-[5px] pt-[20px] items-end">
            <div className="flex h-[39px] items-center gap-[10px]">
              <span className="text-[#ffffff] text-[26px] font-semibold">{getText(49)}</span>
              <div className="w-[39px] h-[39px] bg-[#ff6b4c] rounded-full leading-[38px] text-center text-[#ffffff] text-[30px] font-bold">5</div>
            </div>
            <div className="text-[#cdcdcd] text-[22px] font-light w-[275px]">{getText(50)}</div>
          </div>
          <div className="w-[158px] h-[158px] relative">
            <img src={step_bg} alt="step_bg" className="absolute max-w-none w-[264px] h-[264px] top-[-55px] left-[-55px]" />
            <img src={step_5} alt="step_5" className="w-[200px] h-[220px] max-w-none absolute top-[-50px] left-[-15px]" />
          </div>
        </div>

        {/* step_6 */}
        <div className={`5_step_6 absolute top-[-55px] right-[-23%] flex w-[530px] h-[158px] gap-[23px] transition-all duration-[2000ms] ${step6Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="w-[158px] h-[158px] relative">
            <img src={step_6} alt="step_6" className="w-[140px] h-[151px] max-w-none absolute top-[0] left-[12px]" />
          </div>
        </div>
      </div>

      {/* Mobile version with simplified layout */}
      <div className="hidden px-4 mt-10">
        <div className="flex items-center mb-8">
          <div className="w-[39px] h-[39px] bg-[#ff6b4c] rounded-full flex items-center justify-center text-[#ffffff] text-[24px] font-bold mr-3">1</div>
          <div>
            <p className="text-[#ffffff] text-xl font-semibold">{getText(41)}</p>
            <p className="text-[#cdcdcd] text-base font-light">{getText(42)}</p>
          </div>
        </div>

        <div className="flex items-center mb-8">
          <div className="w-[39px] h-[39px] bg-[#ff6b4c] rounded-full flex items-center justify-center text-[#ffffff] text-[24px] font-bold mr-3">2</div>
          <div>
            <p className="text-[#ffffff] text-xl font-semibold">{getText(43)}</p>
            <p className="text-[#cdcdcd] text-base font-light">{getText(44)}</p>
          </div>
        </div>

        <div className="flex items-center mb-8">
          <div className="w-[39px] h-[39px] bg-[#ff6b4c] rounded-full flex items-center justify-center text-[#ffffff] text-[24px] font-bold mr-3">3</div>
          <div>
            <p className="text-[#ffffff] text-xl font-semibold">{getText(45)}</p>
            <p className="text-[#cdcdcd] text-base font-light">{getText(46)}</p>
          </div>
        </div>

        <div className="flex items-center mb-8">
          <div className="w-[39px] h-[39px] bg-[#ff6b4c] rounded-full flex items-center justify-center text-[#ffffff] text-[24px] font-bold mr-3">4</div>
          <div>
            <p className="text-[#ffffff] text-xl font-semibold">{getText(47)}</p>
            <p className="text-[#cdcdcd] text-base font-light">{getText(48)}</p>
          </div>
        </div>

        <div className="flex items-center mb-8">
          <div className="w-[39px] h-[39px] bg-[#ff6b4c] rounded-full flex items-center justify-center text-[#ffffff] text-[24px] font-bold mr-3">5</div>
          <div>
            <p className="text-[#ffffff] text-xl font-semibold">{getText(49)}</p>
            <p className="text-[#cdcdcd] text-base font-light">{getText(50)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home5