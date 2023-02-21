import { PropsWithChildren, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import Spinner from "../Spinner";
import { Shell } from "../styled/Shell";
import { SecondaryBox } from "../styled/SecondaryBox";
import MainLogo from "../MainLogo";
import { PrimaryBox } from "../styled/PrimaryBox";
import { Container } from "../styled/Container";
import { SmallContainer } from "../styled/SmallContainer";

interface Props extends PropsWithChildren {}

const Auth: React.FC<Props> = (props) => {
  const { children } = props;
  // const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        navigate("/dashboard");
        setLoading(false);
      } else {
        console.log(user);
        setLoading(false);
        // navigate("/");
      }
    });

    return unsubscribe;
  }, [auth]);

  return (
    <div>
      {loading && (
        <aside style={{ textAlign: "center", marginTop: "10rem" }}>
          <Spinner />
        </aside>
      )}
      {!loading && children}
    </div>
  );
};

export default Auth;
