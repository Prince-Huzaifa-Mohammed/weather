import { PropsWithChildren, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { ColorRing } from "react-loader-spinner";

interface Props extends PropsWithChildren {}

const Auth: React.FC<Props> = (props) => {
  const { children } = props;
  // const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setLoading(false);
        navigate("/dashboard");
      } else {
        console.log(user);
        setLoading(false);
        // navigate("/");
      }
    });

    return unsubscribe;
  }, [auth]);

  if (loading)
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

  return <>{children}</>;
};

export default Auth;
