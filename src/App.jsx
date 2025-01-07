import { useEffect, useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function App() {
  // 驗證是否連上unsplash
  // https://api.unsplash.com/search/photos/?client_id=請輸入自己的Access Key
  // https://api.unsplash.com/photos/?client_id=請輸入自己的Access_Key

  const api = 'https://api.unsplash.com/search/photos/';
  const accessKey = 'ghL-4jOsPmP8yLl2pUT-_8mHFuaN6ZZ5IRrBRYWWTqA'
  const [filterString, setFilterString] = useState('cafe');
  const [jsonData,setJsonData]=useState([]);
  
  //  建立非同步方法,取得遠端資料
  //  避免重新渲染,所有寫在useEffect
  useEffect(() => {
    const getPhotos = async () => {
      console.log(`${api}?client_id=${accessKey}&query=curry`);
      // 發出請求給遠端api,並傳回結果
      const result = await axios.get(`${api}?client_id=${accessKey}&query=curry`);
      console.log(result);
      setJsonData((preData)=>{
        return [...preData,...result.data.results];
      })
    }
    getPhotos();
  }, [])
  
  return (
    // 最外層
    <>
      <div>api</div>
      <div style={{
        width:600
      }}>
        <label htmlFor=""></label><input type="text" />
        <ul className='masonry' style={{
          display:'flex',border:'2px solid blue',flexWrap:'wrap'
        }}>
          <li>Photo1<img src="" alt="" /></li>
          <li>Photo2<img src="" alt="" /></li>
          <li>Photo3<img src="" alt="" /></li>
        </ul>
      </div>
      {/* div>label+input+ul>(li{Photo$}>img)*3 */}
    </>
  )
}