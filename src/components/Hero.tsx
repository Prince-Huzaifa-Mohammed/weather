import { CgCompress } from "react-icons/cg";
import {
  FaEye,
  FaTemperatureLow,
  FaThermometerFull,
  FaWind,
} from "react-icons/fa";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdWaterDrop } from "react-icons/md";
import { StyledHero } from "./styled/StyledHero";

const Hero = () => {
  return (
    <StyledHero>
      <div>
        <h2>Tuesday, 17 February 2023 | Local time: 03:59 PM</h2>
        <div>
          <h1>
            <span>Accra, </span> <span>Ghana</span>
          </h1>
          <article>
            <h5>59 &deg;</h5> <h5>Clear</h5>
          </article>

          <section>
            <div>
              <div>
                <div>
                  <MdWaterDrop />
                  <p>Humidity</p>
                </div>
                <p>79%</p>
              </div>

              <div>
                <div>
                  <FaThermometerFull />
                  <p>High</p>
                </div>
                <p>108 &deg;</p>
              </div>

              <div>
                <div>
                  <FaTemperatureLow />
                  <p>Low</p>
                </div>
                <p>2 &deg;</p>
              </div>

              <div>
                <div>
                  <FaWind />
                  <p>Wind</p>
                </div>
                <p>7 km/h</p>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <FaEye />
                  <p>Visibility</p>
                </div>
                <p>Unlimited</p>
              </div>

              <div>
                <div>
                  <CgCompress />
                  <p>Pressure</p>
                </div>
                <p>1008.5 mb</p>
              </div>

              <div>
                <div>
                  <GiSunrise />
                  <p>Sunrise</p>
                </div>
                <p>05:54 AM</p>
              </div>

              <div>
                <div>
                  <GiSunset />
                  <p>Sunset</p>
                </div>
                <p>06:21 PM</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
