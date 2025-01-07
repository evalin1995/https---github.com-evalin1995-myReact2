import { useState } from 'react';
import './App.css';


export default function App() {
  const [search, setSearch] = useState('');
  const formHandleSubmit = (e) => {
    e.preventDefault();
    console.log('使用form submit送出', search)
  }
  // 使用enter送出
  const enterHandleSubmit=(e)=>{
    console.dir(e);
    if(e.key==='Enter'){
    console.log('使用form submit送出', search)

    }
  }
  return (
    // 最外層
    <>
    <section  style={{
        fontSize: '1.4em'
,        display: 'flex', flexDirection:'column',justifyContent: 'flex-end', height: 300
        }}>
      {/* 使用表單送出方式:適用於單一欄位 */}
      <form action="" onSubmit={formHandleSubmit} >
        {/* 搜尋一 */}
        <div><label htmlFor="search1">搜尋
          </label><input type="search" id='search1' name='mySearch' value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      </form>
      {/* 搜尋二:不使用表單送出 */}
      <div ><label htmlFor="search2">搜尋
          </label><input type="search" id='search2' name='mySearch' value={search} onChange={(e) => setSearch(e.target.value)}
          onKeyDown={enterHandleSubmit} />
        </div>
        </section>
    </>
  )
}