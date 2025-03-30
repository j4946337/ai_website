import roadmap from '../assets/images/roadmap.png'
import point from '../assets/images/Ai_E_8.png'
import rp_1 from '../assets/images/Ai_E_4.png'
import rp_2 from '../assets/images/Ai_E_5.png'
import rp_3 from '../assets/images/Ai_E_6.png'
import rp_4 from '../assets/images/Ai_E_7.png'
import { motion } from 'framer-motion'
import translations from '../assets/multi_language.json'

const Home8 = ({ currentLanguage }) => {
  const getText = (id) => {
    const translation = translations.find(t => t.id === id);
    return translation ? translation[currentLanguage === 'english' ? 'english' : 't_chinese'] : '';
  };

  return (
    <div className="home_8 h-auto min-h-[900px] bg-[#0b0f20] w-full py-10 mt-[-1px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        className="flex flex-col px-4 pl-[9%]"
      >
        <div className="text-[#ffffff] text-[80px] font-semibold text-left">{getText(74)}</div>
        <div className="text-[#94a4f2] text-[26px] font-light mt-[-10px] text-left">{getText(75)}</div>
      </motion.div>

      {/* Desktop version */}
      <div className="block mt-[150px] relative">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          src={roadmap}
          alt="roadmap"
          className="w-full bg-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          className="absolute top-[17%] left-[5%] flex gap-[10px]"
        >
          <motion.div
            className='relative'
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.2, type: "spring", bounce: 0.4 }}
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          >
            <img
              src={rp_1}
              alt="rp_1"
              className="w-[118px] h-[228px]"
            />
            <img
              src={point}
              alt="point"
              className="w-[30px] h-[30px] mx-auto mt-[-4px]"
            />
            <div className='flex flex-col w-[64px] items-center absolute left-[50%] translate-x-[-50%] top-[38px]'>
              <span className='text-[#ffffff] text-[23px] font-semibold'>{getText(76)}</span>
              <span className='text-[#ffffff] text-[50px] font-semibold mt-[-20px]'>1</span>
            </div>
          </motion.div>
          <div className="flex flex-col">
            <div className="text-[#ffffff] text-[20px] font-semibold">{getText(77)}</div>
            <div className='w-[175px] text-[#cdcdcd] text-[18px] font-light leading-5'>{getText(78)}</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          className="absolute top-[26px] left-[28%] flex gap-[10px]"
        >
          <motion.div
            className='relative'
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.4, type: "spring", bounce: 0.4 }}
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          >
            <img
              src={rp_2}
              alt="rp_2"
              className="w-[118px] h-[228px]"
            />
            <img
              src={point}
              alt="point"
              className="w-[30px] h-[30px] mx-auto mt-[-4px]"
            />
            <div className='flex flex-col w-[64px] items-center absolute left-[50%] translate-x-[-50%] top-[38px]'>
              <span className='text-[#ffffff] text-[23px] font-semibold'>{getText(76)}</span>
              <span className='text-[#ffffff] text-[50px] font-semibold mt-[-20px]'>2</span>
            </div>
          </motion.div>
          <div className="flex flex-col">
            <div className="text-[#ffffff] text-[20px] font-semibold">{getText(79)}</div>
            <div className='w-[162px] text-[#cdcdcd] text-[18px] font-light leading-5'>{getText(80)}</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          className="absolute top-[-50px] left-[42%] flex gap-[10px]"
        >
          <div className="flex flex-col items-end">
            <div className="text-[#ffffff] text-[20px] font-semibold float-right">{getText(81)}</div>
            <div className='w-[136px] text-[#cdcdcd] text-[18px] font-light leading-5 text-right'>{getText(82)}</div>
          </div>
          <motion.div
            className='relative'
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.6, type: "spring", bounce: 0.4 }}
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          >
            <img
              src={rp_3}
              alt="rp_3"
              className="w-[118px] h-[228px]"
            />
            <img
              src={point}
              alt="point"
              className="w-[30px] h-[30px] mx-auto mt-[-4px]"
            />
            <div className='flex flex-col w-[64px] items-center absolute left-[50%] translate-x-[-50%] top-[38px]'>
              <span className='text-[#ffffff] text-[23px] font-semibold'>{getText(76)}</span>
              <span className='text-[#ffffff] text-[50px] font-semibold mt-[-20px]'>3</span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          className="absolute top-[-215px] right-[2%] flex gap-[10px]"
        >
          <motion.div
            className='relative'
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.8, type: "spring", bounce: 0.4 }}
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          >
            <img
              src={rp_4}
              alt="rp_4"
              className="w-[118px] h-[228px]"
            />
            <img
              src={point}
              alt="point"
              className="w-[30px] h-[30px] mx-auto mt-[-4px]"
            />
            <div className='flex flex-col w-[64px] items-center absolute left-[50%] translate-x-[-50%] top-[38px]'>
              <span className='text-[#ffffff] text-[23px] font-semibold'>{getText(76)}</span>
              <span className='text-[#ffffff] text-[50px] font-semibold mt-[-20px]'>4</span>
            </div>
          </motion.div>
          <div className="flex flex-col">
            <div className="text-[#ffffff] text-[20px] font-semibold">{getText(83)}</div>
            <div className='w-[161px] text-[#cdcdcd] text-[18px] font-light leading-5'>{getText(84)}</div>
          </div>
        </motion.div>
      </div>

      {/* Mobile version */}
      <div className="hidden mt-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          className="flex flex-col items-center mb-10"
        >
          <div className="relative mb-4">
            <img src={rp_1} alt="rp_1" className="w-[80px] h-auto" />
            <div className="absolute top-[30px] left-[50%] transform -translate-x-1/2 text-center">
              <span className='text-[#ffffff] text-lg font-semibold'>{getText(76)}</span>
              <span className='text-[#ffffff] text-3xl font-semibold block mt-[-5px]'>1</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-[#ffffff] text-lg font-semibold">{getText(77)}</div>
            <div className='text-[#cdcdcd] text-base font-light mt-2'>{getText(78)}</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          className="flex flex-col items-center mb-10"
        >
          <div className="relative mb-4">
            <img src={rp_2} alt="rp_2" className="w-[80px] h-auto" />
            <div className="absolute top-[30px] left-[50%] transform -translate-x-1/2 text-center">
              <span className='text-[#ffffff] text-lg font-semibold'>{getText(76)}</span>
              <span className='text-[#ffffff] text-3xl font-semibold block mt-[-5px]'>2</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-[#ffffff] text-lg font-semibold">{getText(79)}</div>
            <div className='text-[#cdcdcd] text-base font-light mt-2'>{getText(80)}</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          className="flex flex-col items-center mb-10"
        >
          <div className="relative mb-4">
            <img src={rp_3} alt="rp_3" className="w-[80px] h-auto" />
            <div className="absolute top-[30px] left-[50%] transform -translate-x-1/2 text-center">
              <span className='text-[#ffffff] text-lg font-semibold'>{getText(76)}</span>
              <span className='text-[#ffffff] text-3xl font-semibold block mt-[-5px]'>3</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-[#ffffff] text-lg font-semibold">{getText(81)}</div>
            <div className='text-[#cdcdcd] text-base font-light mt-2'>{getText(82)}</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.8 }}
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          className="flex flex-col items-center mb-10"
        >
          <div className="relative mb-4">
            <img src={rp_4} alt="rp_4" className="w-[80px] h-auto" />
            <div className="absolute top-[30px] left-[50%] transform -translate-x-1/2 text-center">
              <span className='text-[#ffffff] text-lg font-semibold'>{getText(76)}</span>
              <span className='text-[#ffffff] text-3xl font-semibold block mt-[-5px]'>4</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-[#ffffff] text-lg font-semibold">{getText(83)}</div>
            <div className='text-[#cdcdcd] text-base font-light mt-2'>{getText(84)}</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home8