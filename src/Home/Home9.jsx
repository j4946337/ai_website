import team1 from '../assets/images/Ai_F_1.png'
import team2 from '../assets/images/Ai_F_2.png'
import team3 from '../assets/images/Ai_F_3.png'
import team4 from '../assets/images/Ai_F_4.png'


const Home9 = () => {
  return <div className="home_9 h-[870px] bg-[#0b0f20] w-full pt-[37px] mt-[-1px]">
    <div className="flex flex-col items-center">
      <div className="text-[#ffffff] text-[40px] leading-[40px] w-[77%] font-semibold text-center">
        MEET THE VIBELY TEAM
      </div>
      <div className="text-[#cdcdcd] text-[10px] leading-[10px] w-[77%] font-light text-left mx-auto ">
        Meet the dedicated professionals building Vibely, your platform for empathetic AI companionship. With expertise in Web3, gaming, and operations, they’re here to ensure your emotional journey is seamless, rewarding, and deeply connected—let’s create something meaningful together!
      </div>
    </div>
    {/* Soon */}
    <div className="flex flex-col items-center w-[76%] mt-[33px] mx-auto gap-[12px]">
      <div className="flex flex-row items-cente gap-[27px] h-[151px] border-b border-[#e8e8e8]/20 ">
        <div className="relative w-[89px] h-[126px]">
          <img src={team1} alt="team1" className=" max-w-none max-h-[126px]" />
          <p className="text-[#000] text-[15px] leading-[10px]  font-bold text-center absolute left-[50%] translate-x-[-50%] top-[53%]">Soon</p>
          <p className='text-[#000] w-[57px] text-[7px] leading-[7px]  font-light italic text-left absolute left-[50%] translate-x-[-50%] top-[65%]'>"Shaping Your Emotional Future"</p>
        </div>
        <p className='text-[#cdcdcd] text-[9px] leading-[11px] w-[136px] font-light text-left pt-1'>
          Our visionary,  brings over a decade of experience in Web3 innovation and emotional tech, having launched multiple projects that soared to Binance listings in his previous ventures. His leadership drives Vibely’s mission to revolutionize emotional health through AI, guiding your journey with cutting-edge solutions to ease your loneliness and foster meaningful connections.
        </p>
      </div>
      {/* Lya */}
      <div className="flex flex-row items-cente gap-[27px] h-[151px] border-b border-[#e8e8e8]/20 ">
        <div className="relative w-[89px] h-[126px]">
          <img src={team2} alt="team2" className=" max-w-none max-h-[126px]" />
          <p className="text-[#000] text-[15px] leading-[10px]  font-bold text-center absolute left-[50%] translate-x-[-50%] top-[53%]">Lya</p>
          <p className='text-[#000] w-[57px] text-[7px] leading-[7px]  font-light italic text-left absolute left-[50%] translate-x-[-50%] top-[65%]'>"Building Your Connected Community"</p>
        </div>
        <p className='text-[#cdcdcd] text-[9px] leading-[11px] w-[136px] font-light text-left pt-1'>
          Brings 7 years of expertise in the Web3 industry, with a proven track record of leading successful DeFi and GameFi projects to prominence. Her strategic insight in Web3 fundraising fuels Vibely’s growth, ensuring your emotional connections thrive within a vibrant, community-driven ecosystem.
        </p>
      </div>
      {/* RovaK */}
      <div className="flex flex-row items-cente gap-[27px] h-[151px] border-b border-[#e8e8e8]/20 ">
        <div className="relative w-[89px] h-[126px]">
          <img src={team3} alt="team3" className=" max-w-none max-h-[126px]" />
          <p className="text-[#000] text-[15px] leading-[10px]  font-bold text-center absolute left-[50%] translate-x-[-50%] top-[53%]">Rovak</p>
          <p className='text-[#000] w-[57px] text-[7px] leading-[7px]  font-light italic text-left absolute left-[50%] translate-x-[-50%] top-[65%]'>"Crafting Your Seamless Companion"</p>
        </div>
        <p className='text-[#cdcdcd] text-[9px] leading-[11px] w-[136px] font-light text-left pt-1'>
          A 2017 Tron Hackathon winner, single-handedly developed tronscan.org and a leading DEX on TRON, among other impactful projects. As a full-stack developer with a knack for mastering new technologies, he builds the seamless systems that bring your Vibely companion to life with precision and care.
        </p>
      </div>
      {/*Anita*/}
      <div className="flex flex-row items-cente gap-[27px] h-[151px]  ">
        <div className="relative w-[89px] h-[126px]">
          <img src={team4} alt="team4" className=" max-w-none max-h-[126px]" />
          <p className="text-[#000] text-[15px] leading-[10px]  font-bold text-center absolute left-[50%] translate-x-[-50%] top-[53%]">Anita</p>
          <p className='text-[#000] w-[57px] text-[7px] leading-[7px]  font-light italic text-left absolute left-[50%] translate-x-[-50%] top-[65%]'>"Nurturing Your Vibely Family"</p>
        </div>
        <p className='text-[#cdcdcd] text-[9px] leading-[11px] w-[136px] font-light text-left pt-1'>
          Brings a wealth of experience as our operations manager, having played a pivotal role in previous projects that achieved successful Binance listings. With deep expertise in operations, social media, and community management, she ensures your Vibely experience is smooth and supportive, fostering a community where your voice truly matters.
        </p>
      </div>
    </div>


  </div>
};

export default Home9;

