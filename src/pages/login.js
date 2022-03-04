import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import InputField from "../components/validation/input-field";
import RedirectLink from "../components/validation/redirect-link";
import {
  ValidationBackground,
  StyledForm,
  StyledFormHeading,
  StyledInput,
} from "../components/validation/styles";
import { loginUser } from "../redux/user/userActions";
import { isValidEmail, IsValidPassword } from "../utils/validation";
import { emailErrors, passwordErrors } from "../helpers/firebase-errors";
import Submit from "../components/validation/submit";

function Login() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const onSubmit = ({ email, password }) => {
    if (!isValidEmail(email) || !IsValidPassword(password)) {
      setError("email", {
        type: "manual",
        message: "Login or password is invalid",
      });
      setError("password", {
        type: "manual",
        message: "Login or password is invalid",
      });
    }
    setLoading(true);
    dispatch(loginUser(email, password));
    setLoading(false);
  };

  useEffect(() => {
    if (!user.error) return;
    let err = passwordErrors[user.error];
    if (err) {
      return setError("password", {
        type: "manual",
        message: err,
      });
    }
    err = emailErrors[user.error];
    if (err) {
      return setError("email", {
        type: "manual",
        message: err,
      });
    }
  }, [user.error, setError]);

  return (
    <ValidationBackground>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFormHeading>Welcome back!</StyledFormHeading>
        <InputField error={errors.email} label={"Email or phone number"}>
          <StyledInput
            type="email"
            {...register("email", {
              required: "This field is required",
            })}
          />
        </InputField>
        <InputField error={errors.password} label="Password">
          <StyledInput
            type="password"
            {...register("password", {
              required: "This field is required",
            })}
          />
        </InputField>
        <RedirectLink
          linkText="Forgot your password?"
          href={"/forgot-password"}
        />
        <Submit loading={loading}>Login</Submit>
        <RedirectLink
          extraText="Need an account?"
          linkText="Register"
          href={"/register"}
        />
      </StyledForm>
    </ValidationBackground>
  );
}

export default Login;
