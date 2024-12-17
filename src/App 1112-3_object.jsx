

function App() {
  // 建立物件變數
  const person =

  {
    name: '小李',
    age: 20,
  }

  const { name, age } = person;
  console.log(name, age);
  return (
    <>
      {/* 一般寫法 */}
      <div>姓名:{person.name}</div>
      <div>年齡:{person.age + '歲'} </div>
      <hr />
      <div>{`姓名:${person.name}`} </div>
      <div>{`年齡:${person.age}歲`} </div>
      <hr />
      {/* 物件解構寫法 */}

    </>
  )
}

export default App
