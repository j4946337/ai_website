import HOME_1 from '../assets/images/Ai_A_2.png'
import HOME_1_2 from '../assets/images/bg.png'
import { useState, useEffect, useRef } from 'react'
import translations from '../assets/multi_language.json'

const Home1 = ({ currentLanguage }) => {
  const [isPage1Visible, setIsPage1Visible] = useState(false)
  const [isPage2Visible, setIsPage2Visible] = useState(false)
  const [welcomeText, setWelcomeText] = useState('')
  const [titleVisibility, setTitleVisibility] = useState(false)
  const [imageVisible, setImageVisible] = useState(false)
  const [title2Visible, setTitle2Visible] = useState(false)
  const page1Ref = useRef(null)
  const page2Ref = useRef(null)

  const getText = (id) => {
    const translation = translations.find(t => t.id === id);
    return translation ? translation[currentLanguage === 'english' ? 'english' : 't_chinese'] : '';
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target === page1Ref.current && entry.isIntersecting) {
          setIsPage1Visible(true);
          setTitleVisibility(true);
          setTimeout(() => {
            setImageVisible(true);
          }, 1000);
        } else if (entry.target === page2Ref.current && entry.isIntersecting) {
          setIsPage2Visible(true);
          setTimeout(() => {
            setTitle2Visible(true);
          }, 500);
        }
      });
    }, { threshold: 0.3 });

    if (page1Ref.current) observer.observe(page1Ref.current);
    if (page2Ref.current) observer.observe(page2Ref.current);

    return () => {
      if (page1Ref.current) observer.unobserve(page1Ref.current);
      if (page2Ref.current) observer.unobserve(page2Ref.current);
    };
  }, []);

  useEffect(() => {
    if (titleVisibility) {
      const text = getText(2); // "Welcome to"
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setWelcomeText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [titleVisibility, currentLanguage]);

  return (
    <div className='home_1 w-full bg-[#0a1650] h-[1400px] relative mt-[-1px]'>
      <img src={HOME_1_2} alt="home_1_2" className='absolute top-0 left-0 w-full z-10' />
      {/* PAGE 1  */}
      <div
        ref={page1Ref}
        className={`absolute top-[332px] left-[130px] z-50 transition-opacity duration-[2000ms] ${isPage1Visible
          ? 'opacity-100'
          : 'opacity-0'
          }`}
      >
        <p className='text-[#ffffff] text-6xl font-semibold mb-[10px] min-h-[72px]'>{welcomeText}</p>
        <div className={`transition-all duration-[2000ms] ${imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <img src={HOME_1} alt="home_1" className='z-10' />
        </div>
        <div className='text-[#ffffff] text-[20px] font-extralight mt-11 w-[30%]'>
          <p className=''>{getText(3)}</p>
        </div>
        <button className='bg-[#ff6b4c] rounded-full w-[251px] h-[78px] text-[#ffffff] text-[26px] font-normal mt-[30px]'>{getText(4)}</button>
      </div>
      {/* PAGE 2  */}
      <div
        ref={page2Ref}
        className={`absolute top-[1020px] right-[100px] transition-opacity duration-[2000ms] ${isPage2Visible
          ? 'opacity-100'
          : 'opacity-0'
          }`}
      >
        <div className={`transition-all duration-[2000ms] ${title2Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          <div className='text-[#ffffff] text-[80px] font-semibold'>
            <span>{getText(5)} </span>
            <span className='text-[#3787ff]'></span>
          </div>
        </div>
        <div className='text-[#95a5f2] font-light text-[48px] float-right mt-[-27px]'>{getText(6)}</div>
        <div className={`text-[#ffffff] text-[24px] font-extralight mt-11 absolute right-0 pt-[57px] ${currentLanguage === 'english' ? 'w-[85%]' : 'w-[150%]'}`}>
          <p className='right-0'>{getText(7)}</p>
        </div>
      </div>
    </div>
  )
}

export default Home1