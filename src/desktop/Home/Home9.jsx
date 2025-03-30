import image1 from '../assets/images/Ai_F_1.png'
import image2 from '../assets/images/Ai_F_2.png'
import image3 from '../assets/images/Ai_F_3.png'
import image4 from '../assets/images/Ai_F_4.png'
import { motion } from 'framer-motion'
import translations from '../assets/multi_language.json'

const Home9 = ({ currentLanguage }) => {
  const getText = (id) => {
    const translation = translations.find(t => t.id === id);
    return translation ? translation[currentLanguage === 'english' ? 'english' : 't_chinese'] : '';
  };

  return (
    <div className="home_8 h-auto min-h-[1000px] bg-[#0b0f20] w-full py-10 pb-[300px] mt-[-1px]">
      <div className="flex flex-col px-4 w-[76%]  mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-[#ffffff] text-[80px] leading-[80px] font-semibold text-left"
        >
          {getText(85)}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-[82%] text-[#cdcdcd] text-[20px] leading-[25px] font-light text-left pt-[42px]"
        >
          {getText(86)}
        </motion.p>
      </div>
      <div className="flex flex-col pt-[39px] w-[75%] mx-auto ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-row relative gap-[6%]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-[314px] w-[214px]"
          >
            <img src={image1} alt="image1" className="max-w-none max-h-none h-[314px] w-[214px] absolute top-[0px] left-[0px]" />
            <p className="text-[#000000] text-[38px] leading-[38px] font-bold text-left absolute top-[50%] left-[50%] translate-x-[-50%]">Soon</p>
            <p className="text-[#000000] text-[16px] leading-[16px] font-light italic text-left absolute top-[65%] left-[50%] translate-x-[-40%] w-[160px]">{getText(91)}</p>
          </motion.div>
          <p className='text-[#cdcdcd] text-[24px] leading-[30px] font-light text-left w-[80%] items-center pt-[118px] border-b-[1px] border-[#e8e8e8]/20'>
            {getText(87)}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-row relative gap-[6%]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-[314px] w-[214px]"
          >
            <img src={image2} alt="image1" className="max-w-none max-h-none h-[314px] w-[214px] absolute top-[0px] left-[0px]" />
            <p className="text-[#000000] text-[38px] leading-[38px] font-bold text-left absolute top-[50%] left-[50%] translate-x-[-50%]">Lya</p>
            <p className="text-[#000000] text-[16px] leading-[16px] font-light italic text-left absolute top-[65%] left-[50%] translate-x-[-40%] w-[140px]">{getText(92)}</p>
          </motion.div>
          <p className='text-[#cdcdcd] text-[24px] leading-[30px] font-light text-left w-[80%] items-center pt-[118px]  border-b-[1px] border-[#e8e8e8]/20'>
            {getText(88)}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-row relative gap-[6%]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-[314px] w-[214px]"
          >
            <img src={image3} alt="image1" className="max-w-none max-h-none h-[314px] w-[214px] absolute top-[0px] left-[0px]" />
            <p className="text-[#000000] text-[38px] leading-[38px] font-bold text-left absolute top-[50%] left-[50%] translate-x-[-50%]">Rovak</p>
            <p className="text-[#000000] text-[16px] leading-[16px] font-light italic text-left absolute top-[65%] left-[50%] translate-x-[-40%] w-[160px]">{getText(93)}</p>
          </motion.div>
          <p className='text-[#cdcdcd] text-[24px] leading-[30px] font-light text-left w-[80%] items-center pt-[118px] border-b-[1px] border-[#e8e8e8]/20'>
            {getText(89)}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-row relative gap-[6%]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-[314px] w-[214px]"
          >
            <img src={image4} alt="image1" className="max-w-none max-h-none h-[314px] w-[214px] absolute top-[0px] left-[0px]" />
            <p className="text-[#000000] text-[38px] leading-[38px] font-bold text-left absolute top-[50%] left-[50%] translate-x-[-50%]">Anita</p>
            <p className="text-[#000000] text-[16px] leading-[16px] font-light italic text-left absolute top-[65%] left-[50%] translate-x-[-40%] w-[160px]">{getText(94)}</p>
          </motion.div>
          <p className='text-[#cdcdcd] text-[24px] leading-[30px] font-light text-left w-[80%] items-center pt-[118px] border-b-[1px] border-[#e8e8e8]/20'>
            {getText(90)}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Home9
