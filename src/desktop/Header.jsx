import Logo from "./Logo";
import { Link } from "react-router-dom";
import descriptionIcon from "../assets/images/description_45dp_E8EAED_FILL0_wght400_GRAD0_opsz48.svg";
import languageIcon from "../assets/images/language_45dp_E8EAED_FILL0_wght400_GRAD0_opsz48.svg";
import { useState } from "react";

const Header = ({ onLanguageChange }) => {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem('language') || "english"
  );

  const handleLanguageSelect = (language) => {
    setCurrentLanguage(language);
    setShowLanguageMenu(false);
    localStorage.setItem('language', language);
    onLanguageChange(language);
  };

  return (
    <div className="absolute top-0 left-0 right-0 z-50 bg-transparent flex justify-between items-center h-[133px] pr-[30px]">
      <Logo />
      <div className="flex justify-between items-center gap-14 pr-[30px]">
        <ul className="flex justify-start items-center gap-14 text-[#ffffff] text-[26px]">
          {/* <li><a to="/">Heal</a></li>
          <li><a to="/">Earn</a></li>
          <li><a to="/">Battle</a></li>
          <li><a to="/">Doc</a></li>
          <li><a to="/">About</a></li> */}
          <li className="flex items-center gap-2">
            <span>
              <img src={descriptionIcon} alt="litepaper" className="w-[30px] h-[30px] font-medium" />
            </span>
            <span>{currentLanguage === "english" ? "Litepaper" : "白皮書"}</span>
          </li>
          <li className="flex items-center gap-2 relative">
            <span>
              <img src={languageIcon} alt="language" className="w-[30px] h-[30px] font-medium" />
            </span>
            <span onClick={() => setShowLanguageMenu(!showLanguageMenu)} style={{ cursor: 'pointer' }}>
              {currentLanguage === "english" ? "English" : "繁體中文"}
            </span>
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-white ml-1"></div>

            {showLanguageMenu && (
              <div className="absolute top-full left-0 bg-[#1f2131] rounded-md py-2 mt-2">
                <div
                  className="px-4 py-2 hover:bg-[#2a2d42] cursor-pointer text-white"
                  onClick={() => handleLanguageSelect("english")}
                >
                  English
                </div>
                <div
                  className="px-4 py-2 hover:bg-[#2a2d42] cursor-pointer text-white"
                  onClick={() => handleLanguageSelect("t_chinese")}
                >
                  繁體中文
                </div>
              </div>
            )}
          </li>
        </ul>
        <button className="text-white px-4 py-2 rounded-full text-2xl w-36 bg-transparent border border-white">
          App
        </button>
      </div>
    </div>
  );
};

export default Header;
