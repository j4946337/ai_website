import logo from '../assets/images/logo_img.png'
const Logo = () => {
  return (
    <div className="flex items-center gap-2 ml-[7%]">
      <img src={logo} alt="logo" className='w-[24px] h-[20px]' />
      <span className='text-[#ffffff] text-[17px]'>MeAi</span>
    </div>
  )
}
export default Logo;