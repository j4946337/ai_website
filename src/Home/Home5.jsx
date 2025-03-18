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
import { useEffect, useState, useRef } from 'react';

const Home5 = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isStep1Visible, setIsStep1Visible] = useState(false);
  const [isStep2Visible, setIsStep2Visible] = useState(false);
  const [isStep3Visible, setIsStep3Visible] = useState(false);
  const [isStep4Visible, setIsStep4Visible] = useState(false);
  const [isStep5Visible, setIsStep5Visible] = useState(false);

  const titleRef = useRef(null);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);
  const step5Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target === titleRef.current && entry.isIntersecting) {
          setIsTitleVisible(true);

          // 标题出现后，延迟显示每个步骤
          setTimeout(() => {
            setIsStep1Visible(true);

            setTimeout(() => {
              setIsStep2Visible(true);

              setTimeout(() => {
                setIsStep3Visible(true);

                setTimeout(() => {
                  setIsStep4Visible(true);

                  setTimeout(() => {
                    setIsStep5Visible(true);
                  }, 300);
                }, 300);
              }, 300);
            }, 300);
          }, 500);
        }
      });
    }, { threshold: 0.3 });

    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <div className="w-full h-auto min-h-[700px] overflow-hidden bg-[#0a1650] mt-[-1px]">
      <div
        ref={titleRef}
        className={`flex justify-between flex-col items-center ${isTitleVisible ? '' : ''}`}
      >
        <p
          className={`z-0 text-[#ffffff] text-[34px] leading-[34px] font-semibold text-center transition-all duration-[1200ms] ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}
        >
          YOUR JOURNEY, STEP-BY-STEP
        </p>
        <p
          className={`text-[#94a4f2] font-light text-[17px] leading-[17px] text-center transition-opacity duration-[4000ms] ${isTitleVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          How You Earn Your ME Tokens?
        </p>
      </div>

      {/* Desktop version with wires and absolute positioning */}
      <div className="w-full relative ml-[21px] mt-[44px] block">

        {/* step_1 */}
        <div
          ref={step1Ref}
          className={`5_step_1 absolute flex items-center w-[225px] h-[79px] gap-[2px] ${isStep1Visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-[1000ms]`}
        >
          <div className="w-[132px] h-[132px] relative">
            <img src={step_bg} alt="step_bg" className=" max-w-none w-[120px] h-[120px] " />
            <img src={step_1} alt="step_1" className="w-[65px] h-[65px] max-w-none absolute top-[27px] left-[27px] " />
          </div>
          <div className={`flex flex-col grow ml-[-10px] gap-[4px] transition-all duration-[800ms] ${isStep1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}>
            <div className="flex h-[20px] items-center gap-[5px]">
              <div className="w-[20px] h-[20px] bg-[#ff6b4c] rounded-full leading-[18px] text-center text-[#ffffff] text-[13px] font-bold">1</div>
              <span className="text-[#ffffff] w-[112px] text-[13px] leading-[13px] font-semibold text-nowrap">Unlock Your World</span>
            </div>
            <div className="text-[#cdcdcd] text-[11px] leading-[11px] font-light w-[126px]">Sign in with your Web3 wallet—your key to ME AI.</div>
          </div>
        </div>

        {/* step_2 */}
        <div
          ref={step2Ref}
          className={`5_step_2 absolute top-[110px] flex items-center w-[225px] h-[79px] gap-[2px] ${isStep2Visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-[1000ms]`}
        >
          <div className="w-[132px] h-[132px] relative">
            <img src={step_bg} alt="step_bg" className=" max-w-none w-[120px] h-[120px] " />
            <img src={step_2} alt="step_1" className="w-[65px] h-[95px] max-w-none absolute top-[2px] left-[27px] " />
          </div>
          <div className={`flex flex-col grow ml-[-10px] gap-[4px] transition-all duration-[800ms] ${isStep2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}>
            <div className="flex h-[20px] items-center gap-[5px]">
              <div className="w-[20px] h-[20px] bg-[#ff6b4c] rounded-full leading-[18px] text-center text-[#ffffff] text-[13px] font-bold">2</div>
              <span className="text-[#ffffff] w-[112px] text-[13px] leading-[13px] font-semibold text-nowrap">Discover Your Ally</span>
            </div>
            <div className="text-[#cdcdcd] text-[11px]  leading-[11px] font-light w-[140px]">A quiz matches you to 10 archetypes—like "Empathetic Listener."</div>
          </div>
        </div>

        {/* step_3 */}
        <div
          ref={step3Ref}
          className={`5_step_3 absolute top-[210px] flex items-center w-[225px] h-[79px] gap-[2px] ${isStep3Visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-[1000ms]`}
        >
          <div className="w-[132px] h-[132px] relative">
            <img src={step_bg} alt="step_bg" className=" max-w-none w-[120px] h-[120px] " />
            <img src={step_3} alt="step_3" className="w-[65px] h-[65px] max-w-none absolute top-[27px] left-[27px] " />
          </div>
          <div className={`flex flex-col grow ml-[-10px] gap-[4px] transition-all duration-[800ms] ${isStep3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}>
            <div className="flex h-[20px] items-center gap-[5px]">
              <div className="w-[20px] h-[20px] bg-[#ff6b4c] rounded-full leading-[18px] text-center text-[#ffffff] text-[13px] font-bold">3</div>
              <span className="text-[#ffffff] w-[112px] text-[13px] leading-[13px] font-semibold text-nowrap">Chat & Shine</span>
            </div>
            <div className="text-[#cdcdcd] text-[11px] leading-[11px] font-light w-[161px]">Your heartfelt chats earn EQ—1000–1900 points each, building our ultimate AI together.</div>
          </div>
        </div>

        <div
          ref={step4Ref}
          className={`5_step_4 absolute top-[310px] flex items-center w-[225px] h-[79px] gap-[2px] ${isStep4Visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-[1000ms]`}
        >
          <div className="w-[132px] h-[132px] relative">
            <img src={step_bg} alt="step_bg" className=" max-w-none w-[120px] h-[120px] " />
            <img src={step_4} alt="step_4" className="w-[75px] h-[65px] max-w-none absolute top-[27px] left-[27px] " />
          </div>
          <div className={`flex flex-col grow ml-[-10px] gap-[4px] transition-all duration-[800ms] ${isStep4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}>
            <div className="flex h-[20px] items-center gap-[5px]">
              <div className="w-[20px] h-[20px] bg-[#ff6b4c] rounded-full leading-[18px] text-center text-[#ffffff] text-[13px] font-bold">4</div>
              <span className="text-[#ffffff] w-[112px] text-[13px] leading-[13px] font-semibold text-nowrap"> Seal It On-Chain</span>
            </div>
            <div className="text-[#cdcdcd] text-[11px] leading-[11px] font-light w-[119px]">Your EQ locks onto the blockchain—pure, yours, community-verified.</div>
          </div>
        </div>

        <div
          ref={step5Ref}
          className={`5_step_5 absolute top-[410px] flex items-center w-[225px] h-[79px] gap-[2px] ${isStep5Visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-[1000ms]`}
        >
          <div className="w-[132px] h-[132px] relative">
            <img src={step_bg} alt="step_bg" className=" max-w-none w-[120px] h-[120px] " />
            <img src={step_5} alt="step_4" className="w-[85px] h-[95px] max-w-none absolute top-[6px] left-[20px] " />
          </div>
          <div className={`flex flex-col grow ml-[-10px] gap-[4px] transition-all duration-[800ms] ${isStep5Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}>
            <div className="flex h-[20px] items-center gap-[5px]">
              <div className="w-[20px] h-[20px] bg-[#ff6b4c] rounded-full leading-[18px] text-center text-[#ffffff] text-[13px] font-bold">5</div>
              <span className="text-[#ffffff] w-[112px] text-[13px] leading-[13px] font-semibold text-nowrap">Claim Your ME Tokens</span>
            </div>
            <div className="text-[#cdcdcd] text-[11px] leading-[11px] font-light w-[138px]">1000 EQ = 1 ME (early), up to 1900 later—your soul's work pays off.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home5