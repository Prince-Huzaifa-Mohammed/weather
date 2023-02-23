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
import { Link } from "react-router-dom";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { emailIsValid } from "../utils/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../config/firebase";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const resetPasswordRequest = async () => {
    const emailValid = emailIsValid(email);

    if (!emailValid) toast.error("Please enter a valid email!");
    else {
      setSending(true);

      sendPasswordResetEmail(auth, email)
        .then(() => {
          setSent(true);
          setSending(false);
        })
        .catch((err) => {
          setSending(false);
          toast.error("This email doesn't exist in our records.");
        });
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
          {sent ? (
            <h1>
              A link with instructions to reset your password has been sent to
              your email
            </h1>
          ) : (
            <>
              {sending ? (
                <h1>Loading ....</h1>
              ) : (
                <>
                  <h2>Forgotten your password?</h2>
                  <h3>Don't worry, we will help you</h3>

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

                  <Button onClick={resetPasswordRequest} width="100%">
                    Send
                  </Button>

                  <Link to="/login">
                    <div>Back to login</div>
                  </Link>
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

export default ResetPassword;
