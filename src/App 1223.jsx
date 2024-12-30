import img1 from '/images/01.jpg';
import img2 from '/images/02.jpg';
import img3 from '/images/03.jpg';
import img4 from '/images/04.jpg';
// import './App.css';
import { useState } from 'react';

export default function App() {
  const [currentImg, setCurrentImg] = useState(3);
  // 建立圖片陣列
  const imgArr = [img1, img2, img3, img4];
  return (
    <>
      <div className="wrapper"
        style={{
          display: 'flex',
          flexDirection: 'column-reverse',
          justifyContent:'space-evenly',
          width:800,
          height:'80vh',
        }}>
        {/* 縮圖區 */}
        <div className='counter'
          style={{
            // display: 'flex',
            // flex: 1,
            flex:1,
            width:'100%' ,
            border: '2px solid red'
          }}>
          {/* <img src={imgArr[0]} alt="" />
          <img src={imgArr[1]} alt="" />
          <img src={imgArr[2]} alt="" />
          <img src={imgArr[3]} alt="" /> */}
          {imgArr.map((photo, index) => {
            return (
              <img key={index} src={photo} alt=""
                onClick={(e) => setCurrentImg(index)}
                style={{
                  width: '24%',
                  height:'100%',
                  objectFit:'cover'
                }}
              />
            )
          })
          }
        </div>
        {/* 大圖區 */}
        <div className='main'
          style={{
            width:'100%' ,
            flex:3,
            // flex: 4,
            border: '2px solid red'
          }}>
          {/* <img src={imgArr[1]} alt="" /> */}
          <img src={imgArr[currentImg]} alt=""
            style={{
              width: '100%',
              objectFit: 'cover'
            }} />

        </div>
      </div>
    </>
  )
}