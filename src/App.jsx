import './App.css'
import { useRef, useState, useEffect } from 'react'
import Header from './Header/Header'
import home_2 from './assets/images/home_2_1.png'
import Home2 from './Home/Home2'
import Home1 from './Home/Home1'
import Home3 from './Home/Home3'
import Home4 from './Home/Home4'
import Home5 from './Home/Home5'
import Home7 from './Home/Home7'
import Home6 from './Home/Home6'
import Home8 from './Home/Home8'
import Home5_1 from './Home/Home5_1'
function App() {
  const containerRef = useRef(null)
  const [scale, setScale] = useState(1)
  const ScalePage = () => {
    if (containerRef.current) {
      const container = containerRef.current
      const scaleX = window.innerWidth / container.offsetWidth
      console.log(scaleX);
      setScale(scaleX)
    }
  }
  useEffect(() => {
    window.addEventListener('resize', ScalePage)
    ScalePage()
    return () =>
      window.removeEventListener('resize', ScalePage)

  }, [])
  return (
    // <main className="min-w-[1520px]">
    <main ref={containerRef} className="w-screen overflow-auto" style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}>
      <img src={home_2} alt="home_2" className='absolute home_2_1  h-[1171px] top-[515px] bg-transparent z-1' />
      <Header />
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      <Home5_1 />
      <Home6 />
      <Home7 />
      <Home8 />
    </main >
  )
}

export default App
