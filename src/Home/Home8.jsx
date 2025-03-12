import roadmap from '../assets/images/roadmap.png'
import point from '../assets/images/Ai_E_8.png'
import rp_1 from '../assets/images/Ai_E_4.png'
import rp_2 from '../assets/images/Ai_E_5.png'
import rp_3 from '../assets/images/Ai_E_6.png'
import rp_4 from '../assets/images/Ai_E_7.png'



const Home8 = () => {
  return (
    <div className="home_8 h-[1200px] bg-[#0b0f20] w-full">
      <div className="flex flex-col pl-[9%]">
        <div className="text-[#ffffff] text-[80px] font-semibold">ROADMAP</div>
        <div className="text-[#94a4f2] text-[26px] font-light mt-[-30px]">From Your First Chat to Global Impact</div>
      </div>
      <div className="mt-[150px] relative">
        <img src={roadmap} alt="roadmap" className="w-full  bg-transparent" />
        <div className="absolute top-[15%] left-[8%] flex gap-[10px]">
          <div className='relative'>
            <img src={rp_1} alt="rp_1" className="w-[118px] h-[228px]" />
            <img src={point} alt="point" className="w-[30px] h-[30px]  mx-auto mt-[-4px]" />
            <div className='flex flex-col w-[64px] items-center absolute left-[50%] translate-x-[-50%] top-[38px]'>
              <span className='text-[#ffffff] text-[23px] font-semibold'>Phase</span>
              <span className='text-[#ffffff] text-[50px] font-semibold mt-[-20px]'>1</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-[#ffffff] text-[20px] font-semibold">Q1 2025</div>
            <div className="text-[#ffffff] text-[20px] font-semibold mt-[-10px]">H5 Beta </div>
            <div className='w-[175px] text-[#cdcdcd] text-[18px] font-light leading-5'>Your H5 prototype launches—customize your AI, earn ME tokens, and shape our companion with your community’s input.</div>
          </div>
        </div>
        <div className="absolute top-[26px] left-[30%] flex gap-[10px]">
          <div className='relative'>
            <img src={rp_2} alt="rp_2" className="w-[118px] h-[228px]" />
            <img src={point} alt="point" className="w-[30px] h-[30px]  mx-auto mt-[-4px]" />
            <div className='flex flex-col w-[64px] items-center absolute left-[50%] translate-x-[-50%] top-[38px]'>
              <span className='text-[#ffffff] text-[23px] font-semibold'>Phase</span>
              <span className='text-[#ffffff] text-[50px] font-semibold mt-[-20px]'>2</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-[#ffffff] text-[20px] font-semibold">Q3 2025</div>
            <div className="text-[#ffffff] text-[20px] font-semibold mt-[-10px]">On-Chain & App</div>
            <div className='w-[162px] text-[#cdcdcd] text-[18px] font-light leading-5'>Your chats power an on-chain LLM, NFTs launch, and an app connects you—your community builds a bias-free ally.</div>
          </div>
        </div>
        <div className="absolute top-[-50px] left-[53%] flex gap-[10px]">
          <div className="flex flex-col items-end">
            <div className="text-[#ffffff] text-[20px] font-semibold float-right">Q4 2027</div>
            <div className="text-[#ffffff] text-[20px] font-semibold mt-[-10px] float-right">Modes & 1M Users</div>
            <div className='w-[136px] text-[#cdcdcd] text-[18px] font-light leading-5 float-right'>Your AI adds Calm, Inspire, Connect modes—your DAO scales us to 1M users on TikTok, Twitch, healing your world.</div>
          </div>
          <div className='relative'>
            <img src={rp_3} alt="rp_3" className="w-[118px] h-[228px]" />
            <img src={point} alt="point" className="w-[30px] h-[30px]  mx-auto mt-[-4px]" />
            <div className='flex flex-col w-[64px] items-center absolute left-[50%] translate-x-[-50%] top-[38px]'>
              <span className='text-[#ffffff] text-[23px] font-semibold'>Phase</span>
              <span className='text-[#ffffff] text-[50px] font-semibold mt-[-20px]'>3</span>
            </div>
          </div>

        </div>
        <div className="absolute top-[-220px] right-[5%] flex gap-[10px]">
          <div className='relative'>
            <img src={rp_4} alt="rp_4" className="w-[118px] h-[228px]" />
            <img src={point} alt="point" className="w-[30px] h-[30px]  mx-auto mt-[-4px]" />
            <div className='flex flex-col w-[64px] items-center absolute left-[50%] translate-x-[-50%] top-[38px]'>
              <span className='text-[#ffffff] text-[23px] font-semibold'>Phase</span>
              <span className='text-[#ffffff] text-[50px] font-semibold mt-[-20px]'>4</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-[#ffffff] text-[20px] font-semibold">Q4 2027</div>
            <div className="text-[#ffffff] text-[20px] font-semibold mt-[-10px]">Modes & 1M Users</div>
            <div className='w-[161px] text-[#cdcdcd] text-[18px] font-light leading-5'>Your AI adds Calm, Inspire, Connect modes—your DAO scales us to 1M users on TikTok, Twitch, healing your world.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home8