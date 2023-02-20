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
  isValidCountry,
} from "../utils/weather";
import { deleteUserBio, getUserBio } from "../utils/localStorage";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/store";
import { addWeatherData } from "../Redux/features/weatherSlice";
import { addUser } from "../Redux/features/userSlice";
import HourlyWeather from "../components/HourlyWeather";

const Dashboard: React.FC = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [loading, setLoading] = useState(true);
  const [inputData, setInputData] = useState("");
  const [isCelcius, setIsCelcius] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  // const conditions = {
  //   Clouds: "cloudy.jpg",
  //   Clear: "clear.jpg",
  //   Sunny: "sunny.jpg",
  //   Raining: "raining.jpg",
  //   Cloudy: "cloudy.jpg",
  //   Rainy: "raining.jpg",
  //   Rain: "raining.jpg",
  // };

  // Data required from redux to power user dashboard
  const weather = useSelector((state: RootState) => state.weather.value);
  const user = useSelector((state: RootState) => state.user.value);

  const navigate = useNavigate();

  // Function to open and close header dropdown
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  // Function to switch from celcius to fahrenheit and vise versa
  const toggleCelcuis = () => {
    setIsCelcius(!isCelcius);
  };

  // Dashboad search functionality
  const getGeoWeather = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimedInputData = inputData.trim();
    setInputData("");
    setError("");
    setLoading(true);

    if (trimedInputData === "") {
      setLoading(false);
      return setError(
        "Please provide a valid location! Search field cannot be empty!"
      );
    } else {
      try {
        // Try to get longitude and latitude by location name
        const data = await getGeoLocation(trimedInputData);

        if (data.count === 0) {
          // Means coordinates not found
          setLoading(false);
          return setError(
            "Please provide a valid Country name or a valid city and country name separated by a comma(,)"
          );
        } else {
          // If code execution gets here, it means coordinates for search location has been found

          // Check if searched location is within the acceptable search countries(Ghana, Germany, Rwanda)
          const validCountrySearch = isValidCountry(data.list[0]);

          if (!validCountrySearch) {
            setLoading(false);
            return setError(
              "You are only allowed to search for places in Germany, Ghana or Rwanda"
            );
          }

          // If code execution gets here, it means coordinates have been found and searched location in acceptable

          const longitude = data.list[0].coord.lon;
          const latitude = data.list[0].coord.lat;

          // Get weather data from coordinates (long and lat)
          const weatherData = await getWeatherData(longitude, latitude);

          // Transform huge data set to only data that is needed to power the page
          const formattedData = getFormattedData(data.list[0], weatherData);
          console.log(formattedData);

          // Save data to state to trigger rerender
          dispatch(addWeatherData(formattedData));
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setError("Something went wrong. Please try again later!");
        setLoading(false);
      }
    }
  };

  // Carry out an Auth check as well as provide user's country data on page load
  useEffect(() => {
    setError("");
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Get user country from localstorage
        const userBio = getUserBio();
        console.log(userBio);

        // Fetch weather data to power users dashboards
        const apiCall = async (location: string) => {
          try {
            const data = await getGeoLocation(location);
            const longitude = data.list[0].coord.lon;
            const latitude = data.list[0].coord.lat;
            const weatherData = await getWeatherData(longitude, latitude);

            const formattedData = getFormattedData(data.list[0], weatherData);
            console.log(formattedData);
            // Update state with weather data
            dispatch(addWeatherData(formattedData));
            dispatch(addUser(userBio));

            setLoading(false);
          } catch (err) {
            console.log(err);
            setError("Something went wrong. Please try again later!");
            setLoading(false);
          }
        };

        apiCall(userBio.country);
      } else {
        navigate("/");
        setLoading(false);
      }
    });

    return unsubscribe;
  }, [auth]);

  // Function to logout user
  const logoutUser = async () => {
    setLoggingOut(true);

    await signOut(auth);

    // Delete country from localstorage
    deleteUserBio();

    setLoggingOut(false);
  };

  return (
    <Shell>
      <ContainerBox>
        <MainLogo />
        <StyledHeader>
          <div>
            <div>
              {isCelcius ? (
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
                  placeholder="Example Germany or Kigali, Rwanda"
                  value={inputData}
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
              <img src={`./assets/${user?.country}.svg`} alt="" />
              <h2>{user?.name[0]}</h2>
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
                <span onClick={logoutUser}>
                  <FaSignOutAlt />
                  <span>Logout</span>
                </span>
              </div>
            </DropDown>
          </ShowDropDown>
        )}

        {/*  */}

        <MainSection>
          {loading && (
            <aside>
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={[
                  "#fc8e3e",
                  "#0198BA",
                  "#fc8e3e",
                  "##0198BA",
                  "#fc8e3e",
                ]}
              />
            </aside>
          )}

          {loggingOut && (
            <aside>
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={[
                  "#fc8e3e",
                  "#0198BA",
                  "#fc8e3e",
                  "##0198BA",
                  "#fc8e3e",
                ]}
              />
            </aside>
          )}

          {weather && !error && !loggingOut && !loading && (
            <>
              <StyledSection>
                <Hero weather={weather} isCelcius={isCelcius} />
              </StyledSection>

              <HourlyWeather weather={weather} isCelcius={isCelcius} />
              <DailyWeather weather={weather} isCelcius={isCelcius} />
            </>
          )}

          {error && <h6>{error}</h6>}
        </MainSection>
      </ContainerBox>
    </Shell>
  );
};

export default Dashboard;
