import { useEffect } from "react"
import './App.css'
import $ from 'jquery';

export default function App() {
  useEffect(() => {
    // 移入=>mouseover()
    // 移出=>mouseout()
    // 移動=> mousemove()
    // X,Y座標=>pageX、pageY
    // 取得html內容=>html()
    // 淡入=> fadeIn()
    // 淡出=>fadeOut()
    // 速度=>毫秒=>(slow,normal,fast)
    $('a:has(.ttp-show)').mouseover(function (e) {
      $('body').append('<div id="ttp-panel">' + $(this).children('.ttp-show').html() + '</div>')
      $('#ttp-panel').css({
        top: (e.pageY + 10) + 'px',
        left: (e.pageX + 10) + 'px'
      }).fadeIn('fast');
    }).mouseout(function (e) {
      $('#ttp-panel').remove();
    }).mousemove(function (e) {
      $('#ttp-panel').css({
        top: (e.pageY + 20) + 'px',
        left: (e.pageX + 10) + 'px'})
      })
    }, [])
    return (
      <>
        <h2>ToolTip</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur <a href="">adipisicing
            <span className="ttp-show" >adipisicing內容說明</span>
          </a>
          elit. Quae, asperiores aliquam dolores debitis, pariatur ipsum, ipsam mollitia placeat iste perferendis culpa velit modi numquam quo consequatur dolore aspernatur! Quia fuga ut dolores ex quibusdam perspiciatis dolor expedita quaerat, illo vitae quo? Consectetur eligendi qui assumenda doloremque, tenetur aspernatur! Ut voluptatem, eaque ratione temporibus commodi cupiditate? Modi id consequuntur non exercitationem quo veritatis rerum magni labore suscipit perferendis, ut distinctio minus totam inventore eius maxime, ducimus atque accusantium blanditiis vero pariatur culpa? Saepe itaque repellendus ipsa deserunt, a rerum nemo maiores alias aliquam, ad odit nulla neque dolores aliquid. Libero perferendis repellendus id odio expedita illum consectetur tempora iste commodi voluptates nemo eveniet ipsam explicabo recusandae ratione labore animi quos error fugiat aut, soluta sequi harum mollitia. Ipsa dignissimos veniam tenetur tempora modi sed, ullam quos suscipit, ratione enim mollitia? Quidem maiores harum, quis mollitia cum aspernatur iusto iure illum voluptatum quia! Autem ea dolorem sequi repellat similique sit at recusandae quam ut. Quae porro id laboriosam voluptate dolor ratione aliquid quo illo fugit, odio sed non. Fugiat quibusdam hic voluptatem eum architecto aspernatur voluptas rem pariatur commodi quod, inventore ratione numquam! Totam nobis fuga unde omnis, aperiam, impedit facere illo quaerat a, dolorum voluptates enim aliquam. Voluptatem minima maiores eius alias! In fugit praesentium exercitationem earum aut molestias, tempora deleniti at laborum, officiis culpa iste nam nesciunt consequuntur corrupti suscipit et pariatur deserunt ea quo magnam dignissimos ipsa debitis? Quae sequi molestiae sed, quod dicta similique adipisci tempore. Perspiciatis, quaerat, consequatur illum cumque quae quidem sequi voluptas placeat aut libero iste ad inventore ducimus labore dolore! Dolorum temporibus ipsa voluptate voluptas veniam, consequatur, odit possimus sit facilis, minima soluta? Necessitatibus reiciendis impedit, harum minima facere aspernatur recusandae architecto autem doloremque minus officiis inventore. Iure, fuga ducimus fugit asperiores obcaecati quisquam.
        </p>
      </>
    )
  }