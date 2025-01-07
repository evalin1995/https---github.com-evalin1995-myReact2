import './App.css';
import { useForm } from 'react-hook-form';

export default function App() {
  // const {一種狀態state定n個表單欄位,一種方法}
  const { register, handleSubmit } = useForm();
  // 建立一字定義的方法,被表單觸發時,將register資料進來
  const onSubmit = (data) => {
    console.log(data);
    console.log(data.userpw);
  }
  return (
    // 最外層
    <>
      <h1>HookForm</h1>
      <hr />
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: 300
      }}>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='username'>使用者名稱</label>
          <input type="text" id="username" defaultValue='demo'
            {...register('userName')} />
          <br /><label htmlFor='userpw'>使用者密碼：</label>
          <input type="password" id="userpw" defaultValue='134'
            {...register('userpw')} />
        </form>
        <button type='submit' style={{width:'50%'}}>送出</button>
      </div>
    </>
  )
}