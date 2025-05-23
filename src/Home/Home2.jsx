import home_2 from '../assets/images/home_3_1.png'
import Ai_B_2 from '../assets/images/Ai_B_2.png'
import Ai_B_3 from '../assets/images/Ai_B_3.png'
import Ai_B_4 from '../assets/images/Ai_B_4.png'
import { useEffect, useState, useRef } from 'react';
import { useLanguage } from "../context/LanguageContext";
import translations from "../assets/multi_language.json";

const Home2 = () => {
  const { language } = useLanguage();
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isIconsVisible, setIsIconsVisible] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [titleLine1Visible, setTitleLine1Visible] = useState(false);
  const [titleLine2Visible, setTitleLine2Visible] = useState(false);
  const [iconsVisibility, setIconsVisibility] = useState({
    icon1: false,
    icon2: false,
    icon3: false
  });

  const getTranslation = (id) => {
    const translation = translations.find(t => t.id === id);
    return translation ? translation[language] : '';
  };

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

  useEffect(() => {
    if (isTitleVisible) {
      setTimeout(() => {
        setTitleLine1Visible(true);

        setTimeout(() => {
          setTitleLine2Visible(true);
        }, 300);
      }, 100);
    }
  }, [isTitleVisible]);

  useEffect(() => {
    if (isIconsVisible) {
      setTimeout(() => {
        setIconsVisibility(prev => ({ ...prev, icon1: true }));

        setTimeout(() => {
          setIconsVisibility(prev => ({ ...prev, icon2: true }));

          setTimeout(() => {
            setIconsVisibility(prev => ({ ...prev, icon3: true }));
          }, 300);
        }, 300);
      }, 200);
    }
  }, [isIconsVisible]);

  return (
    <div className='home_2 w-full bg-[#0a1650] h-[415px]  relative mt-[-1px]'>
      <img src={home_2} alt="" className='absolute  top-0  left-[-60%] h-[415px] w-[200%] max-w-none' />
      <div className='absolute  mt-[33px] font-semibold text-[34px] leading-[30px]  ml-[33px]  w-[156px] '>
        <div
          ref={titleRef}
          className={`flex flex-col transition-opacity duration-[4000ms] ${isTitleVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="overflow-hidden h-[35px]">
            <span
              className={`text-[#ff6b4c] block transition-all duration-700 transform
                ${titleLine1Visible ? 'translate-y-0 opacity-100' : 'translate-y-[20px] opacity-0'}`}
            >
              {getTranslation(22)}
            </span>
          </div>
          <div className="overflow-hidden h-[45px]">
            <span
              className={`${language === 'english' ? '' : 'mt-[5px]'} text-[#ffffff] block transition-all duration-700 transform
                ${titleLine2Visible ? 'translate-y-0 opacity-100' : 'translate-y-[20px] opacity-0'}`}
            >
              {getTranslation(8)}
            </span>
          </div>
        </div>
        {/* mobile */}
        <div
          ref={iconsRef}
          className={`flex flex-col w-full justify-center items-start gap-[13px] mt-[31px] transition-opacity duration-[4000ms] ${isIconsVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className='overflow-hidden'>
            <div
              className={`flex items-center gap-[9px] transition-all duration-700 transform
                ${iconsVisibility.icon1 ? 'translate-y-0 opacity-100' : 'translate-y-[20px] opacity-0'}`}
            >
              <img src={Ai_B_2} alt="" className='w-[37px] h-[37px]' />
              <p className='text-[12px] text-[#cfd5f6]'>{getTranslation(9)}</p>
            </div>
          </div>

          <div className='overflow-hidden'>
            <div
              className={`flex items-center gap-[9px] transition-all duration-700 transform
                ${iconsVisibility.icon2 ? 'translate-y-0 opacity-100' : 'translate-y-[20px] opacity-0'}`}
            >
              <img src={Ai_B_3} alt="" className='w-[37px] h-[37px]' />
              <p className='text-[12px] text-[#cfd5f6] text-center'>{getTranslation(10)}</p>
            </div>
          </div>

          <div className='overflow-hidden'>
            <div
              className={`flex items-center gap-[9px] transition-all duration-700 transform
                ${iconsVisibility.icon3 ? 'translate-y-0 opacity-100' : 'translate-y-[20px] opacity-0'}`}
            >
              <img src={Ai_B_4} alt="" className='w-[37px] h-[37px]' />
              <p className='text-[12px] text-[#cfd5f6]'>{getTranslation(11)}</p>
            </div>
          </div>
        </div>
        <div
          ref={descriptionRef}
          className={`w-[253px] mt-[59px] transition-opacity duration-[4000ms] ${isDescriptionVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <p className={`text-[11px] ${language === 'english' ? 'leading-[11px]' : 'leading-[13px]'} text-[#cfd5f6] font-extralight`}>{getTranslation(12)}</p>
        </div>
      </div>
    </div>
  )
}

export default Home2