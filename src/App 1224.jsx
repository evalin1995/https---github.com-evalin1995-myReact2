import { useEffect, useState } from "react"
import { SlArrowLeft,SlArrowRight  } from "react-icons/sl";

export default function App() {
  const slides = [
    { url: './images/01.jpg' },
    { url: './images/02.jpg' },
    { url: './images/03.jpg' },
    { url: './images/04.jpg' },
  ]
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  useEffect(() => {
    // 每秒呼叫
    const autoplay = setInterval(() => {
      nextSlide();
    }, 3000);
    // 每3秒後移除autoplay,這樣取得最新的索引編號
    return () => clearInterval(autoplay)
  }, [])
  // 下一張
  const nextSlide = () => {
    // 取得前一張的索引編號,檢查是否為最後一個編號
    // 是=>回第一張
    setCurrentImgIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }
  const prevSlide = () => {
    setCurrentImgIndex((prev) => (prev === 0
      // 是=>跳到最末
      ? slides.length - 1
      // 不是=>前一張
      : prev - 1))
  }
  // 一般return寫法
  // const Arrow = ({ direction, onClick }) => {
  //   return<></>
  // }
// 內部元件:簡短return寫法
  const Arrow = ({ direction, onClick }) => 
    (
    <div style={{
      position: 'absolute',
      top: '50%',
      // color:'white',
      [direction]:'20px',
      
    }}>
      {
        direction === 'left' ? (
          <SlArrowLeft size={80} onClick={onClick} cursor={'pointer'} />
        ) : (<SlArrowRight size={80} onClick={onClick} />)
      }
    </div>
  )
  return (
    <>
      {/* 外層 */}
      <div className="wrapper"
        style={{
          width: '100%',
          height: '100vh',
        }}>
        {/* 背景 */}
        <div style={{
          backgroundImage: `url(${slides[currentImgIndex].url})`,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: '50% 75%'
        }}>
          {/* 上一張  */}
          <Arrow direction='left' onClick={prevSlide} />
          <Arrow direction='right' onClick= {nextSlide}/>

        </div>
      </div>

    </>
  )
}