import { useEffect, useState } from "react";
import './app.css'
    // JS語法在html結構可執行,而在react框架下, 因為渲染是
    // 後面才執行,所以(監聽事件)必需利用useEffect。
    // 綁定事件與呼叫函式方式則可寫在react中
function App() {
const [count,setCount]=useState(0);

// 用法:everytime after random每一次渲染後執行
useEffect(()=>{
  console.log(1);
  // 取得按鈕
  // 
  let btn2=document.getElementById('btn2');
  btn2.addEventListener('click',()=>{
    let p1b=document.getElementById('p1');
    p1b.style.color='#E3D83F';

  })
});
// useEffect自動帶出結構。用法:excute just one time只執行一次
useEffect(()=>{
  console.log(2);
},[]);
// 用法:當陣列中的依賴條件改變,就會執行
useEffect(()=>{
  console.log(3);
},[count]);

const changecolor=()=>{
  let p1c=document.getElementById('p1');
  p1c.style.color='#B5D83C';
}

  return (
    <>
    {console.log(0)}
<h1>useEffecT</h1>
<hr />
<p id='p1'>一段說明</p>
<button onClick={()=>{
  let p1=document.getElementById('p1');
  p1.style.color='#663399';
}}>變紫色</button>

<button id="btn2">變黃色</button>
<button id="btn3" onClick={changecolor}>變草綠色</button>

    </>
  )
}

export default App
