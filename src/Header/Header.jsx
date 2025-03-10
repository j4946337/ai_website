import Logo from "./Logo";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 bg-transparent flex justify-between items-center h-[133px] pr-[30px]">
      <Logo />
      <div className="flex justify-between items-center gap-14">
        <ul className="flex justify-start items-center gap-14 text-[#ffffff] text-[26px]">
          <li><a to="/">Heal</a></li>
          <li><a to="/">Earn</a></li>
          <li><a to="/">Battle</a></li>
          <li><a to="/">Doc</a></li>
          <li><a to="/">About</a></li>
        </ul>
        <button className=" text-white px-4 py-2 rounded-full text-2xl w-36 bg-transparent border border-white">
          Login
        </button>
      </div>

    </div>
  )
}
export default Header;
