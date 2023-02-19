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
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { emailIsValid, passwordIsValid } from "../utils/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, db } from "../config/firebase";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Image } from "../components/styled/Image";
import { ColorRing } from "react-loader-spinner";
import { saveUserBio } from "../utils/localStorage";
import { useDispatch } from "react-redux";
import { UserRes } from "../Interfaces/weather";

type User = {
  // id: string;
  name: string;
  email: string;
  country: string;
  // timestamp: object;
};

const LoginPage: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [signingIn, SetSigningIn] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const colRef = collection(db, "users");

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

      try {
        const credentials = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = credentials.user;
        console.log(user);

        // Constructing the query to get user info from the database

        const q = query(colRef, where("email", "==", email));

        // Making the request to the database
        const userRefIfAny = await getDocs(q);

        let userBio: UserRes = {};
        // let userCountry: User | null = null
        userRefIfAny.forEach((ref) => {
          userBio.name = ref.data().name;
          userBio.country = ref.data().country;
          userBio.email = ref.data().email;
          // res.push({
          //   id: country.id,
          //   ...country.data(),
          // });
        });

        console.log(userBio);

        if (Object.keys(userBio).length !== 0) {
          // Update state here with message to be used in toast
          // ******

          // Save user country to localstorage
          saveUserBio(userBio);

          // const user = {
          //   name: res[0].name,
          //   email: res[0].email,
          //   country: res[0].country,
          //   id: res[0].id,
          // };

          // dispatch(addUser(user));

          console.log(userBio);
          navigate("/");
          SetSigningIn(false);
        } else {
          toast.error("Please create an account!");
          SetSigningIn(false);
        }
      } catch (err) {
        toast.error("Please try again later!");
        SetSigningIn(false);
      }
    }
  };

  // SIGN IN WITH GMAIL ************************************

  const signInWithGoogle = async () => {
    SetSigningIn(true);
    setError("");

    try {
      const credentials = await signInWithPopup(auth, new GoogleAuthProvider());

      const user = credentials.user;

      // Constructing the query to search the database if email exist
      const q = query(colRef, where("email", "==", user.email));

      // Making the request to the database
      const userRefIfAny = await getDocs(q);

      let userBio: UserRes = {};
      // let userCountry: User | null = null
      userRefIfAny.forEach((ref) => {
        userBio.name = ref.data().name;
        userBio.country = ref.data().country;
        userBio.email = ref.data().email;
        // res.push({
        //   id: country.id,
        //   ...country.data(),
        // });
      });

      if (Object.keys(userBio).length !== 0) {
        // Save users country to localstorage
        saveUserBio(userBio);

        // Update state here ************************

        // ******************************************

        //console.log(user);
        navigate("/dashboard");
        SetSigningIn(false);
      } else {
        await signOut(auth);

        // Update state here ********************

        // **************************************
        SetSigningIn(false);
        console.log(user);
        navigate("/dashboard");
      }
    } catch (err) {
      SetSigningIn(false);
      toast.error("Please try again later!");
    }
  };

  // *******************************************************

  if (signingIn)
    return (
      <Shell>
        <SecondaryBox>
          <MainLogo />
        </SecondaryBox>
        <PrimaryBox>
          <Content>
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#fc8e3e", "#0198BA", "#fc8e3e", "##0198BA", "#fc8e3e"]}
            />
          </Content>
        </PrimaryBox>
      </Shell>
    );

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

            <ButtonOutlined onClick={signInWithGoogle}>
              <Image src="./assets/google.svg" width="8%" />
              Signin with Google
            </ButtonOutlined>

            <Link to="/reset-password">Forgot Password?</Link>
          </SmallContainer>
        </Content>
        <ToastContainer />
      </Shell>
    </div>
  );
};

export default LoginPage;
