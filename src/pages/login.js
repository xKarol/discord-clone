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
import Submit from "../components/validation/submit";
import { Navigate } from "react-router-dom";
import { HOME as ROUTE_HOME } from "../constants/routes";
import useHandleError from "../hooks/useHandleError";

function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useHandleError(user.error, setError);

  const onSubmit = async ({ email, password }) => {
    if (!isValidEmail(email) || !IsValidPassword(password)) {
      setError("email", {
        type: "manual",
        message: "Login or password is invalid",
      });
      setError("password", {
        type: "manual",
        message: "Login or password is invalid",
      });
      return;
    }
    await dispatch(loginUser(email, password));
  };

  if (user.loggedIn) return <Navigate to={ROUTE_HOME} replace={true} />;
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
        <Submit loading={isSubmitting}>Login</Submit>
        <RedirectLink
          extraText="Need an account?"
          linkText="Register"
          href={"/register"}
        />
        <span
          style={{
            marginTop: "5px",
            fontSize: "14px",
            color: "red",
          }}
        >
          This is fake Discord app
        </span>
      </StyledForm>
    </ValidationBackground>
  );
}

export default Login;
