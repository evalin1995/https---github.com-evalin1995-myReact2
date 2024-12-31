import { createContext, useState } from 'react';
import './App.css';
import { useContext } from 'react';


export default function App() {
  // 見共用環境
const UserContext= createContext({});
// 建立使用者變數
  const [username, setUsername] = useState('demo');
// 建立登入鈕的區域
  const [isLogin, setIsLogin] = useState(false);

  const LoginForm = () => {
    // 從共用區UserContext解構出username
    const {username,setUsername,setIsLogin}= useContext(UserContext);
    return (
      <>
        <label htmlFor="username">使用者名稱</label>
        <input type="text" id="username" placeholder="請輸入名稱"
        value={username}
        onChange={e=> setUsername(e.target.value)} />
        <button type="button"
        onClick={()=>{
          setIsLogin(true)
        }}>登入</button>
      </>
    )
  };
  const Greeting = () => {
    // 從共用區userContext取得username
    const { username } = useContext(UserContext);
    return (
      <div>Hi!{username}</div>
    )
  }
  // 建立第二個username的應用元件
  const ShowName = () => {
    return <div>我是ShowName元件測試,{username}</div>
  }
  return (
    // 最外層
    <>
      <h1>useContext</h1>    <hr />
<UserContext.Provider value={{username,setUsername,setIsLogin}}>
  {isLogin ?<><Greeting /><br /><ShowName/></>:<LoginForm />}
</UserContext.Provider>
    </>
  )
}