import me_imf from '../assets/images/Ai_D_11.png'
import me_brain from '../assets/images/Ai_D_8.png'
import me_mobile from '../assets/images/Ai_D_9.png'
import me_cloud from '../assets/images/Ai_D_10.png'
import { useEffect, useState, useRef } from 'react';

const Home6 = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isCard1Visible, setIsCard1Visible] = useState(false);
  const [isCard2Visible, setIsCard2Visible] = useState(false);
  const [isCard3Visible, setIsCard3Visible] = useState(false);

  const titleRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target === titleRef.current && entry.isIntersecting) {
          setIsTitleVisible(true);
        } else if (entry.target === card1Ref.current && entry.isIntersecting) {
          setIsCard1Visible(true);
          setTimeout(() => {
            setIsCard2Visible(true);
            setTimeout(() => {
              setIsCard3Visible(true);
            }, 300);
          }, 300);
        }
      });
    }, { threshold: 0.3 });

    if (titleRef.current) observer.observe(titleRef.current);
    if (card1Ref.current) observer.observe(card1Ref.current);
    if (card2Ref.current) observer.observe(card2Ref.current);
    if (card3Ref.current) observer.observe(card3Ref.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (card1Ref.current) observer.unobserve(card1Ref.current);
      if (card2Ref.current) observer.unobserve(card2Ref.current);
      if (card3Ref.current) observer.unobserve(card3Ref.current);
    };
  }, []);

  return (
    <div className='w-full h-[600px] pt-[10px] bg-[#0a1650] relative overflow-hidden  mt-[-1px]'>
      <img src={me_imf} alt="me_imf" className='w-full absolute bottom-0 left-0 z-0' />
      <div
        ref={titleRef}
        className={`mx-auto w-[268px] px-0 text-center z-[100] relative ${isTitleVisible ? '' : ''}`}
      >
        <div
          className={`text-[#ffffff] text-[34px] leading-[34px] font-semibold z-[100] transition-all duration-[1200ms] ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}
        >
          YOUR TECH EDGE
        </div>
        <div
          className={`text-[#94a4f2] text-[17px] leading-[17px] font-light z-[100] transition-opacity duration-[4000ms] ${isTitleVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          Powering Your Emotional Future
        </div>
      </div>

      {/* Desktop version */}
      <div className='flex mt-[53px] flex-col gap-[50px]'>
        <div
          ref={card1Ref}
          className={`w-[260px] h-[95px] bg-[#7edaeb33] rounded-l-[30px] self-end relative transition-all duration-[1000ms] ${isCard1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50px]'}`}
        >
          <img src={me_brain} alt="me_brain" className='absolute w-[90px] h-[100px] translate-x-[-40%] translate-y-[-15%]' />
          <div className=' w-[148px] mt-[13px] ml-[66px]'>
            <div className='text-[#ffffff] text-[13px] leading-[13px] font-semibold'>On-Chain LLM</div>
            <div className='text-[#ffffff] text-[11px] leading-[11px] font-light'>
              Your encrypted chats (IPFS/Filecoin) train a bias-free brain—spam-proof with smart parsing.
            </div>
          </div>
        </div>
        <div
          ref={card2Ref}
          className={`w-[258px] h-[95px] bg-[#7edaeb33] rounded-r-[30px] mr-[17%] relative transition-all duration-[1000ms] ${isCard2Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[50px]'}`}
        >
          <img src={me_mobile} alt="me_mobile" className='absolute  w-[90px] h-[100px] right-0 bottom-[32px] translate-x-[40%]' />
          <div className='mr-[57px] w-[148px] mt-[25px] float-right'>
            <div className='text-[#ffffff] text-[13px] leading-[13px] font-semibold float-right'>Federated Learning</div>
            <div className='text-[#ffffff] text-[11px] leading-[11px] font-light float-right'>
              Your device (phone or NVIDIA desktop) crafts your AI locally.
            </div>
          </div>
        </div>
        <div
          ref={card3Ref}
          className={`w-[260px] h-[95px] bg-[#7edaeb33] rounded-l-[30px] self-end relative transition-all duration-[1000ms] ${isCard3Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50px]'}`}
        >
          <img src={me_cloud} alt="me_cloud" className='absolute w-[90px] h-[100px] translate-x-[-40%] translate-y-[-15%]' />
          <div className=' w-[114px] mt-[20px] ml-[66px]'>
            <div className='text-[#ffffff] text-[13px] leading-[13px] font-semibold'>MCP & OpenAPI</div>
            <div className='text-[#ffffff] text-[11px] leading-[11px] font-light'>
              Your companion roams free—limitless, yours.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home6