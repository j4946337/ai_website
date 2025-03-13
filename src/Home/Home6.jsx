import me_imf from '../assets/images/Ai_D_11.png'
import me_brain from '../assets/images/Ai_D_8.png'
import me_mobile from '../assets/images/Ai_D_9.png'
import me_cloud from '../assets/images/Ai_D_10.png'
const Home6 = () => {
  return (
    <div className='w-full h-auto min-h-[775px] bg-[#0a1650] relative overflow-hidden py-10 mt-[-1px]'>
      <img src={me_imf} alt="me_imf" className='w-full absolute bottom-0 left-0' />
      <div className='mx-auto pt-[80px] w-[44%] px-0 text-center'>
        <div className='text-[#ffffff] text-[80px] font-semibold'>YOUR TECH EDGE</div>
        <div className='text-[#94a4f2] text-[38px] font-light mt-[-30px]'>Powering Your Emotional Future</div>
      </div>

      {/* Desktop version */}
      <div className='flex mt-[63px] flex-col gap-[19px]'>
        <div className='w-[56%] h-[121px] bg-[#7edaeb33] rounded-r-full ml-[17%] relative'>
          <img src={me_brain} alt="me_brain" className='absolute translate-x-[-50%]' />
          <div className='ml-[13%] w-[64%] mt-[13px]'>
            <div className='text-[#ffffff] text-[26px] font-semibold'>On-Chain LLM</div>
            <div className='text-[#ffffff] text-[22px] font-light mt-[-10px] leading-7'>
              Your encrypted chats (IPFS/Filecoin) train a bias-free brain—spam-proof with smart parsing.
            </div>
          </div>
        </div>
        <div className='w-[52%] h-[121px] bg-[#7edaeb33] rounded-l-full self-end mr-[17%] relative'>
          <img src={me_mobile} alt="me_mobile" className='absolute right-0 bottom-[-8px] translate-x-[50%]' />
          <div className='mr-[13%] w-[78%] mt-[25px] float-right'>
            <div className='text-[#ffffff] text-[26px] font-semibold float-right'>Federated Learning</div>
            <div className='text-[#ffffff] text-[22px] font-light mt-[-10px] float-right'>
              Your device (phone or NVIDIA desktop) crafts your AI locally.
            </div>
          </div>
        </div>
        <div className='w-[56%] h-[121px] bg-[#7edaeb33] rounded-r-full ml-[17%] relative'>
          <img src={me_cloud} alt="me_cloud" className='absolute translate-x-[-50%]' />
          <div className='ml-[13%] w-[64%] mt-[25px]'>
            <div className='text-[#ffffff] text-[26px] font-semibold'>MCP & OpenAPI</div>
            <div className='text-[#ffffff] text-[22px] font-light mt-[-10px] leading-7'>
              Your companion roams free—limitless, yours.
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className='hidden mt-10 px-4'>
        <div className='bg-[#7edaeb33] rounded-xl p-5 mb-5 relative'>
          <div className='flex items-center mb-2'>
            <img src={me_brain} alt="me_brain" className='w-[40px] h-[40px] mr-3' />
            <div className='text-[#ffffff] text-xl font-semibold'>On-Chain LLM</div>
          </div>
          <div className='text-[#ffffff] text-base font-light'>
            Your encrypted chats (IPFS/Filecoin) train a bias-free brain—spam-proof with smart parsing.
          </div>
        </div>

        <div className='bg-[#7edaeb33] rounded-xl p-5 mb-5 relative'>
          <div className='flex items-center mb-2'>
            <img src={me_mobile} alt="me_mobile" className='w-[40px] h-[40px] mr-3' />
            <div className='text-[#ffffff] text-xl font-semibold'>Federated Learning</div>
          </div>
          <div className='text-[#ffffff] text-base font-light'>
            Your device (phone or NVIDIA desktop) crafts your AI locally.
          </div>
        </div>

        <div className='bg-[#7edaeb33] rounded-xl p-5 mb-5 relative'>
          <div className='flex items-center mb-2'>
            <img src={me_cloud} alt="me_cloud" className='w-[40px] h-[40px] mr-3' />
            <div className='text-[#ffffff] text-xl font-semibold'>MCP & OpenAPI</div>
          </div>
          <div className='text-[#ffffff] text-base font-light'>
            Your companion roams free—limitless, yours.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home6