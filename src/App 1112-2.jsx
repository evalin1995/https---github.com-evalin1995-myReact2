// 傳遞組件
// 把組件放到另一個組件的內容裡面
// composition(react組合)
// 此方法在不影響組件功能的基礎上,再給組件加入額外的功能

// 建立一新組件
function SecondComponent() {
  return <h1>我是SecondComponent組件</h1>
}

// 子組件
function MyComponent({children}) {
  return <>

<SecondComponent />  {/* 寫法3 */}

    我是Component組件
    {children}
  </>

}

// 父組件
function App() {
  return (
    <>
    {/* 寫法1 */}
      <MyComponent children={<SecondComponent />} />
      
      {/* 寫法2：因為children是react內建的屬性,所以傳送物件時,可以
      不用寫出children屬性 */}
      <MyComponent>
        <SecondComponent />
      </MyComponent>

    </>
  )
}

export default App
