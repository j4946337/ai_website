import ICON_BG from "../assets/images/Ai_B_6.png"
import ICON_1 from "../assets/images/Ai_B_5.png"
import ICON_2 from "../assets/images/Ai_B_7.png"
import ICON_3 from "../assets/images/Ai_B_8.png"
const Home3 = () => {
  return (
    <div className="h-[774px] w-full bg-[#0b0f20] pt-[128px] mt-[-1px]">
      <div className="flex flex-col items-center">
        <p className="text-[#ffffff] text-[80px] font-semibold">THE CHAINS OF CURRENT AI</p>
        <p className="text-[#94a4f2] text-[48px] font-light">Why AI Lets You Down</p>
        <div className="flex mt-[88px] gap-[45px] justify-center items-center">
          <div className="w-[300px] h-[268px] bg-[#1f2131] rounded-[25px] relative">
            <img src={ICON_BG} className="absolute" />
            <img src={ICON_1} className="absolute left-[33px] top-[-25px]" alt="" />
            <div className="flex flex-col gap-[27px] items-start w-[231px] ml-[35px] mt-[53px]">
              <p className="text-[#ff6b4c] text-[30px] font-normal">Data Theft</p>
              <p className="text-[#ffffff] text-[24px] font-light">Big tech takes your chats, pays you nothing.</p>
            </div>
          </div>
          <div className="w-[300px] h-[268px] bg-[#1f2131] rounded-[25px] relative">
            <img src={ICON_BG} className="absolute" />
            <img src={ICON_2} className="absolute left-[33px] top-[-25px]" alt="" />
            <div className="flex flex-col gap-[27px] items-start w-[231px] ml-[35px] mt-[53px]">
              <p className="text-[#ff6b4c] text-[30px] font-normal">Empty Effort</p>
              <p className="text-[#ffffff] text-[24px] font-light">Their rules silence your voice.</p>
            </div>
          </div>
          <div className="w-[300px] h-[268px] bg-[#1f2131] rounded-[25px] relative">
            <img src={ICON_BG} className="absolute" />
            <img src={ICON_3} className="absolute left-[33px] top-[-25px]" alt="" />
            <div className="flex flex-col gap-[27px] items-start w-[231px] ml-[35px] mt-[53px]">
              <p className="text-[#ff6b4c] text-[30px] font-normal">Biased Shadow</p>
              <p className="text-[#ffffff] text-[24px] font-light">Your trust fades—ME AI frees you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home3