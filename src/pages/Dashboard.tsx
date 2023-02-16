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
import { FaSearch, FaAngleDown, FaSignOutAlt, FaLock } from "react-icons/fa";
import { DropDown } from "../components/styled/DropDown";
import { HideDropDown, ShowDropDown } from "../components/styled/ShowDropDown";

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
        {showDropDown ? (
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
        ) : (
          <HideDropDown>
            {/* <DropDown>
              <div>
                <Link to="/">
                  <FaLock />
                  <span>Change Password</span>
                </Link>
                <span>
                  <FaSignOutAlt />
                  <span>Logout</span>
                </span>
              </div>
            </DropDown> */}
          </HideDropDown>
        )}
        {/*  */}
      </ContainerBox>
    </Shell>
  );
};

export default Dashboard;
