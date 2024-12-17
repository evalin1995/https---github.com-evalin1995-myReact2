import { useState } from "react"

function App() {
  // 定義變數name
  const [name, setName] = useState('');
const[name2,setName2]=useState('');

  function changeName(e){
    console.log(e.target);
    setName2(e.target.value);
  }
  return (
    <>

      <h2>設計一個輸入名字的欄位</h2>
      <hr />
      <form action="">
        <h3>目前文字方塊的內容:{name}</h3>

        <label htmlFor="#name" >姓名：
        </label>
        <input type="text" id='name'
          // e=>event事件參數
          placeholder='請填入姓名' onChange={(e) => {
            console.log(e)
            setName(e.target.value);
          }} >
        </input>
        <br />
        <label htmlFor="">姓名2:</label>
        <br />
        <input type="text" value={name2} onChange={changeName} ></input>{name2}
        <button>清空內容</button>
      </form>
    </>
  )
}

export default App
