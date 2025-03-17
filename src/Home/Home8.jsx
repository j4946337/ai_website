
import point from '../assets/images/Ai_E_8.png'
import rp_1 from '../assets/images/Ai_E_4.png'
import rp_2 from '../assets/images/Ai_E_5.png'
import rp_3 from '../assets/images/Ai_E_6.png'
import rp_4 from '../assets/images/Ai_E_7.png'

const Home8 = () => {
  return (
    <div className="home_8 h-[700px] bg-[#0b0f20] w-full pt-[37px] mt-[-1px]">
      <div className="flex flex-col items-center">
        <div className="text-[#ffffff] text-[34px] leading-[34px] font-semibold text-left">ROADMAP</div>
        <div className="text-[#94a4f2] text-[15px] leading-[15px] font-light text-left">From Your First Chat to Global Impact</div>
      </div>
      <div className='mt-[38px] flex flex-col ml-[54px] gap-[30px] '>
        <div className='flex gap-[13px] relative'>
          <div className='flex flex-col absolute items-center top-[14px] left-[11px]  '>
            <span className='text-[#fff] text-[12px] leading-[12px] font-semibold'>Phase</span>
            <span className='text-[#fff] text-[25px] leading-[25px] font-semibold'>1</span>
          </div>
          <img src={rp_1} alt="" className='w-[54px] h-[103px]' />
          <img src={point} alt="" className=' absolute bottom-[-10px] w-[15px] left-[20px] translate-x-[-4%] h-[15px]' />
          <div className='flex flex-col'>
            <p className='text-[#fff] text-[12px] leading-[12px] font-semibold'>Q2 2025</p>
            <p className='text-[#fff] text-[12px] leading-[12px] font-semibold'>H5 Beta</p>
            <p className='text-[#cdcdcd] text-[11px] leading-[11px] font-light mt-[8px] w-[154px]'>Your H5 prototype launches—customize your AI, earn ME tokens, and shape our companion with your community’s input.</p>
          </div>
        </div>
        <div className='flex gap-[13px] relative'>
          <div className='flex flex-col absolute items-center top-[14px] left-[11px]  '>
            <span className='text-[#fff] text-[12px] leading-[12px] font-semibold'>Phase</span>
            <span className='text-[#fff] text-[25px] leading-[25px] font-semibold'>2</span>
          </div>
          <img src={rp_2} alt="" className='w-[54px] h-[103px]' />
          <img src={point} alt="" className=' absolute bottom-[-10px] w-[15px] left-[20px] translate-x-[-4%] h-[15px]' />
          <div className='flex flex-col'>
            <p className='text-[#fff] text-[12px] leading-[12px] font-semibold'>Q3 2025</p>
            <p className='text-[#fff] text-[12px] leading-[12px] font-semibold'>On-Chain & App</p>
            <p className='text-[#cdcdcd] text-[11px] leading-[11px] font-light mt-[8px] w-[156px]'>Your chats power an on-chain LLM, NFTs launch, and an app connects you—your community builds a bias-free ally.</p>
          </div>
        </div>
        <div className='flex gap-[13px] relative'>
          <div className='flex flex-col absolute items-center top-[14px] left-[11px]  '>
            <span className='text-[#fff] text-[12px] leading-[12px] font-semibold'>Phase</span>
            <span className='text-[#fff] text-[25px] leading-[25px] font-semibold'>3</span>
          </div>
          <img src={rp_3} alt="" className='w-[54px] h-[103px]' />
          <img src={point} alt="" className=' absolute bottom-[-10px] w-[15px] left-[20px] translate-x-[-4%] h-[15px]' />
          <div className='flex flex-col'>
            <p className='text-[#fff] text-[12px] leading-[12px] font-semibold'>Q2 2026</p>
            <p className='text-[#fff] text-[12px] leading-[12px] font-semibold'>Metaverse & Celeb Voices</p>
            <p className='text-[#cdcdcd] text-[11px] leading-[11px] font-light mt-[8px] w-[156px]'>Your Virtual City opens—AR, metaverse, and celebrity voices join, crafted with your community, boosting your bond.</p>
          </div>
        </div>
        <div className='flex gap-[13px] relative'>
          <div className='flex flex-col absolute items-center top-[14px] left-[11px]  '>
            <span className='text-[#fff] text-[12px] leading-[12px] font-semibold'>Phase</span>
            <span className='text-[#fff] text-[25px] leading-[25px] font-semibold'>4</span>
          </div>
          <img src={rp_4} alt="" className='w-[54px] h-[103px]' />
          <img src={point} alt="" className=' absolute bottom-[-10px] w-[15px] left-[20px] translate-x-[-4%] h-[15px]' />
          <div className='flex flex-col'>
            <p className='text-[#fff] text-[12px] leading-[12px] font-semibold'>Q4 2027</p>
            <p className='text-[#fff] text-[12px] leading-[12px] font-semibold'>Modes & 1M Users</p>
            <p className='text-[#cdcdcd] text-[11px] leading-[11px] font-light mt-[8px] w-[157px]'>Your AI adds Calm, Inspire, Connect modes—your DAO scales us to 1M users on TikTok, Twitch, healing your world.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home8