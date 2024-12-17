import './App-1112-test.css'
  // 特色區資料
  const contentData = [
    {
      id: 1,
      title: '教學影音',
      describe: '透過影音課程，來了解軟體的核心及入門並跟著範例練習以了解其中應用情境'
    }, {
      id: 2,
      title: '良性互動',
      describe: '為你打造就算沒有程式基礎，也能夠逐步學習獲得網頁排版技巧的紮實觀念，'
    }, {
      id: 3,
      title: '趨勢分享',
      describe: '人工智慧、虛擬實境等新技術帶來了更多創新的開發和設計可能性，'
    }]

  // 課程區資料
  const lessonData = [
    {
      id: 1,
      imgUrl: ".//react-test1112/images/unity.jpg",
      name: 'Unity 5',
      describe: '本課程為Unity超級入門課程，學習完本課程，學員將可以，',
      teacher: '阿明',
      'video hours': 4,
      original: 1600,
      discount: 1200
    },
    {
      id: 2,
      imgUrl: ".//react-test1112/images/gamesalad.jpg",
      name: 'GameSalad 遊戲製作',
      describe: '可以讓視覺美術設計師與程式開發人員完美融合一體的次世代視覺模組化遊戲APP ',
      teacher: '方方',
      'video hours': 8,
      original: 3200,
      discount: 1600
    },
    {
      id: 3,
      imgUrl: ".//react-test1112/images/gwd.jpg",
      name: 'Google Web Design',
      describe: '利用動畫和互動元素實現創意發想，接著採用回應式和動態工作流程，',
      teacher: '老洪',
      'video hours': 8,
      original: 3200,
      discount: 1600
    }
  ]



function ShowContent({ arrData }) {
  return (
    <>
      {
        arrData.map((item) => {
          return (
            <>
              <li className="feature" key={item.id}>
                <h3>
                  {item.title}
                </h3>
                <p>
                  {item.describe}
                </p>
              </li>
            </>
          )
        }
        )}
    </>
  )
}

function ShowLesson({ arrData2 }) {
  console.log({ arrData2 });
  return (
    <>
      {
        arrData2.map((item) => {
          return (
            <>

              <li key={item.id}>
                <figure>
                  <img src={item.imgUrl} alt="" />
                </figure>
                <div className="content">
                  <h3 className='lesson-name'>
                    {item.name}</h3>
                  <p className='lesson-feature'>
                    {item.describe}
                  </p>
                  <p>講師：{item.teacher}</p>
                  <p>
                    課程時數：{item['video hours']}小時
                  </p>
                </div>
                <div className='price'>
                  <p>
                    <span className='original'>原價NT{item.original}</span>
                    <strong className='discount'>NT${item.discount}</strong>
                  </p>
                </div>
                <button className='btn'>搶先購買</button>
              </li>
            </>
          )

        })
      }
    </>
  )

}
function App() {
  return (
    <>
      {/* <link rel="stylesheet" href="./App.css" /> */}
      <header id='banner'>
        <img src="./react-test1112/images/banner.jpg" alt="" />
      </header>

      <section id='features'>
        <ul>
          <ShowContent arrData={contentData} />
        </ul>

      </section>
      <section id='slogan'>
        <p>讓學習成為一種習慣</p>
      </section>
      {/* listbox */}
      <section id='listbox'>
        <h2>推薦課程</h2>
        <ul>
          {/* <ShowContent arrData2={lessonData} /> */}
          <ShowLesson arrData2={lessonData} />
        </ul></section>
      <footer>
        <p>
          NTUB-classNamework, 02林杰蓉
        </p>
      </footer>
    </>
  )
}

export default App
