import Logo from "./Logo";
import { Link } from "react-router-dom";
import descriptionIcon from "../assets/images/description_45dp_E8EAED_FILL0_wght400_GRAD0_opsz48.svg";
import languageIcon from "../assets/images/language_45dp_E8EAED_FILL0_wght400_GRAD0_opsz48.svg";
import { useLanguage } from "../context/LanguageContext";
import { useState, useRef, useEffect } from 'react';

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowLanguageMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 z-50 bg-transparent flex justify-between gap-[95px] items-center h-[67px] pr-[20px]">
      <Logo />
      <div className="flex items-center gap-[15px]">
        <ul className="flex items-center gap-[14px] text-[#ffffff] text-[11px]">
          <li className="flex items-center">
            <span>
              <img
                src={descriptionIcon}
                alt="litepaper"
                className="w-[15px] h-[15px] font-medium"
              />
            </span>
          </li>
          <li className="flex items-center relative" ref={menuRef}>
            <span
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className="cursor-pointer"
            >
              <img
                src={languageIcon}
                alt="language"
                className="w-[15px] h-[15px] font-medium"
              />
            </span>
            {showLanguageMenu && (
              <div className="absolute top-[100%] right-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[100px]">
                <button
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${language === 'english' ? 'text-blue-500' : 'text-gray-700'}`}
                  onClick={() => {
                    setLanguage('english');
                    setShowLanguageMenu(false);
                  }}
                >
                  English
                </button>
                <button
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${language === 't_chinese' ? 'text-blue-500' : 'text-gray-700'}`}
                  onClick={() => {
                    setLanguage('t_chinese');
                    setShowLanguageMenu(false);
                  }}
                >
                  繁體中文
                </button>
              </div>
            )}
          </li>
        </ul>
        <button className="text-white px-4 py-1 rounded-full text-[11px] w-[59px] h-[27px] bg-transparent border border-white">
          App
        </button>
      </div>
    </div>
  );
};

export default Header;
