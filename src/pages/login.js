import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import InputField from "../components/validation/input-field";
import RedirectLink from "../components/validation/redirect-link";
import {
  ValidationBackground,
  StyledForm,
  StyledFormHeading,
  StyledSubmit,
  StyledInput,
} from "../components/validation/styles";
import { loginUser } from "../redux/user/userActions";
import { CircularProgress } from "@mui/material";

function Login() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = ({ email, password }) => {
    setLoading(true);
    dispatch(loginUser(email, password));
    setLoading(false);
  };

  return (
    <ValidationBackground>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFormHeading>Welcome back!</StyledFormHeading>
        <InputField label="Email or phone number">
          <StyledInput
            type="email"
            {...register("email", { required: true, minLength: 5 })}
          />
        </InputField>
        <InputField label="Password">
          <StyledInput
            type="password"
            {...register("password", { required: true, minLength: 5 })}
          />
        </InputField>
        <RedirectLink
          linkText="Forgot your password?"
          href={"/forgot-password"}
        />
        <StyledSubmit type="submit">
          {loading ? (
            <CircularProgress size={20} thickness={6} sx={{ color: "#FFF" }} />
          ) : (
            "Login"
          )}
        </StyledSubmit>
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
