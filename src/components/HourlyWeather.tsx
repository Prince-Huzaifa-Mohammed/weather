import { Daily } from "./styled/Daily";
import { WeatherData } from "../Interfaces/weather";
import { fahrenheit } from "../utils/weather";

const HourlyWeather = ({
  weather,
  isCelcius,
}: {
  weather: WeatherData | null;
  isCelcius: boolean;
}) => {
  return (
    <Daily>
      <div>
        <h2>Hourly Forecast</h2>
        <div>
          {weather?.hourlyData.map((hour) => (
            <div key={hour.time}>
              <span>{hour.time}</span>
              <img
                src={`http://openweathermap.org/img/wn/${hour.icon}@2x.png`}
                alt=""
              />
              <p>
                {weather && isCelcius ? hour.temp : fahrenheit(hour.temp)}
                &deg;
              </p>
            </div>
          ))}
        </div>
      </div>
    </Daily>
  );
};

export default HourlyWeather;
