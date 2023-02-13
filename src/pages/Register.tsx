import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  collection,
  addDoc,
  doc,
  serverTimestamp,
  getDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import MainLogo from "../components/MainLogo";
import { Button } from "../components/styled/Button";
import { Content } from "../components/styled/Content";
import { Flex } from "../components/styled/Flex";
import { Image } from "../components/styled/Image";
import { InputField } from "../components/styled/InputField";
import { InputGroup } from "../components/styled/InputGroup";
import { Label } from "../components/styled/Label";
import { PrimaryBox } from "../components/styled/PrimaryBox";
import { SecondaryBox } from "../components/styled/SecondaryBox";
import { Shell } from "../components/styled/Shell";
import { SmallContainer } from "../components/styled/SmallContainer";
import { StyledSelect } from "../components/styled/StyledSelect";
import { auth } from "../config/firebase";
import { ColorRing } from "react-loader-spinner";
import {
  countryIsValid,
  emailIsValid,
  fullNameIsValid,
  passwordIsValid,
} from "../utils/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [country, setCountry] = useState("Ghana");

  const [registering, setRegistering] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const navigate = useNavigate();
  const colRef = collection(db, "users");

  const toggleVisibility = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (visible) setVisible(false);
    else setVisible(true);
  };

  const registerUser = async () => {
    try {
      setErrors([]);
      setRegistering(false);

      let validationErrors: string[] = [];

      // Validate input fields
      const fullNameValid = fullNameIsValid(fullname);
      if (!fullNameValid)
        validationErrors.push("Fullname can only contain alphabets");

      const countryValid = countryIsValid(country);
      if (!countryValid)
        validationErrors.push("Country can either be Ghana, Germany or Rwanda");

      const emailValid = emailIsValid(email);
      if (!emailValid) validationErrors.push("Please enter a valid email");

      const passwordValid = passwordIsValid(password);
      if (!passwordValid)
        validationErrors.push(
          "Password should contain at least an uppercase letter, a symbol, a number and password should have a length of 8 and above"
        );

      if (validationErrors.length > 0) {
        validationErrors.map((error) => toast.error(error));
        // toast.error("something went wrong!");
      } else {
        setRegistering(true);

        // Check if account exist
        const q = query(colRef, where("email", "==", email));
        const userRefIfAny = await getDocs(q);

        let res: object[] = [];
        userRefIfAny.forEach((country) => {
          res.push({
            id: country.id,
            ...country.data(),
          });
        });

        console.log(res);

        if (res.length > 0) {
          toast.error("Heeeeee");
          navigate("/login");
          setRegistering(false);
        } else {
          const userCredentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );

          const user = userCredentials.user;
          console.log(user);

          updateProfile(auth.currentUser!, { displayName: fullname });

          const userInfo = {
            name: fullname,
            email: user.email,
            country,
            timestamp: serverTimestamp(),
          };

          const docRef = await addDoc(colRef, userInfo);

          const newUser = await getDoc(doc(db, "users", docRef.id));
          console.log(newUser.data());
          navigate("/dashboard");
          setRegistering(false);
        }
      }
    } catch (err) {
      console.log(err);
      // setErrors(["Check your details once again"]);
      setRegistering(false);
      navigate("/register");
    }
  };

  return (
    <Shell>
      <SecondaryBox>
        <MainLogo />
      </SecondaryBox>
      <PrimaryBox></PrimaryBox>
      <Content>
        <SmallContainer>
          {registering && (
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#fc8e3e", "#0198BA", "#fc8e3e", "##0198BA", "#fc8e3e"]}
            />
          )}

          {!registering && (
            <>
              <h2>Create an Account</h2>
              <p>Sign up to get started with an account</p>

              <Flex>
                <InputGroup>
                  <Label>Fullname</Label>
                  <InputField>
                    <input
                      type="text"
                      placeholder="Kwame Kojo Mahamuda"
                      onChange={(e) => setFullname(e.target.value)}
                      value={fullname}
                      // onBlur={() => alert(1)}
                    />
                  </InputField>
                </InputGroup>

                <InputGroup>
                  <Label>Country</Label>
                  <StyledSelect>
                    <Image src={`./assets/${country}.svg`} width="10%" />
                    <div></div>
                    <select onChange={(e) => setCountry(e.target.value)}>
                      <option value="Germany">Germany</option>
                      <option value="Ghana" selected>
                        Ghana
                      </option>
                      <option value="Rwanda">Rwanda</option>
                    </select>
                  </StyledSelect>
                  {/* <Select /> */}
                </InputGroup>
              </Flex>

              <InputGroup>
                <Label>Email</Label>
                <InputField>
                  <input
                    type="email"
                    placeholder="prince@amalitech.org"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
                    value={password}
                  />
                  <div onClick={toggleVisibility}>
                    <MdRemoveRedEye />
                  </div>
                </InputField>
              </InputGroup>

              <Flex>
                <div>
                  <p>
                    By creating an account, you agree to the <br />{" "}
                    <a href="#">Terms of Use</a> and{" "}
                    <a href="#">Privacy Policy.</a>
                  </p>
                </div>
              </Flex>

              <Flex>
                <Button width="100%" onClick={registerUser}>
                  Sign up
                </Button>{" "}
                {/* <Link to="/login">Back to login page</Link> */}
              </Flex>
              <p>You can also signup with google</p>
              <Flex width="30%">
                <Image
                  onClick={() => navigate("/country")}
                  src="./assets/google.svg"
                  width="20%"
                />
                <Link to="/login">Back to login</Link>
              </Flex>
            </>
          )}
        </SmallContainer>
      </Content>
      <ToastContainer />
    </Shell>
  );
};

export default Register;
