import MainLogo from "../components/MainLogo";
import { Button } from "../components/styled/Button";
import { Content } from "../components/styled/Content";
import { Flex } from "../components/styled/Flex";
import { InputField } from "../components/styled/InputField";
import { InputGroup } from "../components/styled/InputGroup";
import { Label } from "../components/styled/Label";
import { PrimaryBox } from "../components/styled/PrimaryBox";
import { SecondaryBox } from "../components/styled/SecondaryBox";
import { Shell } from "../components/styled/Shell";
import { SmallContainer } from "../components/styled/SmallContainer";
import { MdRemoveRedEye } from "react-icons/md";
import { ButtonOutlined } from "../components/styled/ButtonOutlined";
import Divider from "../components/Divider";
import GoogleButton from "../components/GoogleButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { emailIsValid, passwordIsValid } from "../utils/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, db } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";

const LoginPage: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [signingIn, SetSigningIn] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Function to toggle password visibility
  const toggleVisibility = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (visible) setVisible(false);
    else setVisible(true);
  };

  // SIGN IN WITH EMAIL AND PASSWORD ************************************
  const signinWithEmailAndPassord = async () => {
    // Validate user input
    const validationErrors = [];

    const emailValid = emailIsValid(email);
    if (!emailValid) validationErrors.push("Please enter a valid email!");

    const passwordValid = passwordIsValid(password);
    if (!passwordValid) validationErrors.push("Invalid password");

    if (validationErrors.length > 0) {
      validationErrors.map((error) => toast.error(error));
    } else {
      SetSigningIn(true);
      setError("");

      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = credentials.user;
      console.log(user);

      // Constructing the query to get user info from the database
      const colRef = collection(db, "users");
      const q = query(colRef, where("email", "==", email));

      // Making the request to the database
      const userRefIfAny = await getDocs(q);

      let res: object[] = [];
      userRefIfAny.forEach((country) => {
        res.push({
          id: country.id,
          ...country.data(),
        });
      });

      if (res.length > 0) {
        // Update state here with message to be used in toast
        // ******

        console.log(res);
        navigate("/dashboard");
      } else {
        toast.error("Please create an account!");
      }
    }
  };

  return (
    <div>
      <Shell>
        <SecondaryBox>
          <MainLogo />
        </SecondaryBox>
        <PrimaryBox></PrimaryBox>
        <Content>
          <SmallContainer>
            <h2>Log in to your Account</h2>
            <p>Welcome back, please enter your details</p>

            <InputGroup>
              <Label>Email</Label>
              <InputField>
                <input
                  type="email"
                  placeholder="prince@amalitech.org"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputField>
            </InputGroup>

            <InputGroup>
              <Label>Password</Label>
              <InputField>
                <input
                  type={visible ? "text" : "password"}
                  placeholder="* * * * * * * * * * *"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div onClick={toggleVisibility}>
                  <MdRemoveRedEye />
                </div>
              </InputField>
            </InputGroup>

            <Flex width="100%">
              <Button onClick={signinWithEmailAndPassord} width="100%">
                Log in
              </Button>
              <ButtonOutlined
                onClick={() => navigate("/register")}
                width="100%"
              >
                Register
              </ButtonOutlined>
            </Flex>

            <Divider />

            <GoogleButton />
          </SmallContainer>
        </Content>
        <ToastContainer />
      </Shell>
    </div>
  );
};

export default LoginPage;
