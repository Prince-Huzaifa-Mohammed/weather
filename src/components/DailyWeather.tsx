import React from "react";
import { Daily } from "./styled/Daily";

const DailyWeather: React.FC = () => {
  return (
    <Daily>
      <div>
        <h2>Daily Forecast</h2>
        <div>
          <div>
            <span>04:30 PM</span>
            <img src="./assets/rainy-1.svg" alt="" />
            <p>31 &deg;</p>
          </div>

          <div>
            <span>04:30 PM</span>
            <img src="./assets/rainy-1.svg" alt="" />
            <p>31 &deg;</p>
          </div>

          <div>
            <span>04:30 PM</span>
            <img src="./assets/rainy-1.svg" alt="" />
            <p>31 &deg;</p>
          </div>

          <div>
            <span>04:30 PM</span>
            <img src="./assets/rainy-1.svg" alt="" />
            <p>31 &deg;</p>
          </div>
        </div>
      </div>
    </Daily>
  );
};

export default DailyWeather;
