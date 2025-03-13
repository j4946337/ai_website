import home_2 from '../assets/images/home_3_1.png'
import Ai_B_2 from '../assets/images/Ai_B_2.png'
import Ai_B_3 from '../assets/images/Ai_B_3.png'
import Ai_B_4 from '../assets/images/Ai_B_4.png'
const Home2 = () => {
  return (
    <div className='home_2 w-full bg-[#0a1650] h-[773px] relative mt-[-1px]'>
      <img src={home_2} alt="" className='absolute right-0 top-0 h-[773px]' />
      <div className='absolute mt-[148px] font-semibold text-[88px] ml-[122px] w-[648px]'>
        <p><span className='text-[#ff6b4c]'>ME</span> <span className='text-[#ff6b4c]'>AI</span> <span className='text-[#ffffff]'>UNVEILED</span></p>
        <div className='grid grid-cols-3 grid-rows-2 gap-x-[75px] w-full grid-flow-col justify-center items-center'>
          <div className='col-span-1 row-span-1'>
            <img src={Ai_B_2} alt="" className='mx-auto' />
          </div>
          <div className='col-span-1 row-span-1 text-center'>
            <p className='text-[24px] text-[#cfd5f6] mt-[-50px]'>COMPANION</p>
          </div>
          <div className='col-span-1 row-span-1 mx-auto'>
            <img src={Ai_B_3} alt="" />
          </div>
          <div className='col-span-1 row-span-1'>
            <p className='text-[24px] text-[#cfd5f6] text-center mt-[-50px]'>RULES</p>
          </div>
          <div className='col-span-1 row-span-1 mx-auto'>
            <img src={Ai_B_4} alt="" />
          </div>
          <div className='col-span-1 row-span-1'>
            <p className='text-[24px] text-[#cfd5f6] text-center mt-[-50px]'>REWARDS</p>
          </div>
        </div>
        <div>
          <p className='text-[24px] text-[#cfd5f6] font-extralight'>ME AI fights for you—a decentralized space where you and your community build the best AI companion on a blockchain LLM. Train-to-Earn gives you ME tokens as you shape your friend across different types (e.g., "Creative Dreamer"), easing your loneliness with a caring, fair partner.</p>
        </div>
      </div>
    </div>
  )
}

export default Home2