

// 盡可能減少App的程式敘述
function App() {  

// 建立函式方法1
  function sayHi(){
  alert('哈囉!')
};
// 建立函式方法2
const sayHi2 =()=>{
  alert('Hello4')
}
  return (
  <div>
    {/* 事件處理:在html標籤上綁定事件 */}
    {/* 匿名函式,沒有命名函式 */}
    <button onClick={function(){alert('哈囉!')}}>打招呼</button>
    <br />
    <button onClick={
      ()=>{alert('Hello')}}>打招呼2</button>

      {/* 等待被呼叫的函式,函式名稱後面不可加上() */}
      <button onClick={sayHi}>打招呼3</button>
      <button onClick={sayHi2}>打招呼4</button>
  </div>
  )
}

export default App
