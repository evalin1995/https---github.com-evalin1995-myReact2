import { useEffect, useState } from "react"
import axios from 'axios';
import './App.css'
import ShowWeather from "./ShowWeather";

function App() {
  const [weatherList, setWeatherList] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await axios.get(
        'https://coffeeteacher.github.io/weather/F-C0032-001.json'
        // 'https://github.com/evalin1995/myReact/blob/d6f31989e302b931995168eccf0ba052634a7683/json/F-C0032-001.json'
      );

      const { location } = data.data.cwaopendata.dataset;
      setWeatherList(location);
      console.log(location);
    })()
  }, [])
  return (
    <div className="wrap">
      <h2>36小時天氣預報</h2>
      <div className="container">
        {
          weatherList.map((city) => {
            return (
              <div className="card" key={city.locationName}>
                <h3 className="card-title"  >{city.locationName}</h3>

                <ShowWeather city={city} />
              </div>
            )
          })}</div>
    </div>
  )
}

export default App
