import { PiCloudRainFill } from "react-icons/pi";

// function  ShowWeather(){
//     return <div>456</div>
// }
export default function ShowWeather({ city }) {
    return (
        <ul className="content">
            {
                city.weatherElement[0].time.map((time, index) => {
                    return (
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
    )
}