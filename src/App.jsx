import './App.css'
import { useRef, useState, useEffect } from 'react'
import Header from './Header/Header'
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
  const [containerWidth, setContainerWidth] = useState(320) // 设计稿宽度
  const [contentHeight, setContentHeight] = useState(6386) // 初始高度值

  // 计算缩放比例
  const calculateScale = () => {
    if (containerRef.current) {
      const windowWidth = window.innerWidth
      // 计算缩放比例，但设置最小值为0.5，防止内容过小
      const newScale = Math.max(windowWidth / containerWidth, 0.1)
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
        // 使用 getBoundingClientRect 获取的高度已经考虑了缩放
        // 所以需要除以当前缩放比例得到实际高度
        const bottom = child.offsetTop + (rect.height / scale);
        if (bottom > maxBottom) {
          maxBottom = bottom;
        }
      }

      // 设置容器高度为最大底部位置加上一些额外空间
      return maxBottom; // 增加额外空间到200px
    }
    return 6500; // 如果无法计算，则返回默认高度
  }

  useEffect(() => {
    // 初始化时计算一次
    calculateScale();

    // 监听窗口大小变化
    window.addEventListener('resize', calculateScale);

    // 页面加载完成后计算实际内容高度
    const calculateHeight = () => {
      const actualHeight = calculateContentHeight();
      setContentHeight(actualHeight);
    };

    // 初次加载后计算
    calculateHeight();

    // 设置一个定时器，在所有资源加载完成后再次计算
    const timer = setTimeout(calculateHeight, 1000);

    // 添加窗口大小变化时重新计算高度
    window.addEventListener('resize', calculateHeight);

    // 清理函数
    return () => {
      window.removeEventListener('resize', calculateScale);
      window.removeEventListener('resize', calculateHeight);
      clearTimeout(timer);
    }
  }, [scale]);

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
