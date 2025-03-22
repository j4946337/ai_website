import chart from '../assets/images/Ai_E_1.png'
import me_imf from '../assets/images/Ai_E_2.png'
import { useEffect, useState, useRef } from 'react';
import { useLanguage } from "../context/LanguageContext";
import translations from "../assets/multi_language.json";

const Home7 = () => {
  const { language } = useLanguage();
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isAmountVisible, setIsAmountVisible] = useState(false);
  const [isChartVisible, setIsChartVisible] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isTokenomicsVisible, setIsTokenomicsVisible] = useState(false);

  const titleRef = useRef(null);
  const amountRef = useRef(null);
  const chartRef = useRef(null);
  const descriptionRef = useRef(null);
  const tokenomicsRef = useRef(null);

  const getTranslation = (id) => {
    const translation = translations.find(t => t.id === id);
    return translation ? translation[language] : '';
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target === titleRef.current && entry.isIntersecting) {
          setIsTitleVisible(true);
        } else if (entry.target === amountRef.current && entry.isIntersecting) {
          setIsAmountVisible(true);
        } else if (entry.target === chartRef.current && entry.isIntersecting) {
          setIsChartVisible(true);
        } else if (entry.target === descriptionRef.current && entry.isIntersecting) {
          setIsDescriptionVisible(true);
        } else if (entry.target === tokenomicsRef.current && entry.isIntersecting) {
          setIsTokenomicsVisible(true);
        }
      });
    }, { threshold: 0.3 });

    if (titleRef.current) observer.observe(titleRef.current);
    if (amountRef.current) observer.observe(amountRef.current);
    if (chartRef.current) observer.observe(chartRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (tokenomicsRef.current) observer.observe(tokenomicsRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (amountRef.current) observer.unobserve(amountRef.current);
      if (chartRef.current) observer.unobserve(chartRef.current);
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
      if (tokenomicsRef.current) observer.unobserve(tokenomicsRef.current);
    };
  }, []);

  return (
    <div className="w-full h-[560px] bg-[#0a1650] relative overflow-hidden  mt-[-1px]">
      {/* <img src={me_imf} alt="me_imf" className='absolute h-auto max-h-[670px] z-30 top-[59px] right-0 translate-x-[25%] block' /> */}
      <div className="pt-[38px] ">
        <div
          ref={titleRef}
          className={`flex flex-col items-center ${isTitleVisible ? '' : ''}`}
        >
          <span
            className={`text-[#ffffff] text-[34px] leading-[34px] font-semibold transition-all duration-[1200ms] ${isTitleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50px]'}`}
          >
            {getTranslation(61)}
          </span>
          <span
            className={`text-[#94a4f2] text-[17px] leading-[17px] font-light transition-opacity duration-[4000ms] ${isTitleVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            {getTranslation(62)}
          </span>
        </div>
        <div
          ref={amountRef}
          className={`mt-[21px] text-center transition-all duration-[1200ms] ${isAmountVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}
        >
          <span className="text-[#ffffff] text-[28px] leading-[28px] font-semibold">1,000,000,000</span>
          <span className="text-[#ff6b4c] text-[11px] leading-[11px] pl-[2%]">ME</span>
        </div>
      </div>
      <div
        ref={chartRef}
        className={`transition-all duration-[1500ms] ${isChartVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[50px]'}`}
      >
        <img src={chart} alt="chart" className='w-[210px] mx-auto mt-[22px]' />
      </div>
      <p
        ref={descriptionRef}
        className={`text-[#ffffff] text-[11px] leading-[11px] font-light text-center mt-[22px] transition-opacity duration-[4000ms] ${isDescriptionVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {getTranslation(73)}
      </p>
      <div
        ref={tokenomicsRef}
        className={`mt-[19px] ml-[15%] ${isTokenomicsVisible ? '' : ''}`}
      >
        <div
          className={`flex w-[183px] gap-[7px] transition-all duration-[800ms] ${isTokenomicsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}
          style={{ transitionDelay: '0ms' }}
        >
          <div className='w-[14px] h-[14px] bg-[#ab1fae] rounded-[4px]'></div>
          <div className='flex flex-col'>
            <span className='text-[#ffffff] text-[13px] leading-[13px] font-semibold'>{getTranslation(69)}</span>
            <span className='text-[#ffffff] text-[11px] leading-[11px] font-light'>{getTranslation(70)}</span>
          </div>
        </div>
        <div
          className={`flex w-[183px] gap-[7px] mt-[14px] transition-all duration-[800ms] ${isTokenomicsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className='w-[14px] h-[14px] bg-[#e77b2f] rounded-[4px]'></div>
          <div className='flex flex-col'>
            <span className='text-[#ffffff] text-[13px] leading-[13px] font-semibold'>{getTranslation(71)}</span>
            <span className='text-[#ffffff] text-[11px] leading-[11px] font-light'>{getTranslation(72)}</span>
          </div>
        </div>
        <div
          className={`flex w-[183px] gap-[7px] mt-[14px] transition-all duration-[800ms] ${isTokenomicsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className='w-[14px] h-[14px] bg-[#a1a1a2] rounded-[4px]'></div>
          <div className='flex flex-col'>
            <span className='text-[#ffffff] text-[13px] leading-[13px] font-semibold'>{getTranslation(63)}</span>
            <span className='text-[#ffffff] text-[11px] leading-[11px] font-light'>{getTranslation(64)}</span>
          </div>
        </div>
        <div
          className={`flex w-[183px] gap-[7px] mt-[14px] transition-all duration-[800ms] ${isTokenomicsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className='w-[14px] h-[14px] bg-[#f9bb00] rounded-[4px]'></div>
          <div className='flex flex-col'>
            <span className='text-[#ffffff] text-[13px] leading-[13px] font-semibold'>{getTranslation(65)}</span>
            <span className='text-[#ffffff] text-[11px] leading-[11px] font-light'>{getTranslation(66)}</span>
          </div>
        </div>
        <div
          className={`flex w-[183px] gap-[7px] mt-[14px] transition-all duration-[800ms] ${isTokenomicsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className='w-[14px] h-[14px] bg-[#6daa45] rounded-[4px]'></div>
          <div className='flex flex-col'>
            <span className='text-[#ffffff] text-[13px] leading-[13px] font-semibold'>{getTranslation(67)}</span>
            <span className='text-[#ffffff] text-[11px] leading-[11px] font-light'>{getTranslation(68)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home7