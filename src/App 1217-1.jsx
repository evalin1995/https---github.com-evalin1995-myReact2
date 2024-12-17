import { useState } from "react"
import React, { useRef } from 'react';

export default function App() {
  // const [value,setValue]=useState('');
  // 建立一useRef的變數
  const inputRef = useRef(null);

  console.log('app render..');
  const submitHandler = () => {
    // console.log(value);
    console.log(inputRef);
    
    // 查看資料
    console.log(inputRef.current.value);
    // 查看類型
    console.log(inputRef.current.type);

  }
  return (
    <>
      {/* <input type="text" onChange={(e)=> setValue(e.target.value)} /> */}
      <input type="text" ref={inputRef} />
      <button onClick={submitHandler}>送出</button>
    </>
  )
}