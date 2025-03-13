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
    <div className="w-full h-auto min-h-[775px] overflow-hidden bg-[#0a1650] py-10 mt-[-1px]">
      <div className="flex justify-between flex-col items-center pt-[60px] px-4">
        <p className="z-0 text-[#ffffff] text-[80px] font-semibold text-center">YOUR JOURNEY, STEP-BY-STEP</p>
        <p className="text-[#94a4f2] font-light text-[38px] mt-[-25px] text-center">How You Earn Your ME Tokens?</p>
      </div>

      {/* Desktop version with wires and absolute positioning */}
      <div className="w-full relative mt-[-80px] block">
        <img src={wire_1} alt="wire_1" className="absolute w-[12%] left-[13%] top-[150px]" />
        <img src={wire_2} alt="wire_2" className="absolute top-[310px] left-[35%] w-[22%]" />
        <img src={wire_3} alt="wire_3" className="absolute top-[300px] left-[58%] w-[25%]" />
        <img src={wire_4} alt="wire_4" className="absolute top-[10px] right-[100px] w-[12%]" />

        {/* step_1 */}
        <div className="5_step_1 absolute top-[100px] left-[8%] flex w-[530px] h-[158px] gap-[23px]">
          <div className="w-[158px] h-[158px] relative">
            <img src={step_bg} alt="step_bg" className="absolute max-w-none w-[264px] h-[264px] top-[-55px] left-[-55px]" />
            <img src={step_1} alt="step_1" className="w-[140px] h-[140px] max-w-none absolute top-[0px] left-[-0px]" />
          </div>
          <div className="flex flex-col grow gap-[5px] pt-[20px]">
            <div className="flex h-[39px] items-center gap-[10px]">
              <div className="w-[39px] h-[39px] bg-[#ff6b4c] rounded-full leading-[38px] text-center text-[#ffffff] text-[30px] font-bold">1</div>
              <span className="text-[#ffffff] text-[26px] font-semibold">Unlock Your World</span>
            </div>
            <div className="text-[#cdcdcd] text-[22px] font-light w-[252px]">Sign in with your Web3 wallet—your key to ME AI.</div>
          </div>
        </div>

        {/* step_2 */}
        <div className="5_step_2 absolute top-[420px] left-[25%] flex w-[530px] h-[158px] gap-[23px]">
          <div className="w-[158px] h-[158px] relative">
            <img src={step_bg} alt="step_bg" className="absolute max-w-none w-[264px] h-[264px] top-[-55px] left-[-55px]" />
            <img src={step_2} alt="step_2" className="w-[140px] h-[201px] max-w-none absolute top-[-43px] left-[6px]" />
          </div>
          <div className="flex flex-col grow gap-[5px] pt-[20px]">
            <div className="flex h-[39px] items-center gap-[10px]">
              <div className="w-[39px] h-[39px] bg-[#ff6b4c] rounded-full leading-[38px] text-center text-[#ffffff] text-[30px] font-bold">2</div>
              <span className="text-[#ffffff] text-[26px] font-semibold">Discover Your Ally</span>
            </div>
            <div className="text-[#cdcdcd] text-[22px] font-light w-[279px]">A quiz matches you to 10 archetypes—like "Empathetic Listener."</div>
          </div>
        </div>

        {/* Other steps... */}
        <div className="5_step_3 absolute top-[240px] left-[48%] flex w-[530px] h-[158px] gap-[23px]">
          <div className="w-[158px] h-[158px] relative">
            <img src={step_bg} alt="step_bg" className="absolute max-w-none w-[264px] h-[264px] top-[-55px] left-[-55px]" />
            <img src={step_3} alt="step_3" className="w-[140px] h-[151px] max-w-none absolute top-[0] left-[12px]" />
          </div>
          <div className="flex flex-col grow gap-[5px] pt-[20px]">
            <div className="flex h-[39px] items-center gap-[10px]">
              <div className="w-[39px] h-[39px] bg-[#ff6b4c] rounded-full leading-[38px] text-center text-[#ffffff] text-[30px] font-bold">3</div>
              <span className="text-[#ffffff] text-[26px] font-semibold">Chat & Shine</span>
            </div>
            <div className="text-[#cdcdcd] text-[22px] font-light w-[322px]">Your heartfelt chats earn EQ—1000–1900 points each, building our ultimate AI together.</div>
          </div>
        </div>

        <div className="5_step_4 absolute top-[400px] left-[55%] flex w-[530px] h-[158px] gap-[23px]">
          <div className="flex flex-col grow gap-[5px] pt-[20px] items-end">
            <div className="flex h-[39px] items-center gap-[10px]">
              <span className="text-[#ffffff] text-[26px] font-semibold">Seal It On-Chain</span>
              <div className="w-[39px] h-[39px] bg-[#ff6b4c] rounded-full leading-[38px] text-center text-[#ffffff] text-[30px] font-bold">4</div>
            </div>
            <div className="text-[#cdcdcd] text-[22px] font-light w-[237px]">Your EQ locks onto the blockchain—pure, yours, community-verified.</div>
          </div>
          <div className="w-[158px] h-[158px] relative">
            <img src={step_bg} alt="step_bg" className="absolute max-w-none w-[264px] h-[264px] top-[-55px] left-[-55px]" />
            <img src={step_4} alt="step_4" className="w-[140px] h-[151px] max-w-none absolute top-[0] left-[12px]" />
          </div>
        </div>

        <div className="5_step_5 absolute top-[80px] left-[55%] flex w-[530px] h-[158px] gap-[23px]">
          <div className="flex flex-col grow gap-[5px] pt-[20px] items-end">
            <div className="flex h-[39px] items-center gap-[10px]">
              <span className="text-[#ffffff] text-[26px] font-semibold">Claim Your ME Tokens</span>
              <div className="w-[39px] h-[39px] bg-[#ff6b4c] rounded-full leading-[38px] text-center text-[#ffffff] text-[30px] font-bold">5</div>
            </div>
            <div className="text-[#cdcdcd] text-[22px] font-light w-[275px]">1000 EQ = 1 ME (early), up to 1900 later—your soul's work pays off.</div>
          </div>
          <div className="w-[158px] h-[158px] relative">
            <img src={step_bg} alt="step_bg" className="absolute max-w-none w-[264px] h-[264px] top-[-55px] left-[-55px]" />
            <img src={step_5} alt="step_5" className="w-[140px] h-[151px] max-w-none absolute top-[0] left-[12px]" />
          </div>
        </div>

        <div className="5_step_6 absolute top-[-55px] right-[-23%] flex w-[530px] h-[158px] gap-[23px]">
          <div className="w-[158px] h-[158px] relative">
            <img src={step_6} alt="step_6" className="w-[140px] h-[151px] max-w-none absolute top-[0] left-[12px]" />
          </div>
        </div>
      </div>

      {/* Mobile version with simplified layout */}
      <div className="hidden px-4 mt-10">
        <div className="flex items-center mb-8">
          <div className="w-[39px] h-[39px] bg-[#ff6b4c] rounded-full flex items-center justify-center text-[#ffffff] text-[24px] font-bold mr-3">1</div>
          <div>
            <p className="text-[#ffffff] text-xl font-semibold">Unlock Your World</p>
            <p className="text-[#cdcdcd] text-base font-light">Sign in with your Web3 wallet—your key to ME AI.</p>
          </div>
        </div>

        <div className="flex items-center mb-8">
          <div className="w-[39px] h-[39px] bg-[#ff6b4c] rounded-full flex items-center justify-center text-[#ffffff] text-[24px] font-bold mr-3">2</div>
          <div>
            <p className="text-[#ffffff] text-xl font-semibold">Discover Your Ally</p>
            <p className="text-[#cdcdcd] text-base font-light">A quiz matches you to 10 archetypes—like "Empathetic Listener."</p>
          </div>
        </div>

        <div className="flex items-center mb-8">
          <div className="w-[39px] h-[39px] bg-[#ff6b4c] rounded-full flex items-center justify-center text-[#ffffff] text-[24px] font-bold mr-3">3</div>
          <div>
            <p className="text-[#ffffff] text-xl font-semibold">Chat & Shine</p>
            <p className="text-[#cdcdcd] text-base font-light">Your heartfelt chats earn EQ—1000–1900 points each, building our ultimate AI together.</p>
          </div>
        </div>

        <div className="flex items-center mb-8">
          <div className="w-[39px] h-[39px] bg-[#ff6b4c] rounded-full flex items-center justify-center text-[#ffffff] text-[24px] font-bold mr-3">4</div>
          <div>
            <p className="text-[#ffffff] text-xl font-semibold">Seal It On-Chain</p>
            <p className="text-[#cdcdcd] text-base font-light">Your EQ locks onto the blockchain—pure, yours, community-verified.</p>
          </div>
        </div>

        <div className="flex items-center mb-8">
          <div className="w-[39px] h-[39px] bg-[#ff6b4c] rounded-full flex items-center justify-center text-[#ffffff] text-[24px] font-bold mr-3">5</div>
          <div>
            <p className="text-[#ffffff] text-xl font-semibold">Claim Your ME Tokens</p>
            <p className="text-[#cdcdcd] text-base font-light">1000 EQ = 1 ME (early), up to 1900 later—your soul's work pays off.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home5