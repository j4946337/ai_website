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
const Home5 = () => {
  return (
    <div className="w-full h-auto min-h-[700px] overflow-hidden bg-[#0a1650] mt-[-1px]">
      <div className="flex justify-between flex-col items-center">
        <p className="z-0 text-[#ffffff] text-[34px] leading-[34px] font-semibold text-center">YOUR JOURNEY, STEP-BY-STEP</p>
        <p className="text-[#94a4f2] font-light text-[17px] leading-[17px]  text-center">How You Earn Your ME Tokens?</p>
      </div>

      {/* Desktop version with wires and absolute positioning */}
      <div className="w-full relative ml-[21px] mt-[44px] block">

        {/* step_1 */}
        <div className="5_step_1 absolute  flex items-center w-[225px] h-[79px] gap-[2px]">
          <div className="w-[132px] h-[132px] relative">
            <img src={step_bg} alt="step_bg" className=" max-w-none w-[120px] h-[120px] " />
            <img src={step_1} alt="step_1" className="w-[65px] h-[65px] max-w-none absolute top-[27px] left-[27px] " />
          </div>
          <div className="flex flex-col grow  ml-[-10px] gap-[4px] ">
            <div className="flex h-[20px] items-center gap-[5px]">
              <div className="w-[20px] h-[20px] bg-[#ff6b4c] rounded-full leading-[18px] text-center text-[#ffffff] text-[13px] font-bold">1</div>
              <span className="text-[#ffffff] w-[112px] text-[13px] leading-[13px] font-semibold text-nowrap">Unlock Your World</span>
            </div>
            <div className="text-[#cdcdcd] text-[11px] leading-[11px] font-light w-[126px]">Sign in with your Web3 wallet—your key to ME AI.</div>
          </div>
        </div>

        {/* step_2 */}
        <div className="5_step_2 absolute top-[110px] flex items-center w-[225px] h-[79px] gap-[2px]">
          <div className="w-[132px] h-[132px] relative">
            <img src={step_bg} alt="step_bg" className=" max-w-none w-[120px] h-[120px] " />
            <img src={step_2} alt="step_1" className="w-[65px] h-[95px] max-w-none absolute top-[2px] left-[27px] " />
          </div>
          <div className="flex flex-col grow  ml-[-10px] gap-[4px] ">
            <div className="flex h-[20px] items-center gap-[5px]">
              <div className="w-[20px] h-[20px] bg-[#ff6b4c] rounded-full leading-[18px] text-center text-[#ffffff] text-[13px] font-bold">2</div>
              <span className="text-[#ffffff] w-[112px] text-[13px] leading-[13px] font-semibold text-nowrap">Discover Your Ally</span>
            </div>
            <div className="text-[#cdcdcd] text-[11px]  leading-[11px] font-light w-[140px]">A quiz matches you to 10 archetypes—like “Empathetic Listener.”</div>
          </div>
        </div>

        {/* Other steps... */}
        <div className="5_step_3 absolute top-[210px]  flex items-center w-[225px] h-[79px] gap-[2px]">
          <div className="w-[132px] h-[132px] relative">
            <img src={step_bg} alt="step_bg" className=" max-w-none w-[120px] h-[120px] " />
            <img src={step_3} alt="step_3" className="w-[65px] h-[65px] max-w-none absolute top-[27px] left-[27px] " />
          </div>
          <div className="flex flex-col grow  ml-[-10px] gap-[4px] ">
            <div className="flex h-[20px] items-center gap-[5px]">
              <div className="w-[20px] h-[20px] bg-[#ff6b4c] rounded-full leading-[18px] text-center text-[#ffffff] text-[13px] font-bold">3</div>
              <span className="text-[#ffffff] w-[112px] text-[13px] leading-[13px] font-semibold text-nowrap">Chat & Shine</span>
            </div>
            <div className="text-[#cdcdcd] text-[11px] leading-[11px] font-light w-[161px]">Your heartfelt chats earn EQ—1000–1900 points each, building our ultimate AI together.</div>
          </div>
        </div>

        <div className="5_step_4 absolute top-[310px]  flex items-center w-[225px] h-[79px] gap-[2px]">
          <div className="w-[132px] h-[132px] relative">
            <img src={step_bg} alt="step_bg" className=" max-w-none w-[120px] h-[120px] " />
            <img src={step_4} alt="step_4" className="w-[75px] h-[65px] max-w-none absolute top-[27px] left-[27px] " />
          </div>
          <div className="flex flex-col grow  ml-[-10px] gap-[4px]  ">
            <div className="flex h-[20px] items-center gap-[5px]">
              <div className="w-[20px] h-[20px] bg-[#ff6b4c] rounded-full leading-[18px] text-center text-[#ffffff] text-[13px] font-bold">4</div>
              <span className="text-[#ffffff] w-[112px] text-[13px] leading-[13px] font-semibold text-nowrap"> Seal It On-Chain</span>
            </div>
            <div className="text-[#cdcdcd] text-[11px] leading-[11px] font-light w-[119px]">Your EQ locks onto the blockchain—pure, yours, community-verified.</div>
          </div>
        </div>

        <div className="5_step_5 absolute top-[410px]  flex items-center w-[225px] h-[79px] gap-[2px]">
          <div className="w-[132px] h-[132px] relative">
            <img src={step_bg} alt="step_bg" className=" max-w-none w-[120px] h-[120px] " />
            <img src={step_5} alt="step_4" className="w-[85px] h-[95px] max-w-none absolute top-[6px] left-[20px] " />
          </div>
          <div className="flex flex-col grow  ml-[-10px] gap-[4px] ">
            <div className="flex h-[20px] items-center gap-[5px]">
              <div className="w-[20px] h-[20px] bg-[#ff6b4c] rounded-full leading-[18px] text-center text-[#ffffff] text-[13px] font-bold">5</div>
              <span className="text-[#ffffff] w-[112px] text-[13px] leading-[13px] font-semibold text-nowrap">Claim Your ME Tokens</span>
            </div>
            <div className="text-[#cdcdcd] text-[11px] leading-[11px] font-light w-[138px]">1000 EQ = 1 ME (early), up to 1900 later—your soul’s work pays off.</div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Home5