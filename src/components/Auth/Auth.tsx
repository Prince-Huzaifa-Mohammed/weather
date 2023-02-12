import { PropsWithChildren, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";

interface Props extends PropsWithChildren {}

const Auth: React.FC<Props> = (props) => {
  const { children } = props;
  // const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    CheckAuth();
  }, [auth]);

  const CheckAuth = onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false);
    } else {
      navigate("/");
    }
  });

  if (loading) return <p>Loading ....</p>;

  return <>{children}</>;
};

export default Auth;
