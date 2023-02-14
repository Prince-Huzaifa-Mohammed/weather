import { signOut } from "firebase/auth";
import { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/styled/Button";
import { auth } from "../config/firebase";

const Dashboard: React.FC = () => {
  const [loggingOut, setLoggingOut] = useState(false);

  const navigate = useNavigate();

  // Function to logout user
  const logoutUser = async () => {
    console.log("logging out");
    setLoggingOut(true);

    await signOut(auth);

    setLoggingOut(false);

    // navigate("/");
  };

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
    <div>
      <h1>Welcome to your Dashboard</h1>
      <Button onClick={logoutUser}>Logout</Button>
    </div>
  );
};

export default Dashboard;
