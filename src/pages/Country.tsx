import { useState } from "react";
import { Audio, ColorRing } from "react-loader-spinner";
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
import { useNavigate } from "react-router-dom";
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

const Country: React.FC = () => {
  const [country, setCountry] = useState("Ghana");
  const [authing, setAuthing] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Collection Reference
  const colRef = collection(db, "users");

  const registerWithGoogle = async () => {
    setAuthing(true);

    try {
      const userCredentials = await signInWithPopup(
        auth,
        new GoogleAuthProvider()
      );

      const q = query(colRef, where("email", "==", userCredentials.user.email));
      const userRefIfAny = await getDocs(q);

      let res: object[] = [];
      userRefIfAny.forEach((country) => {
        res.push({
          id: country.id,
          ...country.data(),
        });
      });

      if (res.length > 0) {
        navigate("/login");
        setAuthing(false);
      } else {
        const userInfo = {
          name: userCredentials.user.displayName,
          email: userCredentials.user.email,
          country,
          timestamp: serverTimestamp(),
        };

        const docRef = await addDoc(colRef, userInfo);

        const newUser = await getDoc(doc(db, "users", docRef.id));
        console.log(newUser.data());

        navigate("/dashboard");
      }
      // const check = await colRef.where("uberId", "==",'1234567').get()
      // console.log(userCredentials.user);
      // console.log(userCredentials.user.uid);
    } catch (err) {
      console.log(err);
      setError("Please sign up with a valid google account");
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

              <Button onClick={registerWithGoogle} width="100%">
                Proceed{" "}
              </Button>
            </>
          )}
        </SmallContainer>
      </Content>
    </Shell>
  );
};

export default Country;
