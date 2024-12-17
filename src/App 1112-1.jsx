
// 子組件props寫法
// function MyComponent(props) {
//   return <>
//     <div>我式子組件</div>
//     <div>{props.a} </div>
//     <div>{props.b} </div>
//   </>

// }

// 子組件使用「物件解構賦值」寫法
function MyComponent({a,b='我是預設',c} ) {
  c();
  return <>
    <div>我式子組件</div>
    <div>{a} </div>
    <div>{b} </div>
    <div></div>
  </>

}

// 父組件
function App() {
  return(
    <>
    {/* callback function回調函式 */}
      <MyComponent a='我是屬性a' 
      // b='我是屬性b' 
      c={()=>{
        console.log('我是方法c')
        // document.write
        }} />
        
      {/* props=properities=屬性
  作用:從父組件傳遞資料到仔組件(由上往下傳遞)
  
  撰寫React時,組件之間需要溝通時(傳遞資料)則可利用props成
   */}
    </>)
}

export default App
