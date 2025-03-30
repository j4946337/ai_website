import me_imf from '../assets/images/Ai_D_11.png'
import me_brain from '../assets/images/Ai_D_8.png'
import me_mobile from '../assets/images/Ai_D_9.png'
import me_cloud from '../assets/images/Ai_D_10.png'
import { motion } from 'framer-motion'
import translations from '../assets/multi_language.json'

const Home6 = ({ currentLanguage }) => {
  const getText = (id) => {
    const translation = translations.find(t => t.id === id);
    return translation ? translation[currentLanguage === 'english' ? 'english' : 't_chinese'] : '';
  };

  return (
    <div className='w-full h-auto min-h-[760px] bg-[#0a1650] relative overflow-hidden pt-10  mt-[-1px]'>
      <img src={me_imf} alt="me_imf" className='w-full absolute bottom-0 left-0 z-0' />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        className='mx-auto pt-[80px] w-[44%] px-0 text-center z-[100] relative'
      >
        <div className='text-[#ffffff] text-[80px] font-semibold z-[100]'>{getText(53)}</div>
        <div className='text-[#94a4f2] text-[38px] font-light mt-[-30px] z-[100]'>{getText(54)}</div>
      </motion.div>

      {/* Desktop version */}
      <div className='flex mt-[63px] flex-col gap-[19px]'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          className='w-[56%] h-[121px] bg-[#7edaeb33] rounded-r-full ml-[17%] relative'
        >
          <img src={me_brain} alt="me_brain" className='absolute translate-x-[-50%] translate-y-[-12%]' />
          <div className='ml-[13%] w-[64%] mt-[13px]'>
            <div className='text-[#ffffff] text-[26px] font-semibold'>{getText(55)}</div>
            <div className='text-[#ffffff] text-[22px] font-light mt-[-10px] leading-7'>
              {getText(56)}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          className='w-[52%] h-[121px] bg-[#7edaeb33] rounded-l-full self-end mr-[17%] relative'
        >
          <img src={me_mobile} alt="me_mobile" className='absolute right-0 bottom-[-8px] translate-x-[50%]' />
          <div className='mr-[13%] w-[78%] mt-[25px] float-right'>
            <div className='text-[#ffffff] text-[26px] font-semibold float-right'>{getText(57)}</div>
            <div className={`text-[#ffffff] text-[22px] font-light mt-[-10px] float-right ${currentLanguage !== 'english' ? 'absolute top-[70px] right-[80px] text-right' : 'mt-[-10px] leading-7'}`}>
              {getText(58)}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          className='w-[56%] h-[121px] bg-[#7edaeb33] rounded-r-full ml-[17%] relative'
        >
          <img src={me_cloud} alt="me_cloud" className='absolute translate-x-[-50%] translate-y-[-15%]' />
          <div className='ml-[13%] w-[64%] mt-[25px]'>
            <div className='text-[#ffffff] text-[26px] font-semibold'>{getText(59)}</div>
            <div className='text-[#ffffff] text-[22px] font-light mt-[-10px] leading-7'>
              {getText(60)}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile version */}
      <div className='hidden mt-10 px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          className='bg-[#7edaeb33] rounded-xl p-5 mb-5 relative'
        >
          <div className='flex items-center mb-2'>
            <img src={me_brain} alt="me_brain" className='w-[40px] h-[40px] mr-3' />
            <div className='text-[#ffffff] text-xl font-semibold'>{getText(55)}</div>
          </div>
          <div className='text-[#ffffff] text-base font-light'>
            {getText(56)}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          className='bg-[#7edaeb33] rounded-xl p-5 mb-5 relative'
        >
          <div className='flex items-center mb-2'>
            <img src={me_mobile} alt="me_mobile" className='w-[40px] h-[40px] mr-3' />
            <div className='text-[#ffffff] text-xl font-semibold'>{getText(57)}</div>
          </div>
          <div className='text-[#ffffff] text-base font-light'>
            {getText(58)}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          className='bg-[#7edaeb33] rounded-xl p-5 mb-5 relative'
        >
          <div className='flex items-center mb-2'>
            <img src={me_cloud} alt="me_cloud" className='w-[40px] h-[40px] mr-3' />
            <div className='text-[#ffffff] text-xl font-semibold'>{getText(59)}</div>
          </div>
          <div className='text-[#ffffff] text-base font-light'>
            {getText(60)}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home6