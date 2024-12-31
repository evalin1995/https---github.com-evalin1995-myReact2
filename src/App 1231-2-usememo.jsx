import { useState } from "react";
import { useMemo } from 'react';
import './App.css';

export default function App() {
  const prodData = [
    { id: 1, title: "筆記型電腦", price: 999.99 ,
      imgUrl:'./html/images2/06.jpg'
    },
    { id: 2, title: "智能手機", price: 499.99,
      imgUrl:'./html/images2/05.jpg'
    },
    { id: 3, title: "耳機", price: 199.99 ,
      imgUrl:'./html/images2/08.jpg'
    },
    { id: 4, title: "平板電腦", price: 299.99,
      imgUrl:'./html/images2/04.jpg'
    },
    { id: 5, title: "智慧手錶", price: 149.99 ,
      imgUrl:'./html/images2/09.jpg'
    },
    { id: 6, title: "相機", price: 599.99,
      imgUrl:'./html/images2/03.jpg'
    },
    { id: 7, title: "藍牙揚聲器", price: 89.99,
      imgUrl:'./html/images2/02.jpg'
    },
    { id: 8, title: "顯示器", price: 299.99 ,
      imgUrl:'./html/images2/10.jpg'
    },
    { id: 9, title: "鍵盤", price: 79.99 ,
      imgUrl:'./html/images2/10.jpg'
    },
    { id: 10, title: "滑鼠", price: 29.99,
      imgUrl:'./html/images2/01.jpg'
    }
  ];

  // 建立表格元件
  const ProdTable = ({ filterProds }) => {
    return (
      <table style={{
        width: 600,

      }}>
        <tbody>{
          filterProds.map((prod) => {
            return (
              <tr key={prod.id} style={{

                backgroundColor: '#33372C',
                color: '#FFE5CF',
              }}>
                <td style={{width:'60%'}}><img src={prod.imgUrl} alt="" style={{
                  height:150,objectFit:'cover'
                }} />
                <figcaption>{prod.title}</figcaption></td>
                <td>{prod.price}</td>
              </tr>
            )
          })
        }</tbody>
      </table>
    )
  }
  // 陣列變數,預設為原商品陣列
  const [prods, setProds] = useState(prodData);
  // 排序變數,預設為遞增
  const [asc, setAsc] = useState(true);
  // 搜尋變數
  const [search, setSearch] = useState('');
  const filterProds = useMemo(() => {
    return [...prods]
      .sort((a, b) => {
        return asc ? a.price - b.price : b.price - a.price;
      }      )
      .filter((prod)=>{
        return prod.title.match(search);
      })
  }, [asc, search]);
  return (
    // 最外層
    <main style={{
      fontSize: '1.2rem', color: '#33372C',letterSpacing:'.2rem'
    }}>
      <h1>useMemo搜尋與排序</h1>
      <label htmlFor="">      升降冪 <input 
      type="checkbox" checked={asc} onChange={(e) => setAsc(e.target.checked)} />
      </label>
      <br />
      <label htmlFor="">      搜尋: <input
       type="search" placeholder="請輸入商品名稱"
        checked={search} onChange={(e)=>setSearch(e.target.value)} />
      </label>
      {/* 呼叫表格元件 */}
      <ProdTable filterProds={filterProds} />
    </main>
  )
}