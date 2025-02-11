import { useState } from "react";



function App() {
  // const宣告常數=>不能變動的值
  // React執行中若要改變const值，必須使用useState方法
  // const num=0;
  // 定義useState
  // const[變數名稱,更改變數的方法]=useState(初始值)
  const[num,setNum]=useState(0);

  function btnClick(){
      setNum(num+5);
  }
  return (
    <>
    <h1>React狀態-useState方法</h1>
    <h2>目前值:{num} </h2>
    {/* 事件綁定:呼叫函式 */}
    <button onClick={()=>{
      // 標籤綁定事件需用箭頭函式處理
      // num++;
      setNum(num+1);
    }}>+1</button>

{/* 事件綁定:呼叫函式 */}
    <button onClick={btnClick}>+5</button>
    </>)}
  
export default App
