import $ from 'jquery'
import { useEffect } from 'react'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function App() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <>
      <h1 data-aos='zoom-in'>AOS-zoom-in
      </h1>
      <div className="box"
        data-aos='fade-up' data-aos-duration='1000'>
        <code>data-aos='fade-up' </code><br />
        <code>data-aos-duration='1000'</code>
      </div><br />
      <div className="box"
        data-aos='fade-down' 
        data-aos-duration='2000'>
        <p>data-aos='fade-down' 
        </p>
        <p>
        data-aos-duration='500'
        </p>
      </div>
    </>
  )
}