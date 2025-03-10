import HOME_1 from '../assets/images/home_1_1.png'
import HOME_1_2 from '../assets/images/bg.png'
const Home1 = () => {
  return (
    <div className='home_1 w-full  bg-[#0a1650]  h-[1400px] relative'>
      <img src={HOME_1_2} alt="home_1_2" className='absolute top-0 left-0 w-full z-10' />
      <div className='absolute top-[332px] left-[130px] z-50'>
        <p className='text-[#ffffff] text-6xl font-semibold mb-[10px]'>WELCOME TO</p>
        <img src={HOME_1} alt="home_1" className='z-10' />
        <div className='text-[#ffffff] text-[20px] font-extralight mt-11'>
          <p className=''>Your emotions need a friend. ME AI is</p>
          <p className=''>your safe space—an AI that listens, learns,</p>
          <p className=''>and pays you in ME tokens. Your journey</p>
          <p className=''>starts now.</p>
        </div>
        <button className='bg-[#ff6b4c] rounded-full w-[251px] h-[78px] text-[#ffffff] text-[26px] font-normal mt-[30px]'>Chat Now</button>

      </div>
      <div className='absolute top-[1020px] right-[100px]'>
        <div className='text-[#ffffff] text-[80px] font-semibold'><span>THE EMOTIONAL </span> <span className='text-[#3787ff]'>ABYSS</span></div>
        <div className='text-[#95a5f2] font-light text-[48px] float-right mt-[-27px]'>The Pain Holding You Back</div>
        <div className='text-[#ffffff] text-[24px] font-extralight mt-11 absolute right-0 pt-[57px]'>
          <p className='right-0'>Loneliness and depression haunt millions, hitting you—young</p>
          <p className='right-0 indent-5'>adults—hardest. Cold AI steals your words, gives no comfort.</p>
          <p className='right-0 indent-65'>Your heart needs more—ME AI heals.</p>
        </div>
      </div>
    </div>

  )
}

export default Home1