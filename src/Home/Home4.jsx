import BRAIN from "../assets/images/Ai_C_1.png"
import SQUARE from "../assets/images/Ai_C_2.png"
import LEFT from "../assets/images/Ai_C_3.png"
import RIGHT_UP from "../assets/images/Ai_C_4.png"
import RIGHT_DOWN from "../assets/images/Ai_C_5.png"
import PEOPLE from "../assets/images/Ai_C_6.png"
const Home4 = () => {
  return (
    <div className="w-full h-auto min-h-[1380px] bg-[#0a1650] relative overflow-hidden py-[48px] mt-[-1px]">
      <img src={BRAIN} className="absolute mx-auto top-[120px] left-[50%] translate-x-[-55%] w-[100vw] max-w-none" alt="" />
      <div className="flex flex-col items-center">
        <p className="text-[#ffffff] text-[34px] leading-[30px] w-[186px] font-semibold text-center">YOUR LIBERATION</p>
        <p className="text-[#94a4f2] text-[17px] font-light text-center">ME AI  |  Your Freedom</p>
      </div>


      <div className="block">
        <img src={SQUARE} className="rotate-180 absolute top-[325px] left-[47px]  w-[174px] h-[95px]" alt="" />

        <div className="flex flex-col absolute top-[333px] left-[60px]">
          <p className="text-[#ff6b4c] text-[15px] font-normal w-[112px]">Power Yourself</p>
          <p className="text-[#cdcdcd] text-[12px] font-light w-[140px]">Your chats fuel a fair LLM—safe, yours, built together.</p>
        </div>
      </div>
      <div className="block">
        <img src={SQUARE} className="absolute top-[415px] right-[46px]  w-[174px] h-[104px] z-10" alt="" />

        <div className="flex flex-col absolute top-[420px] right-[60px]">
          <p className="text-[#ff6b4c] text-[15px] font-normal w-[112px] self-end ">Own Your Friend</p>
          <p className="text-[#cdcdcd] text-[12px] font-light w-[130px] text-right">Build your AI—text, voice—an NFT to take anywhere, shaped with your community.</p>
        </div>
      </div>
      <div className="block">
        <img src={SQUARE} className="rotate-180 absolute top-[519px] left-[47px]  w-[174px] h-[100px]" alt="" />

        <div className="flex flex-col absolute top-[525px] left-[60px]">
          <p className="text-[#ff6b4c] text-[15px] font-normal w-[112px]">Earn Rewards</p>
          <p className="text-[#cdcdcd] text-[12px] font-light w-[152px]">Your chats score EQ, earning ME tokens—your heart matters.</p>
        </div>
      </div>
      {/* part2 start - mobile friendly version */}
      <div className="flex flex-col mt-0 absolute top-[570px] left-0  px-0">

        <img src={PEOPLE} alt="" className="h-[430px] w-[100%] z-0 mt-[15px]" />


        <div className="flex flex-col   gap-[20px] ">
          <div className="flex flex-col ml-[35px]">
            <p className="font-semibold text-[#ffffff] text-[20px] leading-[20px]">Craft Your Ally</p>
            <p className="text-[#ff6b4c] text-[15px] leading-[15px]">Make It Yours</p>
            <p className="text-[#cdcdcd] text-[12px] font-light w-[241px] leading-[12px]">Shape your AI—voice, look, tone—across different types (e.g., "Creative Dreamer"). It soothes your loneliness, built by the community.</p>
          </div>
          <div className="flex flex-col ml-[35px]">
            <p className="font-semibold text-[#ffffff] text-[20px] leading-[20px]">Grow Your EQ</p>
            <p className="text-[#ff6b4c] text-[15px] leading-[15px]">Feel the Growth</p>
            <p className="text-[#cdcdcd] text-[12px] font-light w-[245px] leading-[12px]">Your EQ (0–2000) scores your chats—depth, truth, you. As it rises, your AI levels up (1–100), unlocking fun perks—your best friend grows with us.</p>
          </div>
          <div className="flex flex-col ml-[35px]">
            <p className="font-semibold text-[#ffffff] text-[20px] leading-[20px]">Play Your Way</p>
            <p className="text-[#ff6b4c] text-[15px] leading-[15px]">Have Fun, Feel More</p>
            <p className="text-[#cdcdcd] text-[12px] font-light w-[244px] leading-[12px]">Dialogue Duels: Weekly 10-minute chats score your AI’s EQ—3 tries a day earn you ME tokens and leaderboard spots. Your fun chats brighten your day with us.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home4