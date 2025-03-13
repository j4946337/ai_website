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
  const [containerWidth, setContainerWidth] = useState(1520) // 设计稿宽度
  const [contentHeight, setContentHeight] = useState(6500) // 初始高度值

  // 计算缩放比例
  const calculateScale = () => {
    if (containerRef.current) {
      const windowWidth = window.innerWidth
      // 计算缩放比例，但设置最小值为0.5，防止内容过小
      const newScale = Math.max(windowWidth / containerWidth, 0.5)
      setScale(newScale)
    }
  }

  // 添加一个函数来计算实际内容高度
  const calculateContentHeight = () => {
    if (containerRef.current) {
      const mainElement = containerRef.current;
      let maxBottom = 0;

      // 获取所有子元素
      const children = mainElement.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const rect = child.getBoundingClientRect();
        const bottom = child.offsetTop + rect.height;
        if (bottom > maxBottom) {
          maxBottom = bottom;
        }
      }

      // 设置容器高度为最大底部位置加上一些额外空间
      return maxBottom - 10; // 添加100px的额外空间
    }
    return 6400; // 如果无法计算，则返回默认高度
  }

  useEffect(() => {
    // 初始化时计算一次
    calculateScale();

    // 监听窗口大小变化
    window.addEventListener('resize', calculateScale);

    // 页面加载完成后计算实际内容高度
    const timer = setTimeout(() => {
      const actualHeight = calculateContentHeight();
      setContentHeight(actualHeight);
    }, 1000); // 延迟1秒，确保所有内容都已加载

    // 清理函数
    return () => {
      window.removeEventListener('resize', calculateScale);
      clearTimeout(timer);
    }
  }, []);

  return (
    <div
      className="scale-container overflow-hidden w-full"
      style={{
        height: `${contentHeight * scale}px` // 直接设置容器高度
      }}
    >
      <main
        ref={containerRef}
        className="origin-top-left"
        style={{
          width: `${containerWidth}px`,
          transform: `scale(${scale})`,
          height: `${contentHeight}px`, // 使用计算的高度
          transformOrigin: 'top left'
        }}
      >
        <img src={home_2} alt="home_2" className='absolute home_2_1 h-[1171px] top-[515px] bg-transparent z-1' />
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
      </main>
    </div>
  )
}

export default App
