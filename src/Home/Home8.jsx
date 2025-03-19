import point from '../assets/images/Ai_E_8.png'
import rp_1 from '../assets/images/Ai_E_4.png'
import rp_2 from '../assets/images/Ai_E_5.png'
import rp_3 from '../assets/images/Ai_E_6.png'
import rp_4 from '../assets/images/Ai_E_7.png'
import { useEffect, useState, useRef } from 'react';

const Home8 = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isPhase1Visible, setIsPhase1Visible] = useState(false);
  const [isPhase2Visible, setIsPhase2Visible] = useState(false);
  const [isPhase3Visible, setIsPhase3Visible] = useState(false);
  const [isPhase4Visible, setIsPhase4Visible] = useState(false);

  const titleRef = useRef(null);
  const phase1Ref = useRef(null);
  const phase2Ref = useRef(null);
  const phase3Ref = useRef(null);
  const phase4Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target === titleRef.current && entry.isIntersecting) {
          setIsTitleVisible(true);
        } else if (entry.target === phase1Ref.current && entry.isIntersecting) {
          setIsPhase1Visible(true);
          setTimeout(() => {
            setIsPhase2Visible(true);
            setTimeout(() => {
              setIsPhase3Visible(true);
              setTimeout(() => {
                setIsPhase4Visible(true);
              }, 300);
            }, 300);
          }, 300);
        }
      });
    }, { threshold: 0.3 });

    if (titleRef.current) observer.observe(titleRef.current);
    if (phase1Ref.current) observer.observe(phase1Ref.current);
    if (phase2Ref.current) observer.observe(phase2Ref.current);
    if (phase3Ref.current) observer.observe(phase3Ref.current);
    if (phase4Ref.current) observer.observe(phase4Ref.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (phase1Ref.current) observer.unobserve(phase1Ref.current);
      if (phase2Ref.current) observer.unobserve(phase2Ref.current);
      if (phase3Ref.current) observer.unobserve(phase3Ref.current);
      if (phase4Ref.current) observer.unobserve(phase4Ref.current);
    };
  }, []);

  return (
    <div className="home_8 h-[700px] bg-[#0b0f20] w-full pt-[37px] mt-[-1px]">
      <div
        ref={titleRef}
        className={`flex flex-col items-center ${isTitleVisible ? '' : ''}`}
      >
        <div
          className={`text-[#ffffff] text-[34px] leading-[34px] font-semibold text-left transition-all duration-[1200ms] ${isTitleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50px]'}`}
        >
          ROADMAP
        </div>
        <div
          className={`text-[#94a4f2] text-[15px] leading-[15px] font-light text-left transition-opacity duration-[4000ms] ${isTitleVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          From Your First Chat to Global Impact
        </div>
      </div>
      <div className='mt-[38px] flex flex-col ml-[54px] gap-[30px] '>
        <div
          ref={phase1Ref}
          className={`flex gap-[13px] relative ${isPhase1Visible ? '' : ''}`}
        >
          <div className='relative w-[54px] h-[103px]'>
            <div
              className={`flex flex-col absolute items-center top-[14px] left-[11px] z-10 transition-all duration-[1200ms] ${isPhase1Visible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-50 translate-y-[100%]"
                }`}
            >
              <span className='text-[#fff] text-[12px] leading-[12px] font-semibold'>Phase</span>
              <span className='text-[#fff] text-[25px] leading-[25px] font-semibold'>1</span>
            </div>
            <div className='w-[54px] h-[103px] relative overflow-hidden'>
              <img
                src={rp_1}
                alt=""
                className={`w-[54px] h-[103px] absolute transition-all duration-[1200ms] ${isPhase1Visible
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-0 translate-y-[100%]'
                  }`}
                style={{ transformOrigin: 'bottom center' }}
              />
            </div>
          </div>
          <img
            src={point}
            alt=""
            className={`absolute bottom-[-10px] w-[15px] left-[20px] translate-x-[-4%] h-[15px] transition-all duration-[800ms] ${isPhase1Visible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-0"
              }`}
          />
          <div className={`flex flex-col transition-opacity duration-[1000ms] ${isPhase1Visible ? "opacity-100" : "opacity-0"}`}>
            <p className='text-[#fff] text-[12px] leading-[12px] font-semibold'>Q2 2025</p>
            <p className='text-[#fff] text-[12px] leading-[12px] font-semibold'>H5 Beta</p>
            <p className='text-[#cdcdcd] text-[11px] leading-[11px] font-light mt-[8px] w-[154px]'>Your H5 prototype launches—customize your AI, earn ME tokens, and shape our companion with your community's input.</p>
          </div>
        </div>
        <div
          ref={phase2Ref}
          className={`flex gap-[13px] relative ${isPhase2Visible ? '' : ''}`}
        >
          <div className='relative w-[54px] h-[103px]'>
            <div
              className={`flex flex-col absolute items-center top-[14px] left-[11px] z-10 transition-all duration-[1200ms] ${isPhase2Visible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-50 translate-y-[100%]"
                }`}
            >
              <span className='text-[#fff] text-[12px] leading-[12px] font-semibold'>Phase</span>
              <span className='text-[#fff] text-[25px] leading-[25px] font-semibold'>2</span>
            </div>
            <div className='w-[54px] h-[103px] relative overflow-hidden'>
              <img
                src={rp_2}
                alt=""
                className={`w-[54px] h-[103px] absolute transition-all duration-[1200ms] ${isPhase2Visible
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-0 translate-y-[100%]'
                  }`}
                style={{ transformOrigin: 'bottom center' }}
              />
            </div>
          </div>
          <img
            src={point}
            alt=""
            className={`absolute bottom-[-10px] w-[15px] left-[20px] translate-x-[-4%] h-[15px] transition-all duration-[800ms] ${isPhase2Visible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-0"
              }`}
          />
          <div className={`flex flex-col transition-opacity duration-[1000ms] ${isPhase2Visible ? "opacity-100" : "opacity-0"}`}>
            <p className='text-[#fff] text-[12px] leading-[12px] font-semibold'>Q3 2025</p>
            <p className='text-[#fff] text-[12px] leading-[12px] font-semibold'>On-Chain & App</p>
            <p className='text-[#cdcdcd] text-[11px] leading-[11px] font-light mt-[8px] w-[156px]'>Your chats power an on-chain LLM, NFTs launch, and an app connects you—your community builds a bias-free ally.</p>
          </div>
        </div>
        <div
          ref={phase3Ref}
          className={`flex gap-[13px] relative ${isPhase3Visible ? '' : ''}`}
        >
          <div className='relative w-[54px] h-[103px]'>
            <div
              className={`flex flex-col absolute items-center top-[14px] left-[11px] z-10 transition-all duration-[1200ms] ${isPhase3Visible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-50 translate-y-[100%]"
                }`}
            >
              <span className='text-[#fff] text-[12px] leading-[12px] font-semibold'>Phase</span>
              <span className='text-[#fff] text-[25px] leading-[25px] font-semibold'>3</span>
            </div>
            <div className='w-[54px] h-[103px] relative overflow-hidden'>
              <img
                src={rp_3}
                alt=""
                className={`w-[54px] h-[103px] absolute transition-all duration-[1200ms] ${isPhase3Visible
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-0 translate-y-[100%]'
                  }`}
                style={{ transformOrigin: 'bottom center' }}
              />
            </div>
          </div>
          <img
            src={point}
            alt=""
            className={`absolute bottom-[-10px] w-[15px] left-[20px] translate-x-[-4%] h-[15px] transition-all duration-[800ms] ${isPhase3Visible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-0"
              }`}
          />
          <div className={`flex flex-col transition-opacity duration-[1000ms] ${isPhase3Visible ? "opacity-100" : "opacity-0"}`}>
            <p className='text-[#fff] text-[12px] leading-[12px] font-semibold'>Q2 2026</p>
            <p className='text-[#fff] text-[12px] leading-[12px] font-semibold'>Metaverse & Celeb Voices</p>
            <p className='text-[#cdcdcd] text-[11px] leading-[11px] font-light mt-[8px] w-[156px]'>Your Virtual City opens—AR, metaverse, and celebrity voices join, crafted with your community, boosting your bond.</p>
          </div>
        </div>
        <div
          ref={phase4Ref}
          className={`flex gap-[13px] relative ${isPhase4Visible ? '' : ''}`}
        >
          <div className='relative w-[54px] h-[103px]'>
            <div
              className={`flex flex-col absolute items-center top-[14px] left-[11px] z-10 transition-all duration-[1200ms] ${isPhase4Visible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-50 translate-y-[100%]"
                }`}
            >
              <span className='text-[#fff] text-[12px] leading-[12px] font-semibold'>Phase</span>
              <span className='text-[#fff] text-[25px] leading-[25px] font-semibold'>4</span>
            </div>
            <div className='w-[54px] h-[103px] relative overflow-hidden'>
              <img
                src={rp_4}
                alt=""
                className={`w-[54px] h-[103px] absolute transition-all duration-[1200ms] ${isPhase4Visible
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-0 translate-y-[100%]'
                  }`}
                style={{ transformOrigin: 'bottom center' }}
              />
            </div>
          </div>
          <img
            src={point}
            alt=""
            className={`absolute bottom-[-10px] w-[15px] left-[20px] translate-x-[-4%] h-[15px] transition-all duration-[800ms] ${isPhase4Visible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-0"
              }`}
          />
          <div className={`flex flex-col transition-opacity duration-[1000ms] ${isPhase4Visible ? "opacity-100" : "opacity-0"}`}>
            <p className='text-[#fff] text-[12px] leading-[12px] font-semibold'>Q4 2027</p>
            <p className='text-[#fff] text-[12px] leading-[12px] font-semibold'>Modes & 1M Users</p>
            <p className='text-[#cdcdcd] text-[11px] leading-[11px] font-light mt-[8px] w-[157px]'>Your AI adds Calm, Inspire, Connect modes—your DAO scales us to 1M users on TikTok, Twitch, healing your world.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home8