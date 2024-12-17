import $ from 'jquery'
import { useEffect } from 'react'
import './App.css'
/*$(function(){})*/


export default function App() {
  useEffect(() => {
    $('.cssAnim1').on('mouseover', function () {
      $(this).addClass('imgScale');
    });
    $('.cssAnim1').on('mouseout', function () {

      $(this).removeClass('imgScale');

    });
    $('#gotop').click(function () {
      $('html,body').animate({ scrollTop: 0 });
    });
    $(window).scroll(function () {
      if (
        $(this).scrollTop() > 200
      ) { $('#gotop').stop().fadeIn(), 1000 } else {
        $('#gotop').stop().fadeOut(), 500
      }
    })
  }, [])
  return (
    <div>
      <h2>在react當中使用jQuery</h2>
      <h3>滑鼠事件:圖片縮放</h3>
      <section className="wrapper">
        <a href="" class="cssAnim1">
          <img src="src\html\image\07yeh-xintong-Cz5nR1hP08w-unsplash.jpg" alt="" />
        </a>
        <a href="" class="cssAnim1">
          <img src="src\html\image\04holly-mandarich-7MrXw_o7Eo4-unsplash.jpg" alt="" />
        </a>
                <a href="" class="cssAnim1">
<img src="src\html\image\07yorgos-ntrahas-ED_CWfEwY9s-unsplash.jpg" alt="" />
        </a>
        </section>
<h3>測試Top鈕有運作</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, iusto inventore illum, repellendus adipisci, eaque possimus optio numquam reiciendis asperiores deleniti modi consequatur amet veniam tenetur culpa facere? Voluptatum sunt modi, quo possimus sint minus? Minus neque, architecto id perspiciatis cumque unde natus libero possimus labore! Quo ut blanditiis numquam laborum, doloribus aut earum doloremque, natus expedita tenetur quas molestiae laboriosam voluptates amet at quae dicta veritatis qui suscipit hic labore perferendis! Beatae, sequi quaerat distinctio voluptate quibusdam tenetur excepturi aut nam inventore blanditiis, reprehenderit dolorem nisi quia sit facere perspiciatis eaque accusantium amet ut neque repudiandae dolore tempore expedita. Quidem quod sapiente neque ipsa fugiat nesciunt, amet veritatis dolor, accusamus laboriosam molestias nobis ea modi mollitia totam nulla illo eius alias hic praesentium incidunt asperiores nostrum consectetur? Sint incidunt nobis ullam est tempore! Nam perferendis aspernatur, nulla eos consequatur ab quis dicta vitae harum error saepe maxime nesciunt sequi. Quae doloribus, nulla ratione, blanditiis beatae animi, sapiente consectetur cupiditate fugit omnis sit itaque doloremque placeat asperiores adipisci culpa consequatur autem. Quos deleniti beatae perferendis amet distinctio, minus deserunt commodi laboriosam ipsa possimus, ipsam cum adipisci mollitia est! Quisquam aut voluptatum iusto blanditiis voluptate praesentium explicabo quos ducimus dolorum magni! Aut esse autem ipsa, atque cumque numquam, minima nisi repudiandae ipsam hic consequuntur! Voluptatibus, facilis ipsum excepturi voluptatem nesciunt odit molestias possimus incidunt quidem itaque molestiae cum? Deleniti in blanditiis commodi dignissimos quidem accusantium sequi rerum explicabo libero? Labore consectetur nam eum animi quis obcaecati neque, qui deleniti pariatur architecto fugit eius. Quos eligendi enim explicabo minima saepe ipsa ad voluptatibus ullam, vitae reprehenderit molestias nostrum distinctio, atque ut voluptatum optio excepturi odio aspernatur placeat, esse sunt? Nesciunt nisi, sint nostrum veritatis in nulla consectetur tempore! Accusantium quis voluptatum alias totam, tenetur quaerat perferendis, illum possimus quia tempore praesentium? Exercitationem repudiandae iusto porro consequatur impedit corrupti molestias dolore laboriosam. Quae nemo harum excepturi ut non beatae nobis sunt nesciunt corrupti eaque adipisci, amet esse animi explicabo, quod atque et veniam dolorum impedit dolorem quibusdam? Recusandae blanditiis, labore, impedit quam dolores tempore cupiditate accusantium odit porro, id quasi. Mollitia blanditiis magni quia culpa modi dolores quibusdam? Blanditiis suscipit nostrum voluptates magni ullam minima sequi dolores, architecto molestiae nemo magnam minus nam eos voluptate perspiciatis porro excepturi laboriosam a nisi earum! Atque accusamus amet, incidunt illum ipsam ad aut quasi mollitia porro quaerat rerum nulla distinctio quas necessitatibus?
      </p>
      <figure id='gotop'>
        <img src="src\html\image\arrow-up.svg" alt="" /></figure>
    </div>
    // <div>
    //   <h2>jQuery</h2>
    //   <button onClick={() => {
    //     console.log($('h2').text())
    //   }}>確認</button>
    // </div>
  )
}