import mobile_1 from '../assets/images/Ai_E_9.png'
import mobile_2 from '../assets/images/Ai_E_10.png'
import mobile_3 from '../assets/images/Ai_E_11.png'
import pint from '../assets/images/Ai_E_12.png'
import { useState, useEffect, useRef } from 'react'
import translations from '../assets/multi_language.json'

const Home5_1 = ({ currentLanguage }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [title1Visible, setTitle1Visible] = useState(false)
  const [title2Visible, setTitle2Visible] = useState(false)
  const [title3Visible, setTitle3Visible] = useState(false)
  const [title4Visible, setTitle4Visible] = useState(false)
  const [descVisible, setDescVisible] = useState(false)
  const [phonesVisible, setPhonesVisible] = useState(false)
  const [pintVisible, setPintVisible] = useState(false)
  const containerRef = useRef(null)
  const images = [mobile_1, mobile_2, mobile_3]
  const [positions, setPositions] = useState([
    'right',
    'center',
    'left',
  ])

  const getText = (id) => {
    const translation = translations.find(t => t.id === id);
    return translation ? translation[currentLanguage === 'english' ? 'english' : 't_chinese'] : '';
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 标题1显示
          setTimeout(() => {
            setTitle1Visible(true);
          }, 500);
          // 标题2显示
          setTimeout(() => {
            setTitle2Visible(true);
          }, 1000);
          // 标题3显示
          setTimeout(() => {
            setTitle3Visible(true);
          }, 1500);
          // 标题4显示
          setTimeout(() => {
            setTitle4Visible(true);
          }, 2000);
          // 描述文字显示
          setTimeout(() => {
            setDescVisible(true);
          }, 2500);
          // 手机图片显示
          setTimeout(() => {
            setPhonesVisible(true);
          }, 3000);
          // 背景图片显示
          setTimeout(() => {
            setPintVisible(true);
          }, 3500);
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
    const interval = setInterval(() => {
      // 向左轮转位置：right -> center -> left -> right
      setPositions(prev => {
        const newPositions = [...prev];
        const lastPosition = newPositions.pop();
        newPositions.unshift(lastPosition);
        return newPositions;
      });
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // 获取位置对应的样式类
  const getPositionClasses = (position) => {
    switch (position) {
      case 'left':
        return 'absolute -left-25 z-5 opacity-70 scale-90 transform -translate-x-20 transition-all duration-[1500ms] ease-out';
      case 'center':
        return 'relative z-10 opacity-100 scale-110 transition-all duration-[1500ms] ease-out';
      case 'right':
        return 'absolute -right-25 z-5 opacity-70 scale-90 transform translate-x-20 transition-all duration-[1500ms] ease-out';
      default:
        return '';
    }
  }

  return (
    <div ref={containerRef} className="w-full h-[800px] bg-[#0a1650] mt-[-1px]">
      <div className='flex pt-[70px] gap-[15%] ml-[9%]'>
        <div className={`w-[40%] flex flex-col pt-[100px] ${currentLanguage !== ' english' ? 'gap-[15px]' : ''}`}>

          <div className={`transition-all duration-[2000ms] ${title1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className='text-[#fff] text-[80px] font-semibold leading-[80px]'>{getText(5101)}</div>
          </div>
          <div className={`transition-all duration-[2000ms] ${title2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className='text-[#fff] text-[80px]  font-semibold leading-[60px]'>{getText(5102)}</div>
          </div>


          <div className={`transition-all duration-[2000ms] ${title3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className='text-[#fff] text-[80px]  leading-[60px] font-thin'>{getText(5103)}</div>
          </div>
          <div className={`transition-all duration-[2000ms] ${title4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className='text-[#fff] text-[80px]  leading-[60px] font-thin'>{getText(5104)}</div>
          </div>


          <div className={`transition-all duration-[2000ms] ${descVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className='text-[#cdcdcd] text-[24px] mt-[-10px] font-light'>{getText(52)}</div>
          </div>
        </div>
        <div className={`flex justify-center items-center relative h-[800px] transition-opacity duration-[2000ms] ${phonesVisible ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src={mobile_1}
            alt=""
            className={`will-change-transform w-[319px] h-[596px] ${getPositionClasses(positions[0])}`}
          />
          <img
            src={mobile_2}
            alt=""
            className={`will-change-transform w-[319px] h-[596px] ${getPositionClasses(positions[1])}`}
          />
          <img
            src={mobile_3}
            alt=""
            className={`will-change-transform w-[319px] h-[596px] ${getPositionClasses(positions[2])}`}
          />
          <img src={pint} alt="" className={`absolute max-w-none top-[-150px] left-[-400px] w-[600px] h-[600px] transition-opacity duration-[2000ms] ${pintVisible ? 'opacity-100' : 'opacity-0'}`} />
          <img src={pint} alt="" className={`absolute max-w-none bottom-[-50px] right-[-400px] w-[600px] h-[600px] transition-opacity duration-[2000ms] ${pintVisible ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      </div>
    </div>
  )
}

export default Home5_1