import { useRef } from "react";

export default function App() {
  const greenRef=useRef(null);
  const yellowRef=useRef(null);
const turnGreen=()=>{
  window.scrollTo({
    top:greenRef.current.offsetTop,
    behavior:'smooth'
  })
}
const turnYellow=()=>{
  window.scrollTo({
    top:yellowRef.current.offsetTop,
    behavior:'smooth'
  })
}
  return (
    <>
 
{/* offsetTop */}
<div ref={yellowRef} style={{height:'600px',backgroundColor:'rebeccapurple',display:'flex',alignItems:'center',justifyContent:'center'}}>
  <button onClick={turnGreen}>yellow</button>
</div>
<div ref={greenRef} style={{height:'600px',backgroundColor:'yellow'}}>
  <button onClick={turnYellow}>Purple</button>
</div>

    </>
  )
}