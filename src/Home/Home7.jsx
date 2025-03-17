import chart from '../assets/images/Ai_E_1.png'
import me_imf from '../assets/images/Ai_E_2.png'
const Home7 = () => {
  return (
    <div className="w-full h-[560px] bg-[#0a1650] relative overflow-hidden  mt-[-1px]">
      {/* <img src={me_imf} alt="me_imf" className='absolute h-auto max-h-[670px] z-30 top-[59px] right-0 translate-x-[25%] block' /> */}
      <div className="pt-[38px] ">
        <div className="flex flex-col items-center">
          <span className="text-[#ffffff] text-[34px] leading-[34px] font-semibold">TOKENOMICS</span>
          <span className="text-[#94a4f2] text-[17px] leading-[17px] font-light ">Built for You</span>
        </div>
        <div className="mt-[21px] text-center">
          <span className="text-[#ffffff] text-[28px] leading-[28px] font-semibold">1,000,000,000</span>
          <span className="text-[#ff6b4c] text-[11px] leading-[11px]  pl-[2%]">ME</span>
        </div>
      </div>
      <img src={chart} alt="chart" className='w-[210px]  mx-auto mt-[22px]' />
      <p className='text-[#ffffff] text-[11px] leading-[11px] font-light text-center mt-[22px]'>Fair launch, no pre-mine—your wealth, your way</p>
      <div className='mt-[19px] ml-[15%]'>
        <div className='flex w-[183px] gap-[7px]'>
          <div className='w-[14px] h-[14px] bg-[#ab1fae] rounded-[4px]'></div>
          <div className='flex flex-col'>
            <span className='text-[#ffffff] text-[13px] leading-[13px] font-semibold'>51%/510M EQ Farming</span>
            <span className='text-[#ffffff] text-[11px] leading-[11px] font-light'>You earn for your heartfelt chats.</span>
          </div>
        </div>
        <div className='flex w-[183px] gap-[7px] mt-[14px]'>
          <div className='w-[14px] h-[14px] bg-[#e77b2f] rounded-[4px]'></div>
          <div className='flex flex-col'>
            <span className='text-[#ffffff] text-[13px] leading-[13px] font-semibold'>20%/200M Team</span>
            <span className='text-[#ffffff] text-[11px] leading-[11px] font-light'>Fuels your vision.</span>
          </div>
        </div>
        <div className='flex w-[183px] gap-[7px] mt-[14px]'>
          <div className='w-[14px] h-[14px] bg-[#a1a1a2] rounded-[4px]'></div>
          <div className='flex flex-col'>
            <span className='text-[#ffffff] text-[13px] leading-[13px] font-semibold'>10%/100M Investors</span>
            <span className='text-[#ffffff] text-[11px] leading-[11px] font-light'>Grows your reach.</span>
          </div>
        </div>
        <div className='flex w-[183px] gap-[7px] mt-[14px]'>
          <div className='w-[14px] h-[14px] bg-[#f9bb00] rounded-[4px]'></div>
          <div className='flex flex-col'>
            <span className='text-[#ffffff] text-[13px] leading-[13px] font-semibold'>10%/100M Marketing</span>
            <span className='text-[#ffffff] text-[11px] leading-[11px] font-light'>Amplifies your voice.</span>
          </div>
        </div>
        <div className='flex w-[183px] gap-[7px] mt-[14px]'>
          <div className='w-[14px] h-[14px] bg-[#6daa45] rounded-[4px]'></div>
          <div className='flex flex-col'>
            <span className='text-[#ffffff] text-[13px] leading-[13px] font-semibold'>9%/90M Staking</span>
            <span className='text-[#ffffff] text-[11px] leading-[11px] font-light'>Rewards your stake.</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home7