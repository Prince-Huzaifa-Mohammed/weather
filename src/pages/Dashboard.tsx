import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { Shell } from "../components/styled/Shell";
import MainLogo from "../components/MainLogo";
import { StyledHeader } from "../components/styled/Header";
import { StyledCelcius } from "../components/styled/StyledCelcius";
import { ContainerBox } from "../components/styled/ContainerBox";
import { FaSearch, FaAngleDown, FaSignOutAlt, FaLock } from "react-icons/fa";
import { DropDown } from "../components/styled/DropDown";
import { ShowDropDown } from "../components/styled/ShowDropDown";
import { MainSection } from "../components/styled/MainSection";
import { StyledSection } from "../components/styled/StyledSection";
import Hero from "../components/Hero";
import DailyWeather from "../components/DailyWeather";
import {
  getFormattedData,
  getGeoLocation,
  getWeatherData,
} from "../utils/weather";

const Dashboard: React.FC = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("Ghana");
  const [inputData, setInputData] = useState("");
  const [celcius, setCelcius] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const toggleCelcuis = () => {
    setCelcius(!celcius);
  };

  const getGeoWeather = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await getGeoLocation(inputData);
      console.log(data);
      if (data.count === 0) {
        setLoading(false);
        return setError(
          "Please provide a valid Country name or a valid city and country name separated by a comma(,)"
        );
      } else {
        const longitude = data.list[0].coord.lon;
        const latitude = data.list[0].coord.lat;

        const weatherData = await getWeatherData(longitude, latitude);
        setLoading(false);
        console.log(weatherData);

        const x = getFormattedData(data.list[0], weatherData);
        console.log(x);
        // console.log(data.list[0].coord);
        // console.log(data.list[0].coord.lat);
        // console.log(data.list[0].coord.lon);
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong. Please try again later!");
      setLoading(false);
    }
  };

  useEffect(() => {
    // const callAPI = async () => {
    //   try {
    //     const data = await getGeoLocation(inputData);
    //     console.log(data);
    //     console.log(data.count);
    //     console.log(data.list[0].coord);
    //     console.log(data.list[0].coord.lat);
    //     console.log(data.list[0].coord.lon);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // callAPI();
    // setLoading(true);
    // const unsubscribe = onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     console.log(user);
    //     setLoading(false);
    //   } else {
    //     console.log(user);
    //     setLoading(false);
    //     navigate("/");
    //   }
    // });
    // return unsubscribe;
  }, [auth]);

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

  if (error) return <h2>{error}</h2>;

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
            <form onSubmit={getGeoWeather}>
              <div>
                <input
                  type="text"
                  placeholder="search a country or city ..."
                  onChange={(e) => setInputData(e.target.value)}
                />
                <button>
                  <span>
                    <FaSearch color="white" />
                  </span>
                  <span>Search</span>
                </button>
              </div>
            </form>
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
            <Hero />
          </StyledSection>

          <DailyWeather />
        </MainSection>
      </ContainerBox>
    </Shell>
  );
};

export default Dashboard;
