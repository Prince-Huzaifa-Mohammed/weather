import { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import MainLogo from "../components/MainLogo";
import { Content } from "../components/styled/Content";
import { InputGroup } from "../components/styled/InputGroup";
import { Label } from "../components/styled/Label";
import { PrimaryBox } from "../components/styled/PrimaryBox";
import { SecondaryBox } from "../components/styled/SecondaryBox";
import { Shell } from "../components/styled/Shell";
import { SmallContainer } from "../components/styled/SmallContainer";
import { StyledSelect } from "../components/styled/StyledSelect";
import { Image } from "../components/styled/Image";
import { Button } from "../components/styled/Button";
import { auth, db } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { InputField } from "../components/styled/InputField";
import { emailIsValid } from "../utils/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveUserBio } from "../utils/localStorage";

const Country: React.FC = () => {
  const [country, setCountry] = useState("Ghana");
  const [email, setEmail] = useState("");
  const [authing, setAuthing] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Collection Reference
  const colRef = collection(db, "users");

  // Function to register user with a google account
  const registerWithGoogle = async () => {
    // For controlling the loading state
    setAuthing(false);

    try {
      // Validate email field
      const emailValid = emailIsValid(email);

      if (!emailValid) {
        // If email format is incorrect, show a tast error
        toast.error("Please enter a valid email!");
      } else {
        // If email is format is valid check if such an email has already been registered

        // Loading
        setAuthing(true);

        // Constructing the query to search the database if email exist
        const q = query(colRef, where("email", "==", email));

        // Making the request to the database
        const userRefIfAny = await getDocs(q);

        let res: object[] = [];
        userRefIfAny.forEach((country) => {
          res.push({
            // id: country.id,
            ...country.data(),
          });
        });

        // If response contains a user object, we redirect the user to the login page cos an account exist
        if (res.length > 0) {
          setAuthing(false);
          // Update state here with message to be used in toast
          // ******
          navigate("/login");
        } else {
          // If code execution gets here, means user doesn't exist so a new User should be created
          const userCredentials = await signInWithPopup(
            auth,
            new GoogleAuthProvider()
          );

          // Preparing a User Object to be saved to the firestore database.
          const userInfo = {
            name: userCredentials.user.displayName,
            email: userCredentials.user.email,
            country,
            timestamp: serverTimestamp(),
          };

          // Adding user document to the database which returns a reference to the newly saved user document
          const docRef = await addDoc(colRef, userInfo);

          // Retrieving newly saved user details from the database to be used to update state
          const newUser = await getDoc(doc(db, "users", docRef.id));
          const userData = newUser.data();

          // Save users country to localstorage
          saveUserBio({
            name: userData?.name,
            country: userData?.country,
            email: userData?.email,
          });

          // ***** Fetch Weather data and update state
          // ************************

          // Ending the loading state
          setAuthing(false);

          // We redirect to dashboard
          navigate("/dashboard");
        }
      }
    } catch (err) {
      console.log(err);
      // setError("Please sign up with a valid google account");
      toast.error("Provide a valid google account!");
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
          {authing ? (
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#fc8e3e", "#0198BA", "#fc8e3e", "##0198BA", "#fc8e3e"]}
            />
          ) : (
            <>
              <h1>Please Select a Country</h1>
              <p>
                Before you proceed to signup to this service, we would like you
                to kindly select a country for which you would like to receive
                weather updates
              </p>

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

              <InputGroup>
                <Label>Email (Please enter a valid Gmail account)</Label>
                <InputField>
                  <input
                    type="email"
                    placeholder="prince@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </InputField>
              </InputGroup>

              <Button onClick={registerWithGoogle} width="100%">
                Proceed
              </Button>

              <Link to="/login">Back to login</Link>
            </>
          )}
        </SmallContainer>
      </Content>
      <ToastContainer />
    </Shell>
  );
};

export default Country;
