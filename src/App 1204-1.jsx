import { useEffect, useState } from "react"
import axios from 'axios';
import { PiCloudRainFill } from "react-icons/pi";
import './App.css'

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
                <h4 className="card-title"  >{city.locationName}</h4>
                <ul className="content">
                  {
                    city.weatherElement[0].time.map((time, index) => {
                      return(
                        <li className="item" key={index}>
                        <h3>2日</h3>
                        {/* 時間 */}
                        <p>
                          {new Date(time.startTime).toLocaleString(undefined, {
                            hour: 'numeric',
                            minute: 'numeric'
                          })}
                          <br /> ~ <br />
                          {new Date(time.endTime).toLocaleString(undefined, {
                            hour: 'numeric',
                            minute: 'numeric'
                          })}</p>
                        {/* 天氣圖 */}
                        <img src="https://cdn-icons-png.flaticon.com/512/1888/1888282.png" alt="" />
                        <img src={`./weatherIcon/${time.parameter.parameterName}.svg`} alt="" />
                        
                        <p>{time.parameter.parameterName}</p>
                        <span><PiCloudRainFill />
                         {city.weatherElement[4].time[index].parameter.parameterName}%</span>
                      </li>
                      )
                    })
                  }

                </ul>
              </div>
            )
          })}</div>
    </div>
  )
}

export default App
