import logo from '../assets/images/logo_img.png'
const Logo = () => {
  return (
    <div className="flex items-center gap-2 ml-[65px]">
      <img src={logo} alt="logo" />
      <span className='text-[#ffffff] text-[45px]'>MeAi</span>
    </div>
  )
}
export default Logo;