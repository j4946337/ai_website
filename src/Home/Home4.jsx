import BRAIN from "../assets/images/Ai_C_1.png"
import SQUARE from "../assets/images/Ai_C_2.png"
import LEFT from "../assets/images/Ai_C_3.png"
import RIGHT_UP from "../assets/images/Ai_C_4.png"
import RIGHT_DOWN from "../assets/images/Ai_C_5.png"
import PEOPLE from "../assets/images/Ai_C_6.png"
const Home4 = () => {
  return (
    <div className="w-full h-auto min-h-[1687px] bg-[#0a1650] relative overflow-hidden py-10">
      <img src={BRAIN} className="absolute mx-auto top-[239px] left-[50%] translate-x-[-55%] w-auto" alt="" />
      <div className="flex flex-col items-center pt-[95px] px-4">
        <p className="text-[#ffffff] text-[80px] font-semibold text-center">YOUR LIBERATION</p>
        <p className="text-[#94a4f2] text-[38px] mt-[-25px] font-light text-center">ME AI  |  Your Freedom</p>
      </div>

      {/* left start */}
      <div className="block">
        <img src={SQUARE} className="absolute top-[425px] left-[18%] translate-x-[-51%] w-[348px] h-[228px]" alt="" />
        <img src={LEFT} className="absolute top-[515px] left-[29%] w-[12%]" alt="" />
        <div className="flex flex-col absolute top-[450px] left-[8%]">
          <p className="text-[#ff6b4c] text-[30px] font-normal w-[290px] text-right">Own Your Friend</p>
          <p className="text-[#cdcdcd] text-[24px] font-light w-[290px] text-right">Build your AI—text, voice—an NFT to take anywhere, shaped with your community.</p>
        </div>
      </div>
      {/* left end */}

      {/* right up start */}
      <div className="block">
        <img src={SQUARE} className="rotate-180 absolute top-[309px] left-[82%] translate-x-[-50%] w-[348px] h-[228px]" alt="" />
        <img src={RIGHT_UP} className="absolute top-[415px] left-[60%] w-[11%]" alt="" />
        <div className="flex flex-col absolute top-[320px] left-[73%]">
          <p className="text-[#ff6b4c] text-[30px] font-normal w-[277px] text-left">Power Yourself</p>
          <p className="text-[#cdcdcd] text-[24px] font-light w-[277px] text-left">Your chats fuel a fair LLM—safe, yours, built together.</p>
        </div>
      </div>
      {/* right up end */}

      {/* right down start */}
      <div className="block">
        <img src={SQUARE} className="rotate-180 absolute top-[580px] left-[82%] translate-x-[-50%] w-[348px] h-[228px]" alt="" />
        <img src={RIGHT_DOWN} className="absolute top-[600px] left-[48%] translate-x-[-1.5%] w-[23%]" alt="" />
        <div className="flex flex-col absolute top-[600px] left-[73%]">
          <p className="text-[#ff6b4c] text-[30px] font-normal w-[303px] text-left">Earn Rewards</p>
          <p className="text-[#cdcdcd] text-[24px] font-light w-[303px] text-left">Your chats score EQ, earning ME tokens—your heart matters.</p>
        </div>
      </div>
      {/* right down end */}

      {/* part2 start - mobile friendly version */}
      <div className="flex flex-row justify-between mt-0 absolute top-[570px] left-0  px-0">
        <div className="relative w-auto mb-0">
          <img src={PEOPLE} alt="" className="max-w-full max-h-full  mx-0 object-cover z-20" />
        </div>

        <div className="flex flex-col h-full pt-[320px] gap-[10px] ml-[-70px]">
          <div className="flex flex-col">
            <p className="font-semibold text-[#ffffff] text-[40px]">Craft Your Ally</p>
            <p className="text-[#ff6b4c] text-[30px] mt-[-10px]">Make It Yours</p>
            <p className="text-[#cdcdcd] text-[24px] font-light w-[482px]">Shape your AI—voice, look, tone—across different types (e.g., "Creative Dreamer"). It soothes your loneliness, built by the community.</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-[#ffffff] text-[40px]">Grow Your EQ</p>
            <p className="text-[#ff6b4c] text-[30px] mt-[-10px]">Feel the Growth</p>
            <p className="text-[#cdcdcd] text-[24px] font-light w-[490px]">Your EQ (0–2000) scores your chats—depth, truth, you. As it rises, your AI levels up (1–100), unlocking fun perks—your best friend grows with us.</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-[#ffffff] text-[40px]">Play Your Way</p>
            <p className="text-[#ff6b4c] text-[30px] mt-[-10px]">Have Fun, Feel More</p>
            <p className="text-[#cdcdcd] text-[24px] font-light w-[487px]">Dialogue Duels: Weekly 10-minute chats score your AI's EQ—3 tries a day earn you ME tokens and leaderboard spots. Your fun chats brighten your day with us.</p>
          </div>
        </div>
      </div>
      {/* part2 end */}

      {/* Mobile version of the diagrams */}
      <div className="hidden px-4 mt-10">
        <div className="mb-10">
          <p className="text-[#ff6b4c] text-2xl font-normal text-center">Own Your Friend</p>
          <p className="text-[#cdcdcd] text-lg font-light text-center mt-2">Build your AI—text, voice—an NFT to take anywhere, shaped with your community.</p>
        </div>
        <div className="mb-10">
          <p className="text-[#ff6b4c] text-2xl font-normal text-center">Power Yourself</p>
          <p className="text-[#cdcdcd] text-lg font-light text-center mt-2">Your chats fuel a fair LLM—safe, yours, built together.</p>
        </div>
        <div className="mb-10">
          <p className="text-[#ff6b4c] text-2xl font-normal text-center">Earn Rewards</p>
          <p className="text-[#cdcdcd] text-lg font-light text-center mt-2">Your chats score EQ, earning ME tokens—your heart matters.</p>
        </div>
      </div>
    </div>
  )
}

export default Home4