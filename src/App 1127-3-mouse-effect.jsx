import { useEffect, useState } from "react";

function App() {
useEffect(()=>{
  // 方法二:監聽事件
  const p1=document.getElementById('p1');
    p1.addEventListener('mouseover',()=>{

      p1.style.color='#80C4E9';
      p1.style.fontWeight='bold';
    })
    p1.addEventListener('mouseout',()=>{
      p1.style.color='';
      p1.style.fontWeight='';
    })
    const h1=document.getElementById('h1');
    h1.addEventListener('click',()=>{
      const h1Text=h1.textContent;
      alert(h1Text);
    })
  },[]);
  // 如果p2也要方法二,因為情境相同就不須分開寫useEffect

// const changeColor=()=>{
//   const p1=document.getElementById('p1');
//   p1.style.color='#80C4E9';
//   p1.style.fontWeight='bold';
// }
// const restoreColor=()=>{
//   const p1=document.getElementById('p1');
//   p1.style.color='';
//   p1.style.fontWeight='';
// }

  return (
    <>
    <h1 id='h1'>滑鼠事件</h1>
    <hr />
    <p id="p1"  >變色</p>
    <p id="p2" onMouseOver={()=>{
      // 方法一
      let p2=document.getElementById('p2');
      p2.textContent='哈囉哈囉哈囉哈囉';
    }} onMouseOut={()=>{
      let p2=document.getElementById('p2');
      p2.textContent='變內容';
    }}>變內容</p>
    </>
  )
}

export default App
