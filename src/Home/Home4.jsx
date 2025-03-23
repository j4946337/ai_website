import BRAIN from "../assets/images/Ai_C_1.png"
import SQUARE from "../assets/images/Ai_C_2.png"
import LEFT from "../assets/images/Ai_C_3.png"
import RIGHT_UP from "../assets/images/Ai_C_4.png"
import RIGHT_DOWN from "../assets/images/Ai_C_5.png"
import PEOPLE from "../assets/images/Ai_C_6.png"
import { useEffect, useState, useRef } from 'react';
import { useLanguage } from "../context/LanguageContext";
import translations from "../assets/multi_language.json";

const Home4 = () => {
  const { language } = useLanguage();
  // Part 1
  const [isBrainVisible, setIsBrainVisible] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isBox1Visible, setIsBox1Visible] = useState(false);
  const [isBox2Visible, setIsBox2Visible] = useState(false);
  const [isBox3Visible, setIsBox3Visible] = useState(false);

  // Part 2
  const [isPeopleVisible, setIsPeopleVisible] = useState(false);
  const [isSection1Visible, setIsSection1Visible] = useState(false);
  const [isSection2Visible, setIsSection2Visible] = useState(false);
  const [isSection3Visible, setIsSection3Visible] = useState(false);

  // Part 1
  const brainRef = useRef(null);
  const titleRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  // Part 2
  const peopleRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const getTranslation = (id) => {
    const translation = translations.find(t => t.id === id);
    return translation ? translation[language] : '';
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Part 1
        if (entry.target === brainRef.current && entry.isIntersecting) {
          setIsBrainVisible(true);
        } else if (entry.target === titleRef.current && entry.isIntersecting) {
          setIsTitleVisible(true);
        } else if (entry.target === box1Ref.current && entry.isIntersecting) {
          setIsBox1Visible(true);
        } else if (entry.target === box2Ref.current && entry.isIntersecting) {
          setIsBox2Visible(true);
        } else if (entry.target === box3Ref.current && entry.isIntersecting) {
          setIsBox3Visible(true);
        }
        // Part 2
        else if (entry.target === peopleRef.current && entry.isIntersecting) {
          setIsPeopleVisible(true);
        } else if (entry.target === section1Ref.current && entry.isIntersecting) {
          setIsSection1Visible(true);
          setTimeout(() => {
            setIsSection2Visible(true);
            setTimeout(() => {
              setIsSection3Visible(true);
            }, 300);
          }, 300);
        }
      });
    }, { threshold: 0.3 });

    if (brainRef.current) observer.observe(brainRef.current);
    if (titleRef.current) observer.observe(titleRef.current);
    if (box1Ref.current) observer.observe(box1Ref.current);
    if (box2Ref.current) observer.observe(box2Ref.current);
    if (box3Ref.current) observer.observe(box3Ref.current);

    if (peopleRef.current) observer.observe(peopleRef.current);
    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);

    return () => {
      if (brainRef.current) observer.unobserve(brainRef.current);
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (box1Ref.current) observer.unobserve(box1Ref.current);
      if (box2Ref.current) observer.unobserve(box2Ref.current);
      if (box3Ref.current) observer.unobserve(box3Ref.current);

      if (peopleRef.current) observer.unobserve(peopleRef.current);
      if (section1Ref.current) observer.unobserve(section1Ref.current);
      if (section2Ref.current) observer.unobserve(section2Ref.current);
      if (section3Ref.current) observer.unobserve(section3Ref.current);
    };
  }, []);

  return (
    <div className="w-full h-auto min-h-[1290px] bg-[#0a1650] relative overflow-hidden py-[48px] mt-[-1px]">
      {/* part1 start  */}
      <div
        ref={brainRef}
        className={`transition-opacity duration-[4000ms] ${isBrainVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <img src={BRAIN} className="absolute mx-auto top-[120px] left-[50%] translate-x-[-55%] w-[100vw] max-w-none" alt="" />
      </div>
      <div
        ref={titleRef}
        className={`flex flex-col items-center ${isTitleVisible ? '' : ''}`}
      >
        <p
          className={`text-[#ffffff] text-[34px] leading-[30px] w-[186px] font-semibold text-center transition-all duration-[1200ms] ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}
        >
          {getTranslation(21)}
        </p>
        <p
          className={`text-[#94a4f2] text-[17px] font-light text-center transition-opacity duration-[4000ms] ${isTitleVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {getTranslation(22)} | {getTranslation(23)}
        </p>
      </div>

      <div
        ref={box1Ref}
        className={`block transition-opacity duration-[4000ms] ${isBox1Visible ? 'opacity-100' : 'opacity-0'}`}
      >
        <img src={SQUARE} className="rotate-180 absolute top-[325px] left-[47px] w-[174px] h-[95px]" alt="" />
        <div className="flex flex-col absolute top-[333px] left-[60px]">
          <p className="text-[#ff6b4c] text-[15px] font-normal w-[112px]">{getTranslation(26)}</p>
          <p className="text-[#cdcdcd] text-[12px] font-light w-[140px]">{getTranslation(27)}</p>
        </div>
      </div>
      <div
        ref={box2Ref}
        className={`block transition-opacity duration-[4000ms] ${isBox2Visible ? 'opacity-100' : 'opacity-0'}`}
      >
        <img src={SQUARE} className="absolute top-[415px] right-[46px] w-[174px] h-[104px] z-10" alt="" />
        <div className="flex flex-col absolute top-[420px] right-[60px]">
          <p className="text-[#ff6b4c] text-[15px] font-normal w-[112px] self-end">{getTranslation(24)}</p>
          <p className="text-[#cdcdcd] text-[12px] font-light w-[130px] text-right">{getTranslation(25)}</p>
        </div>
      </div>
      <div
        ref={box3Ref}
        className={`block transition-opacity duration-[4000ms] ${isBox3Visible ? 'opacity-100' : 'opacity-0'}`}
      >
        <img src={SQUARE} className="rotate-180 absolute top-[519px] left-[47px] w-[174px] h-[100px]" alt="" />
        <div className="flex flex-col absolute top-[525px] left-[60px]">
          <p className="text-[#ff6b4c] text-[15px] font-normal w-[112px]">{getTranslation(28)}</p>
          <p className="text-[#cdcdcd] text-[12px] font-light w-[152px]">{getTranslation(29)}</p>
        </div>
      </div>
      {/* part2 start - mobile friendly version */}
      <div className="flex flex-col mt-0 absolute top-[570px] left-0 px-0">
        <div
          ref={peopleRef}
          className={`transition-opacity duration-[4000ms] ${isPeopleVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={PEOPLE} alt="" className="h-[100%] w-[100%] z-0 mt-[15px]" />
        </div>

        <div className="flex flex-col gap-[20px]">
          <div
            ref={section1Ref}
            className={`flex flex-col ml-[35px] transition-all duration-[1000ms] ${isSection1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[20px]'}`}
          >
            <p className={`font-semibold text-[#ffffff] text-[20px] ${language === 'english' ? 'leading-[20px]' : 'leading-[24px]'}`}>{getTranslation(30)}</p>
            <p className={`text-[#ff6b4c] text-[15px] ${language === 'english' ? 'leading-[15px]' : 'leading-[19px]'}`}>{getTranslation(31)}</p>
            <p className={`text-[#cdcdcd] text-[12px] font-light w-[241px] ${language === 'english' ? 'leading-[12px]' : 'leading-[14px]'}`}>{getTranslation(32)}</p>
          </div>
          <div
            ref={section2Ref}
            className={`flex flex-col ml-[35px] transition-all duration-[1000ms] ${isSection2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[20px]'}`}
          >
            <p className={`font-semibold text-[#ffffff] text-[20px] ${language === 'english' ? 'leading-[20px]' : 'leading-[24px]'}`}>{getTranslation(33)}</p>
            <p className={`text-[#ff6b4c] text-[15px] ${language === 'english' ? 'leading-[15px]' : 'leading-[19px]'}`}>{getTranslation(34)}</p>
            <p className={`text-[#cdcdcd] text-[12px] font-light w-[245px] ${language === 'english' ? 'leading-[12px]' : 'leading-[14px]'}`}>{getTranslation(35)}</p>
          </div>
          <div
            ref={section3Ref}
            className={`flex flex-col ml-[35px] transition-all duration-[1000ms] ${isSection3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[20px]'}`}
          >
            <p className={`font-semibold text-[#ffffff] text-[20px] ${language === 'english' ? 'leading-[20px]' : 'leading-[24px]'}`}>{getTranslation(36)}</p>
            <p className={`text-[#ff6b4c] text-[15px] ${language === 'english' ? 'leading-[15px]' : 'leading-[19px]'}`}>{getTranslation(37)}</p>
            <p className={`text-[#cdcdcd] text-[12px] font-light w-[244px] ${language === 'english' ? 'leading-[12px]' : 'leading-[14px]'}`}>{getTranslation(38)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home4