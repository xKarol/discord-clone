import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PendingScreen from "./pending-screen";

function ProtectedRoutes({ children }) {
  const [pending, setPending] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();
  let location = useLocation();
  const db = getFirestore();

  useEffect(() => {
    if (pending) return;
    if ((location === "/login" || location === "/register") && loggedIn) {
      navigate("/");
    }
  }, [location, loggedIn, navigate, pending]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("login", uid, user);
        getDoc(doc(db, "users", uid)).then((userData) => {
          console.log(userData.data());
          setLoggedIn(true);
          setPending(false);
        });
      } else {
        console.log("logout");
        setLoggedIn(false);
        setPending(false);
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [auth, navigate, db]);

  if (pending) return <PendingScreen />;
  return children;
}

export default ProtectedRoutes;
