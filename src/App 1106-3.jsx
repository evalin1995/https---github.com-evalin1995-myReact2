
function Component() {
  return <h1>React</h1>
}

// 盡可能減少App的程式敘述
function App() {

  // create an array (any types of data) component
  // the value of key property cant repeat in an array
  const listItem = [
    <Component key='0' />,
    <Component key='1' />, <Component key='2' />,
  ]

  const listBooks = [
    { bookName: 'HTML', id: 'book1' },
    { bookName: 'JS', id: 'book2' },
    { bookName: 'Next.js', id: 'book3' },
  ]

  // filter out JS from array
  // 方法1:適用單層及多層判斷
  const filterBooks = listBooks.filter((book) => {
    // if (book.bookName !=='JS'){
    //   return true
    // }

    // 方法2:三元運算子的判斷式，只能用在單層判斷
    // 判斷式？條件成立：條件不成立
    return book.bookName !== 'JS' ? true : false
  })
  return (
    <>
      {/* 使用陣列方法1 */}
      {listItem}
      <hr />
      {/* adapt array method2 => map() => convert one array to another by this way */}
      {
        listBooks.map((book) => {
          // return <div>{book.bookName} </div>
          return <div key={book.id}>{book.bookName} </div>
        })
      }
      <hr />
      {/* print:filter data in an array by filter() */}
      {
        filterBooks.map((book) => {
          return <div key={book.id}>{book.bookName} </div>
        })
      }

    </>)
}

export default App
