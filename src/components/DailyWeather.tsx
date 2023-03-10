import React from "react";
import { Daily } from "./styled/Daily";
import { WeatherData } from "../Interfaces/weather";
import { fahrenheit } from "../utils/weather";

const DailyWeather = ({
  weather,
  isCelcius,
}: {
  weather: WeatherData | null;
  isCelcius: boolean;
}) => {
  // http://openweathermap.org/img/wn/10d@2x.png

  return (
    <Daily>
      <div>
        <h2>Daily Forecast</h2>
        <div>
          {weather?.dailyData.map((day) => (
            <div key={day.day}>
              <span>{day.day}</span>
              <img
                src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
                alt=""
              />
              <p>
                {weather && isCelcius ? day.temp : fahrenheit(day.temp)} &deg;
              </p>
            </div>
          ))}
        </div>
      </div>
    </Daily>
  );
};

export default DailyWeather;
