import Logo from "./Logo";
import { Link } from "react-router-dom";
import descriptionIcon from "../assets/images/description_45dp_E8EAED_FILL0_wght400_GRAD0_opsz48.svg";
import languageIcon from "../assets/images/language_45dp_E8EAED_FILL0_wght400_GRAD0_opsz48.svg";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 bg-transparent flex justify-between gap-[95px] items-center h-[67px] pr-[20px]">
      <Logo />
      <div className="flex  items-center gap-[15px] ">
        <ul className="flex  items-center gap-[14px]    text-[#ffffff] text-[11px]">
          <li className="flex items-center ">
            <span>
              <img
                src={descriptionIcon}
                alt="litepaper"
                className="w-[11px] h-[13px] font-medium"
              />
            </span>
          </li>
          <li className="flex items-center ">
            <span>
              <img
                src={languageIcon}
                alt="language"
                className="w-[15] h-[15px] font-medium"
              />
            </span>{" "}

          </li>
        </ul>
        <button className=" text-white px-4 py-1 rounded-full text-[11px] w-[59px] h-[27px] bg-transparent border border-white">
          App
        </button>
      </div>
    </div>
  );
};
export default Header;
