import { useEffect, useState } from "react";

function App() {

  const [inputUserName, setInputUserName] = useState('我是文字方塊');

  const arrCity = ['台北市', '桃園市',
    '新北市', '台中市', '台南市', '高雄'
  ]
  const [selCity, setSelCity] = useState('');

  // 閱讀確認
  const [check, setCheck] = useState(false);

  // 複選:多個河取方塊
  const arrList = ['HTML', 'CSS', 'JS', 'React'];

  const [chkList, setChkList] = useState([]);

  const handleChkList = (e) => {
    // setChkList([...chkList,e.target.value]);
    // 透過其餘運算子保留已選項+目前選項
    // 檢查是否被勾選
    if (e.target.checked) {
      setChkList([...chkList, e.target.value]);
    } else {
      // 否=>從原本被勾選項目中拿掉不要的
      setChkList(
        chkList.filter((list) => {
          return list !== e.target.value;
        }))
    }
  }
  const [drink, setDrink] = useState('');
  const arrList2 = ['美式咖啡', '拿鐵', '紅茶'
  ]

// 選項按鈕
const [q1Ans,setQ1Ans]=useState('');
const [q2Ans,setQ2Ans]=useState('');

// 統計次數
const [ans1Count,setAns1Count]=useState(0);
const [ans2Count,setAns2Count]=useState(0);

const [ans3Count,setAns3Count]=useState(0);

  return (
    <>
      <h1>react-表單</h1>
      <hr />
      <label htmlFor="username">
        使用者名稱</label>
      <input type="text" id="username"
        value={inputUserName}
        onChange={() => {
          setInputUserName(e.target.value)
        }}
      />
      {inputUserName}
      <br />
      <label htmlFor="city">縣市名</label>
      <select name="" id="city"
        value={selCity}
        onChange={(e) => {
          setSelCity(e.target.value);
        }}
      >
        <option value="" disabled>請選擇</option>

        {arrCity.map((city) => {
          return <option value={city} key={city}>{city}</option>
        })}
        {/* <option value="">台北</option>
        <option value="">桃園</option>
        <option value="">新北</option>
        <option value="">台中</option>
        <option value="">台南</option>
        <option value="">高雄</option> */}
      </select>{selCity}
      <br />
      <label htmlFor=""></label>
      <input type="checkbox" id="isCheck"
        value={check}
        onChange={(e) => {
          setCheck(e.target.checked);
        }}
      />{check.toString()}
      {/* 複選 */}
      {
        arrList.map((list) => {
          return <div key={list} >
            <input type="checkbox" id={list} name='like'
              value={list} onChange={handleChkList}
            />
            <label htmlFor={list}>{list}</label>
          </div>
        })
      }
      {/* 
      <input type="checkbox" id="chkList1" name='like' value='HTML' onChange={handleChkList} />
      <label htmlFor="chkList1">HTML</label>
      <input type="checkbox" id="chkList2" name='like' value='CSS' onChange={handleChkList} />
      <label htmlFor="chkList2">CSS</label>
      <input type="checkbox" id="chkList3" name='like' value='JS' onChange={handleChkList} />
      <label htmlFor="chkList3">JS</label> */}
      <br />{chkList}
      <br />
      {/* 選項按鈕 */}
      1.請選擇偏好的飲料
      {
        arrList2.map((list) => {
          return <div>
            <input type="radio" name='prefer' value={list} id={list}
              onChange={(e) => {
                setDrink(e.target.value);
              }} />
            <label htmlFor={list}>{list}</label>
          </div>
        })
      }
      <br />
      你選擇的飲料是:{drink}
    </>
  )
}

export default App
