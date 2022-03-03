import { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { fetchUserSuccess, logoutUser } from "../redux/user/userActions";
import { getUserById } from "../helpers/get-user";

function useAuth() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [pending, setPending] = useState(true);
  const auth = getAuth();
  const dispatch = useDispatch();
  const db = getFirestore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setPending(true);
        const uid = user.uid;
        const userData = await getUserById(db, uid);
        dispatch(fetchUserSuccess(userData));
        setLoggedIn(true);
        setPending(false);
      } else {
        dispatch(logoutUser());
        setLoggedIn(false);
        setPending(false);
      }
    });
    return () => unsubscribe();
  }, [auth, db, dispatch]);

  return { loggedIn, pending };
}

export default useAuth;
