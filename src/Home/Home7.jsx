import chart from '../assets/images/Ai_E_1.png'
import me_imf from '../assets/images/Ai_E_2.png'
const Home7 = () => {
  return (
    <div className="w-full h-auto min-h-[775px] bg-[#0a1650] relative overflow-hidden py-10 mt-[-1px]">
      <img src={me_imf} alt="me_imf" className='absolute h-auto max-h-[670px] z-30 top-[59px] right-0 translate-x-[25%] block' />
      <div className="pt-[85px] px-5 pl-[9%]">
        <div className="text-left">
          <span className="text-[#ffffff] text-[80px] font-semibold">TOKENOMICS</span>
          <span className="text-[#94a4f2] text-[38px] font-light pl-[2%]">Built for You</span>
        </div>
        <div className="mt-[-50px] text-left">
          <span className="text-[#ffffff] text-[108px] font-semibold">1,000,000,000</span>
          <span className="text-[#ff6b4c] text-[44px] pl-[2%]">ME</span>
        </div>
      </div>

      <div className='mt-[100px] flex flex-row m-auto gap-[4%] w-[86%] ml-[9%]'>
        <div className='left_7 flex flex-col gap-[31px] order-1'>
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <div className='w-[28px] h-[28px] bg-[#a1a1a2] rounded-[8px]'></div>
              <div className='text-[#ffffff] text-[24px] font-semibold pl-[14px]'>10%/100M Investors</div>
            </div>
            <div className='text-[#ffffff] text-[22px] font-light pl-[42px]'>Grows your reach.</div>
          </div>
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <div className='w-[28px] h-[28px] bg-[#f9bb00] rounded-[8px]'></div>
              <div className='text-[#ffffff] text-[24px] font-semibold pl-[14px]'>10%/100M Marketing</div>
            </div>
            <div className='text-[#ffffff] text-[22px] font-light pl-[42px]'>Amplifies your voice.</div>
          </div>
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <div className='w-[28px] h-[28px] bg-[#6daa45] rounded-[8px]'></div>
              <div className='text-[#ffffff] text-[24px] font-semibold pl-[14px]'>9%/90M Staking</div>
            </div>
            <div className='text-[#ffffff] text-[22px] font-light pl-[42px]'>Rewards your stake.</div>
          </div>
        </div>

        <div className='middle_7 mx-auto order-2'>
          <img src={chart} alt="chart" className='w-full max-w-[481px] h-auto' />
        </div>

        <div className='right_7 flex flex-col gap-[31px] order-3'>
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <div className='w-[28px] h-[28px] bg-[#ab1fae] rounded-[8px]'></div>
              <div className='text-[#ffffff] text-[24px] font-semibold pl-[14px]'>51%/510M EQ Farming</div>
            </div>
            <div className='text-[#ffffff] text-[22px] font-light pl-[42px]'>You earn for your heartfelt chats.</div>
          </div>
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <div className='w-[28px] h-[28px] bg-[#e77b2f] rounded-[8px]'></div>
              <div className='text-[#ffffff] text-[24px] font-semibold pl-[14px]'>20%/200M Team</div>
            </div>
            <div className='text-[#ffffff] text-[22px] font-light pl-[42px]'>Fuels your vision.</div>
          </div>
          <div className='text-[#ffffff] text-[22px] font-light pl-[42px] w-[304px]'>Fair launch, no pre-mine—your wealth, your way</div>
        </div>
      </div>
    </div>
  )
}

export default Home7