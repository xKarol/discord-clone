import { useEffect } from "react";
import { emailErrors, passwordErrors } from "../helpers/firebase-errors";

function useHandleError(errorCode, setError) {
  useEffect(() => {
    if (!errorCode) return;
    let err = passwordErrors[errorCode];
    if (err) {
      return setError("password", {
        type: "manual",
        message: err,
      });
    }
    err = emailErrors[errorCode];
    if (err) {
      return setError("email", {
        type: "manual",
        message: err,
      });
    }
  }, [errorCode, setError]);
  return null;
}

export default useHandleError;
