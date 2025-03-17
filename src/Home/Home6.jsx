import me_imf from '../assets/images/Ai_D_11.png'
import me_brain from '../assets/images/Ai_D_8.png'
import me_mobile from '../assets/images/Ai_D_9.png'
import me_cloud from '../assets/images/Ai_D_10.png'
const Home6 = () => {
  return (
    <div className='w-full h-[600px] pt-[10px] bg-[#0a1650] relative overflow-hidden  mt-[-1px]'>
      <img src={me_imf} alt="me_imf" className='w-full absolute bottom-0 left-0 z-0' />
      <div className='mx-auto  w-[268px] px-0 text-center z-[100] relative'>
        <div className='text-[#ffffff] text-[34px] leading-[34px] font-semibold z-[100]'>YOUR TECH EDGE</div>
        <div className='text-[#94a4f2] text-[17px] leading-[17px] font-light z-[100]'>Powering Your Emotional Future</div>
      </div>

      {/* Desktop version */}
      <div className='flex mt-[53px] flex-col gap-[50px]'>
        <div className='w-[260px] h-[95px] bg-[#7edaeb33] rounded-l-[30px] self-end relative'>
          <img src={me_brain} alt="me_brain" className='absolute w-[90px] h-[100px] translate-x-[-40%] translate-y-[-15%]' />
          <div className=' w-[148px] mt-[13px] ml-[66px]'>
            <div className='text-[#ffffff] text-[13px] leading-[13px] font-semibold'>On-Chain LLM</div>
            <div className='text-[#ffffff] text-[11px] leading-[11px] font-light'>
              Your encrypted chats (IPFS/Filecoin) train a bias-free brain—spam-proof with smart parsing.
            </div>
          </div>
        </div>
        <div className='w-[258px] h-[95px] bg-[#7edaeb33] rounded-r-[30px]  mr-[17%] relative'>
          <img src={me_mobile} alt="me_mobile" className='absolute  w-[90px] h-[100px] right-0 bottom-[32px] translate-x-[40%]' />
          <div className='mr-[57px] w-[148px] mt-[25px] float-right'>
            <div className='text-[#ffffff] text-[13px] leading-[13px] font-semibold float-right'>Federated Learning</div>
            <div className='text-[#ffffff] text-[11px] leading-[11px] font-light float-right'>
              Your device (phone or NVIDIA desktop) crafts your AI locally.
            </div>
          </div>
        </div>
        <div className='w-[260px] h-[95px] bg-[#7edaeb33] rounded-l-[30px] self-end relative'>
          <img src={me_cloud} alt="me_cloud" className='absolute w-[90px] h-[100px] translate-x-[-40%] translate-y-[-15%]' />
          <div className=' w-[114px] mt-[20px] ml-[66px]'>
            <div className='text-[#ffffff] text-[13px] leading-[13px] font-semibold'>MCP & OpenAPI</div>
            <div className='text-[#ffffff] text-[11px] leading-[11px] font-light'>
              Your companion roams free—limitless, yours.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home6