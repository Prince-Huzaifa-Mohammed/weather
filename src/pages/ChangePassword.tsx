import React, { useEffect, useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { Link, useNavigate, RouteProps } from "react-router-dom";
import MainLogo from "../components/MainLogo";
import { Button } from "../components/styled/Button";
import { Content } from "../components/styled/Content";
import { InputField } from "../components/styled/InputField";
import { InputGroup } from "../components/styled/InputGroup";
import { Label } from "../components/styled/Label";
import { PrimaryBox } from "../components/styled/PrimaryBox";
import { SecondaryBox } from "../components/styled/SecondaryBox";
import { Shell } from "../components/styled/Shell";
import { SmallContainer } from "../components/styled/SmallContainer";
import queryString from "query-string";
import { confirmPasswordReset, verifyPasswordResetCode } from "firebase/auth";
import { auth } from "../config/firebase";
import { confirmPasswords, passwordIsValid } from "../utils/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../components/Spinner";
import { addError } from "../Redux/features/errorSlice";
import { useDispatch } from "react-redux";

const ChangePassword: React.FC = () => {
  const [visibleNew, setVisibleNew] = useState(false);
  const [visibleConfirm, setVisibleConfirm] = useState(false);

  const [verifying, setVerifying] = useState(true);
  const [verified, setVerified] = useState(false);
  const [changing, setChanging] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [oobCode, setOobCode] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let params = queryString.parse(window.location.search);

    if (params) {
      let oobCode = params.oobCode as string;

      if (oobCode) {
        // Verify code
        verifyPasswordResetLink(oobCode);
      } else {
        setVerified(false);
        setVerifying(false);
      }
    } else {
      setVerified(false);
      setVerifying(false);
    }
  }, []);

  const verifyPasswordResetLink = (code: string) => {
    verifyPasswordResetCode(auth, code)
      .then((result) => {
        // console.log(result);
        setOobCode(code);
        setVerified(true);
        setVerifying(false);
      })
      .catch((err) => {
        // console.log(err);
        setVerified(false);
        setVerifying(false);
      });
  };

  const passwordResetRequest = () => {
    let validationErrors: string[] = [];

    const passwordsAreMatch = confirmPasswords(password, confirm);
    const isValidPassword = passwordIsValid(password);

    if (!passwordsAreMatch) validationErrors.push("Your passwords donot match");
    if (!isValidPassword)
      validationErrors.push(
        "Password should contain at least an uppercase letter, a symbol, a number and password should have a length of 8 and above"
      );

    if (validationErrors.length > 0) {
      validationErrors.map((error) => toast.error(error));
    } else {
      setChanging(true);

      confirmPasswordReset(auth, oobCode, password)
        .then(() => {
          // UPDATE STATE HERE
          dispatch(
            addError("Password has been changed successfuly, please login.")
          );
          // ****************************

          setChanging(false);
          navigate("/login");
        })
        .catch((err) => {
          setChanging(false);
          navigate("/");
        });
    }
  };

  const toggleVisibility = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (visibleNew) setVisibleNew(false);
    else setVisibleNew(true);
  };

  const toggleVisibilityConfirm = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (visibleConfirm) setVisibleConfirm(false);
    else setVisibleConfirm(true);
  };

  return (
    <Shell>
      <SecondaryBox>
        <MainLogo />
      </SecondaryBox>
      <PrimaryBox></PrimaryBox>
      <Content>
        <SmallContainer>
          {verifying ? (
            <Spinner />
          ) : (
            // <ColorRing
            //   visible={true}
            //   height="80"
            //   width="80"
            //   ariaLabel="blocks-loading"
            //   wrapperStyle={{}}
            //   wrapperClass="blocks-wrapper"
            //   colors={["#fc8e3e", "#0198BA", "#fc8e3e", "##0198BA", "#fc8e3e"]}
            // />
            <>
              {verified ? (
                <>
                  {changing ? (
                    <Spinner />
                  ) : (
                    // <ColorRing
                    //   visible={true}
                    //   height="80"
                    //   width="80"
                    //   ariaLabel="blocks-loading"
                    //   wrapperStyle={{}}
                    //   wrapperClass="blocks-wrapper"
                    //   colors={[
                    //     "#fc8e3e",
                    //     "#0198BA",
                    //     "#fc8e3e",
                    //     "##0198BA",
                    //     "#fc8e3e",
                    //   ]}
                    // />
                    <>
                      <h2>Forgotten your password?</h2>
                      <h3>Enter a new password for your account</h3>

                      <div></div>
                      <div></div>

                      <InputGroup>
                        <Label>New Password</Label>
                        <InputField>
                          <input
                            type={visibleNew ? "text" : "password"}
                            placeholder="* * * * * * * * * * *"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <div onClick={toggleVisibility}>
                            <MdRemoveRedEye />
                          </div>
                        </InputField>
                      </InputGroup>

                      <InputGroup>
                        <Label>Confirm Password</Label>
                        <InputField>
                          <input
                            type={visibleConfirm ? "text" : "password"}
                            placeholder="* * * * * * * * * * *"
                            onChange={(e) => setConfirm(e.target.value)}
                          />
                          <div onClick={toggleVisibilityConfirm}>
                            <MdRemoveRedEye />
                          </div>
                        </InputField>
                      </InputGroup>

                      <Button onClick={passwordResetRequest} width="100%">
                        Reset Password
                      </Button>

                      <Link to="/login">
                        <div>Back to login</div>
                      </Link>
                    </>
                  )}
                </>
              ) : (
                <>
                  <h1>Invalid Link!</h1>
                  <Link to="/login">Back to login page</Link>
                </>
              )}
            </>
          )}
        </SmallContainer>
      </Content>
      <ToastContainer />
    </Shell>
  );
};

export default ChangePassword;
