import chart from '../assets/images/Ai_E_1.png'
import me_imf from '../assets/images/Ai_E_2.png'
import { motion } from 'framer-motion'
import translations from '../assets/multi_language.json'

const Home7 = ({ currentLanguage }) => {
  const getText = (id) => {
    const translation = translations.find(t => t.id === id);
    return translation ? translation[currentLanguage === 'english' ? 'english' : 't_chinese'] : '';
  };

  return (
    <div className="w-full h-auto min-h-[775px] bg-[#0a1650] relative overflow-hidden py-10 mt-[-1px]">
      <img src={me_imf} alt="me_imf" className='absolute h-auto max-h-[670px] z-30 top-[59px] right-0 translate-x-[25%] block' />
      <div className="pt-[85px] px-5 pl-[9%]">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          className="text-left"
        >
          <span className="text-[#ffffff] text-[80px] font-semibold">{getText(61)}</span>
          <span className="text-[#94a4f2] text-[38px] font-light pl-[2%]">{getText(62)}</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          className="mt-[-50px] text-left"
        >
          <span className="text-[#ffffff] text-[108px] font-semibold">1,000,000,000</span>
          <span className="text-[#ff6b4c] text-[44px] pl-[2%]">VIB</span>
        </motion.div>
      </div>

      <div className='mt-[100px] flex flex-row m-auto gap-[4%] w-[86%] ml-[9%]'>
        <div className='left_7 flex flex-col gap-[31px] order-1'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            className='flex flex-col'
          >
            <div className='flex items-center'>
              <div className='w-[28px] h-[28px] bg-[#a1a1a2] rounded-[8px]'></div>
              <div className='text-[#ffffff] text-[24px] font-semibold pl-[14px]'>{getText(63)}</div>
            </div>
            <div className='text-[#ffffff] text-[22px] font-light pl-[42px]'>{getText(64)}</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.9 }}
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            className='flex flex-col'
          >
            <div className='flex items-center'>
              <div className='w-[28px] h-[28px] bg-[#f9bb00] rounded-[8px]'></div>
              <div className='text-[#ffffff] text-[24px] font-semibold pl-[14px]'>{getText(65)}</div>
            </div>
            <div className='text-[#ffffff] text-[22px] font-light pl-[42px]'>{getText(66)}</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1.4 }}
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            className='flex flex-col'
          >
            <div className='flex items-center'>
              <div className='w-[28px] h-[28px] bg-[#6daa45] rounded-[8px]'></div>
              <div className='text-[#ffffff] text-[24px] font-semibold pl-[14px]'>{getText(67)}</div>
            </div>
            <div className='text-[#ffffff] text-[22px] font-light pl-[42px]'>{getText(68)}</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2, delay: 0.4, type: "spring", bounce: 0.4 }}
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          className='middle_7 mx-auto order-2'
        >
          <img src={chart} alt="chart" className='w-full max-w-[481px] h-auto' />
        </motion.div>

        <div className='right_7 flex flex-col gap-[31px] order-3'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1.9 }}
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            className='flex flex-col'
          >
            <div className='flex items-center'>
              <div className='w-[28px] h-[28px] bg-[#ab1fae] rounded-[8px]'></div>
              <div className='text-[#ffffff] text-[24px] font-semibold pl-[14px]'>{getText(69)}</div>
            </div>
            <div className='text-[#ffffff] text-[22px] font-light pl-[42px]'>{getText(70)}</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 2.4 }}
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            className='flex flex-col'
          >
            <div className='flex items-center'>
              <div className='w-[28px] h-[28px] bg-[#e77b2f] rounded-[8px]'></div>
              <div className='text-[#ffffff] text-[24px] font-semibold pl-[14px]'>{getText(71)}</div>
            </div>
            <div className='text-[#ffffff] text-[22px] font-light pl-[42px]'>{getText(72)}</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 2.9 }}
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            className='text-[#ffffff] text-[22px] font-light pl-[42px] w-[304px]'
          >
            {getText(73)}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home7