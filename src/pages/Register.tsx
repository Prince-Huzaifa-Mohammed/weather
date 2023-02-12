import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  collection,
  addDoc,
  doc,
  serverTimestamp,
  getDoc,
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

const Register: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [country, setCountry] = useState("Ghana");

  const [registering, setRegistering] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
      setError("");
      setRegistering(true);

      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredentials.user;
      console.log(user);

      updateProfile(auth.currentUser!, { displayName: fullname.split(" ")[0] });

      const userInfo = {
        name: fullname,
        email: user.email,
        country,
        timestamp: serverTimestamp(),
      };

      const docRef = await addDoc(colRef, userInfo);

      const newUser = await getDoc(doc(db, "users", docRef.id));
      console.log(newUser.data());
    } catch (err) {
      console.log(err);
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
                <a href="#">Terms of Use</a> and <a href="#">Privacy Policy.</a>
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
        </SmallContainer>
      </Content>
    </Shell>
  );
};

export default Register;
