
// useState最先導入

import { useState } from "react"

export default function App() {
// 單價變數
  const [price,setPrice]= useState(100);
// 數量變數,初始值為1
const [qty,setQty]=useState(1);

const tot=price*qty;

return (
    // 最外層
    <>
      <h1>useMemo介紹</h1>
      <label>單價:<input type="number"  value={price}
      // 事件發生時取值
      onChange={(e)=>setPrice(e.target.value)} /></label><br />
      <label>數量：:<input type="number"  value={qty} onChange={(e)=>setQty(e.target.value)} /></label><br />
      <div>
        總價:{tot}
        </div>
    </>
  )
}