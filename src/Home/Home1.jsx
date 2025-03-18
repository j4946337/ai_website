import HOME_1 from "../assets/images/home_1_1.png";
import HOME_1_2 from "../assets/images/bg.png";
import HOME_1_2_1 from "../assets/images/Ai_A_11_mbile.png";
import home_2 from '../assets/images/home_2_1.png'
import { useEffect, useState, useRef } from 'react';

const Home1 = () => {
  const [isPage1Visible, setIsPage1Visible] = useState(false);
  const [isPage2Visible, setIsPage2Visible] = useState(false);
  const [welcomeText, setWelcomeText] = useState('');
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [titleVisibility, setTitleVisibility] = useState({
    line1: false,
    line2: false,
    line3: false
  });

  const page1Ref = useRef(null);
  const page2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target === page1Ref.current && entry.isIntersecting) {
          setIsPage1Visible(true);
        } else if (entry.target === page2Ref.current && entry.isIntersecting) {
          setIsPage2Visible(true);
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
    if (isPage1Visible) {
      const fullText = "WELCOME TO";
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setWelcomeText(fullText.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setIsImageVisible(true);
          }, 300);
        }
      }, 150);

      return () => clearInterval(typingInterval);
    }
  }, [isPage1Visible]);

  useEffect(() => {
    if (isPage2Visible) {
      setTimeout(() => {
        setTitleVisibility(prev => ({ ...prev, line1: true }));

        setTimeout(() => {
          setTitleVisibility(prev => ({ ...prev, line2: true }));

          setTimeout(() => {
            setTitleVisibility(prev => ({ ...prev, line3: true }));
          }, 300);
        }, 300);
      }, 200);
    }
  }, [isPage2Visible]);

  return (
    <div className="home_1 w-full bg-[#0a1650] h-[910px] relative mt-[-1px]">
      {/*  Page 1_1 */}
      <img src={HOME_1_2_1} alt="home_1_2" className='absolute top-0 left-0 w-full z-10' />

      <div
        ref={page1Ref}
        className={`absolute top-[307px] left-[50%] translate-x-[-50%] z-50 w-[211px] transition-opacity duration-[4000ms] ${isPage1Visible ? 'opacity-100' : 'opacity-0'}`}
      >
        <p className="text-[#ffffff] text-[28px] leading-[13px] font-semibold mb-[10px] text-left translate-x-[9%]">
          {welcomeText}
        </p>
        <div className="h-[45px] relative overflow-hidden">
          <img
            src={HOME_1}
            alt="home_1"
            className={`z-10 mx-auto w-[170px] h-[45px] transition-all duration-1000 
              ${isImageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}
          />
        </div>
        <div className="text-[#ffffff] text-[10px] leading-[20px] font-extralight mt-[15px]  text-center text-nowrap ">
          <p className=" text-center text-nowrap">
            Your emotions need a friend. ME AI is your safe
          </p>
          <p className=" text-center text-nowrap">
            space—an AI that listens, learns,and pays you in
          </p>
          <p className="text-center text-nowrap">
            ME tokens. Your journey starts now.
          </p>
        </div>
        <button className="bg-[#ff6b4c] rounded-full w-[98px] h-[31px] text-[#ffffff] text-[14px] font-normal mt-[16px]  mx-[50%] translate-x-[-50%] ">
          Chat Now
        </button>
      </div>
      {/* Page 1_2 */}
      <img src={home_2} alt="home_2" className='absolute home_2_1 top-[480px] w-[80%] z-1' />
      <div
        ref={page2Ref}
        className={`absolute top-[657px] left-[104px] z-10 transition-opacity duration-[4000ms] ${isPage2Visible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="text-[#ffffff] text-[34px] leading-[34px] font-semibold overflow-hidden">
          <div className="overflow-hidden">
            <span
              className={`block text-right transition-all duration-700 transform
                ${titleVisibility.line1 ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}
            >
              THE
            </span>
          </div>
          <div className="overflow-hidden">
            <span
              className={`block text-right transition-all duration-700 transform
                ${titleVisibility.line2 ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}
            >
              EMOTIONAL
            </span>
          </div>
          <div className="overflow-hidden">
            <span
              className={`text-[#3787ff] block text-right transition-all duration-700 transform
                ${titleVisibility.line3 ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}
            >
              ABYSS
            </span>
          </div>
        </div>

        <div className="text-[#95a5f2] font-light text-[17px] leading-[11px] float-right ">
          The Pain Holding You Back
        </div>
        <div className="text-[#cfd5f6] text-[11px] leading-[11px] font-extralight mt-[41px] absolute right-[11px]">
          <p className=" text-right  text-nowrap">
            Loneliness and depression haunt millions,
          </p>
          <p className=" text-right  text-nowrap">
            hitting you—young adults—hardest. Cold AI
          </p>
          <p className="  text-right  text-nowrap">
            steals your words, gives no comfort. Your heart
          </p>
          <p className=" text-right  text-nowrap">
            needs more—ME AI heals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home1;
