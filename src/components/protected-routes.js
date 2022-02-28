import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("login", uid);
        setLoggedIn(true);
      } else {
        console.log("logout");
        setLoggedIn(false);
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [auth, navigate]);

  if (!loggedIn) return null;
  return children;
}

export default ProtectedRoutes;
