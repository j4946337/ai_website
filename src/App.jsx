import './App.css'
import Header from './Header/Header'
import home_2 from './assets/images/home_2_1.png'
import Home2 from './Home/Home2'
import Home1 from './Home/Home1'
import Home3 from './Home/Home3'
import Home4 from './Home/Home4'
import Home5 from './Home/Home5'
import Home7 from './Home/Home7'
import Home6 from './Home/Home6'
function App() {
  return (
    // <main className="min-w-[1520px]">
    <main className="">
      <img src={home_2} alt="home_2" className='absolute home_2_1  h-[1171px] top-[515px] bg-transparent z-1' />
      <Header />
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      <Home6 />
      <Home7 />
    </main >
  )
}

export default App
