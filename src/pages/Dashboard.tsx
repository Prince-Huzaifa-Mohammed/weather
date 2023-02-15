import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/styled/Button";
import { auth } from "../config/firebase";
import { Shell } from "../components/styled/Shell";
import MainLogo from "../components/MainLogo";
import { Box } from "../components/styled/Box";
import { StyledHeader } from "../components/styled/Header";
import { StyledCelcius } from "../components/styled/StyledCelcius";
import { Image } from "../components/styled/Image";

const Dashboard: React.FC = () => {
  const [loggingOut, setLoggingOut] = useState(false);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("Ghana");
  const [celcius, setCelcius] = useState(true);

  const navigate = useNavigate();

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
      <Box>
        <MainLogo />
        <StyledHeader>
          <div>
            <h4>&deg; C</h4>
            <StyledCelcius>
              <h4>&deg; F</h4>
            </StyledCelcius>
          </div>
          <div>
            <h1>Hey</h1>
          </div>

          <div>
            <h2>M</h2>
            {/* <Image src={`./assets/${country}.svg`} width="15%" /> */}
          </div>
        </StyledHeader>
      </Box>
      {/* <h1>Welcome to your Dashboard</h1>
      <Button onClick={logoutUser}>Logout</Button> */}
    </Shell>
  );
};

export default Dashboard;
