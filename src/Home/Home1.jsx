import HOME_1 from "../assets/images/home_1_1.png";
import HOME_1_2 from "../assets/images/bg.png";
import HOME_1_2_1 from "../assets/images/Ai_A_11_mbile.png";
import home_2 from '../assets/images/home_2_1.png'

const Home1 = () => {
  return (
    <div className="home_1 w-full bg-[#0a1650] h-[910px] relative mt-[-1px]">
      <img src={HOME_1_2_1} alt="home_1_2" className='absolute top-0 left-0 w-full z-10 ' />

      <div className="absolute top-[307px] left-[50%] translate-x-[-50%] z-50 w-[211px]">
        <p className="text-[#ffffff] text-[28px] leading-[13px] font-semibold mb-[10px]  text-center">
          WELCOME TO
        </p>
        <img src={HOME_1} alt="home_1" className="z-10 mx-auto w-[170px] h-[45px]" />
        <div className="text-[#ffffff] text-[10px] leading-[20px] font-extralight mt-[15px]  text-center text-nowrap ">
          <p className=" text-center text-nowrap">
            Your emotions need a friend. ME AI is your safe
          </p>
          <p className=" text-center text-nowrap">
            space—an AI that listens, learns,and pays you in
          </p>
          <p className="text-center text-nowrap">
            ME tokens. Your journey starts now.
          </p>
        </div>
        <button className="bg-[#ff6b4c] rounded-full w-[98px] h-[31px] text-[#ffffff] text-[14px] font-normal mt-[16px]  mx-[50%] translate-x-[-50%] ">
          Chat Now
        </button>
      </div>
      {/* Page 1_2 */}
      <img src={home_2} alt="home_2" className='absolute home_2_1 top-[480px] w-[80%] z-1' />
      <div className="absolute  top-[657px] left-[104px] z-10">
        <div className="text-[#ffffff] text-[34px] leading-[34px] font-semibold ">
          <span className="block  text-right">THE </span>
          <span className="block  text-right">
            EMOTIONAL
          </span>
          <span className="text-[#3787ff] block  text-right ">
            ABYSS
          </span>
        </div>

        <div className="text-[#95a5f2] font-light text-[17px] leading-[11px] float-right ">
          The Pain Holding You Back
        </div>
        <div className="text-[#cfd5f6] text-[11px] leading-[11px] font-extralight mt-[41px] absolute right-[11px]">
          <p className=" text-right  text-nowrap">
            Loneliness and depression haunt millions,
          </p>
          <p className=" text-right  text-nowrap">
            hitting you—young adults—hardest. Cold AI
          </p>
          <p className="  text-right  text-nowrap">
            steals your words, gives no comfort. Your heart
          </p>
          <p className=" text-right  text-nowrap">
            needs more—ME AI heals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home1;
