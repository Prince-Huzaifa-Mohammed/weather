import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/styled/Button";
import { auth } from "../config/firebase";
import { Shell } from "../components/styled/Shell";
import MainLogo from "../components/MainLogo";
import { StyledHeader } from "../components/styled/Header";
import { StyledCelcius } from "../components/styled/StyledCelcius";
import { Image } from "../components/styled/Image";
import { ContainerBox } from "../components/styled/ContainerBox";
import {
  FaSearch,
  FaAngleDown,
  FaSignOutAlt,
  FaLock,
  FaWind,
  FaTemperatureLow,
  FaThermometerFull,
  FaEye,
} from "react-icons/fa";
import { MdWaterDrop } from "react-icons/md";
import { CgCompress } from "react-icons/cg";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { DropDown } from "../components/styled/DropDown";
import { HideDropDown, ShowDropDown } from "../components/styled/ShowDropDown";
import { MainSection } from "../components/styled/MainSection";
import { StyledSection } from "../components/styled/StyledSection";
import { Flex } from "../components/styled/Flex";
import { Daily } from "../components/styled/Daily";

const Dashboard: React.FC = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("Ghana");
  const [celcius, setCelcius] = useState(true);

  const navigate = useNavigate();

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const toggleCelcuis = () => {
    setCelcius(!celcius);
  };

  // useEffect(() => {
  //   setLoading(true);
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log(user);
  //       setLoading(false);
  //     } else {
  //       console.log(user);
  //       setLoading(false);
  //       navigate("/");
  //     }
  //   });

  //   return unsubscribe;
  // }, [auth]);

  // Function to logout user
  const logoutUser = async () => {
    console.log("logging out");
    setLoggingOut(true);

    await signOut(auth);

    setLoggingOut(false);

    // navigate("/");
  };

  if (loading) return <h1>Loading ...</h1>;

  if (loggingOut)
    return (
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#fc8e3e", "#0198BA", "#fc8e3e", "##0198BA", "#fc8e3e"]}
      />
    );

  return (
    <Shell>
      <ContainerBox>
        <MainLogo />
        <StyledHeader>
          <div>
            <div>
              {celcius ? (
                <>
                  <StyledCelcius>
                    <span>&deg; C</span>
                  </StyledCelcius>
                  <span onClick={toggleCelcuis}>&deg; F</span>
                </>
              ) : (
                <>
                  <span onClick={toggleCelcuis}>&deg; C</span>
                  <StyledCelcius>
                    <span>&deg; F</span>
                  </StyledCelcius>
                </>
              )}
            </div>
          </div>

          <div>
            <div>
              <input type="text" placeholder="search a country or city ..." />
              <button>
                <span>
                  <FaSearch color="white" />
                </span>
                <span>Search</span>
              </button>
            </div>
          </div>

          <div>
            <div>
              <img src="./assets/Rwanda.svg" alt="" />
              <h2>M</h2>
              <span onClick={toggleDropDown}>
                <FaAngleDown />
              </span>
            </div>
          </div>
        </StyledHeader>

        {/* Modal */}

        {showDropDown && (
          <ShowDropDown>
            <DropDown>
              <div>
                <Link to="/">
                  <FaLock />
                  <span>Change Password</span>
                </Link>
                <span onClick={() => navigate("/")}>
                  <FaSignOutAlt />
                  <span>Logout</span>
                </span>
              </div>
            </DropDown>
          </ShowDropDown>
        )}

        {/*  */}

        <MainSection>
          <StyledSection>
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
          </StyledSection>

          <Daily>
            <div>
              <h2>Daily Forecast</h2>
              <div></div>
            </div>
          </Daily>

          <Daily>
            <div>
              <h2>Hourly Forecast</h2>
              <div></div>
            </div>
          </Daily>
        </MainSection>
      </ContainerBox>
    </Shell>
  );
};

export default Dashboard;
