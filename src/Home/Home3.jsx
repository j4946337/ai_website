import ICON_BG from "../assets/images/Ai_B_6.png"
import ICON_1 from "../assets/images/Ai_B_5.png"
import ICON_2 from "../assets/images/Ai_B_7.png"
import ICON_3 from "../assets/images/Ai_B_8.png"
import { useEffect, useState, useRef } from 'react';

const Home3 = () => {
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
        } else if (entry.target === card2Ref.current && entry.isIntersecting) {
          setIsCard2Visible(true);
        } else if (entry.target === card3Ref.current && entry.isIntersecting) {
          setIsCard3Visible(true);
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
    <div className="h-[616px] w-full bg-[#0b0f20] pt-[53px] mt-[-1px]">
      <div className="flex flex-col items-center">
        <div
          ref={titleRef}
          className={`transition-opacity duration-[4000ms] ${isTitleVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <p className="text-[#ffffff] w-[250px] text-[34px] leading-[30px] font-semibold text-center">THE CHAINS OF CURRENT AI</p>
          <p className="text-[#94a4f2] text-[17px] font-light">Why AI Lets You Down</p>
        </div>
        <div className="flex flex-col mt-[55px] gap-[32px] justify-center items-center">
          <div
            ref={card1Ref}
            className={`w-[251px] h-[103px] bg-[#1f2131] rounded-[25px] relative transition-opacity duration-[4000ms] ${isCard1Visible ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={ICON_BG} className="absolute w-[110px] h-[58px] " />
            <img src={ICON_1} className="absolute w-[27px] h-[27px] left-[33px] translate-y-[-50%]" alt="" />
            <div className="flex flex-col gap-[14px] items-start w-[187px] ml-[20px] mt-[14px]">
              <p className="text-[#ff6b4c] text-[15px] font-normal">Data Theft</p>
              <p className="text-[#ffffff] text-[12px] font-light">Big tech takes your chats, pays you nothing.</p>
            </div>
          </div>
          <div
            ref={card2Ref}
            className={`w-[251px] h-[103px] bg-[#1f2131] rounded-[25px] relative transition-opacity duration-[4000ms] ${isCard2Visible ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={ICON_BG} className="absolute w-[110px] h-[58px] " />
            <img src={ICON_2} className="absolute w-[27px] h-[27px] left-[33px] translate-y-[-50%]" alt="" />
            <div className="flex flex-col gap-[14px] items-start w-[157px] ml-[20px] mt-[14px]">
              <p className="text-[#ff6b4c] text-[15px] font-normal">Empty Effort</p>
              <p className="text-[#ffffff] text-[12px] font-light">Their rules silence your voice.</p>
            </div>
          </div>
          <div
            ref={card3Ref}
            className={`w-[251px] h-[103px] bg-[#1f2131] rounded-[25px] relative transition-opacity duration-[4000ms] ${isCard3Visible ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={ICON_BG} className="absolute w-[110px] h-[58px] " />
            <img src={ICON_3} className="absolute w-[27px] h-[27px] left-[33px] translate-y-[-50%]" alt="" />
            <div className="flex flex-col gap-[14px] items-start w-[180px] ml-[20px] mt-[14px]">
              <p className="text-[#ff6b4c] text-[15px] font-normal">Biased Shadow</p>
              <p className="text-[#ffffff] text-[12px] font-light">Your trust fades—ME AI frees you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home3