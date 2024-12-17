

function App() {
  // 建立物件變數
  // const person =
  // {
  //   s1: {
  //     name: '小李',
  //     age: 20,
  //   },
  //   s2: {
  //     name: '阿方',
  //     age: 33,
  //   },
  //   s3: {
  //     name: '大明',
  //     age: 43,
  //   }
  // }


  // 多筆資料的物件解構寫法:一般
  // const { s1, s2, s3 } = person;

    // 多筆資料的物件解構寫法:解構+展開..(其餘運算子)
    // 解構s1,展開s2,s4
// const {s1,...other}=person;
// console.log(s1);
// console.log(other.s3);
const person={
  name: '大明',
  age: 43,
}

// 一般寫法
/* function showName(obj){
  console.log(obj.name);
  console.log(obj.age);
}
*/
// 將物件屬性直接解構給函式參數
function showName({name,age}){
  console.log(name);
  console.log(age);
}
showName(person);

  return (
    <>
    {/* <div>同學1:{s1.name}</div>
    <div>同學3:{other.s3.name}</div> */}
      {/* 
      <div>第一位姓名:{s1.name}</div>
      <div>第一位年齡:{s1.age}歲</div>
      <hr />

      <div>第2位姓名:{s2.name}</div>
      <div>{`第2位年齡:${s2.age}歲`} </div>
      <hr />

      <div>第一位姓名:{s3.name}</div>
      <div>{`第一位年齡:${s3.age}歲`} </div> */}
      <hr />
    </>
  )
}

export default App
