
// 導入外部CSS檔案，檔案名（大小寫）完全相符
import './App.css'
// 新增元件,寫在App之外
function MyComponent(){
  return (
<>
<h2>React</h2>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, architecto? Modi</p>
<p>repellat deleniti eligendi quibusdam debitis, eos sunt optio, odit facere aliquid</p>
  
</> ) 
}


// 盡可能減少App的程式敘述
function App() {  

  const strName='abby';

  return (
  <div>
    {/* 在jsx中使用js變數，前後加大括號{變數名稱} 
    。使用react，程式程序經過壓縮而只有開發者能看到*/}
    <h1 className='myh1' >{strName.toUpperCase()}, 午安</h1>
{/* 屬性中使用變數 */}
<label htmlFor="username">請輸入姓名:</label>
<input type="text" id='username' placeholder={strName} />
    {/* <MyComponent /> */}
  </div>
  )
}
// 元件界定好後，要輸出供其他檔案使用
export default App
