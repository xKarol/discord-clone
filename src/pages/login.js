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

function Login() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  
  const onSubmit = ({ email, password }) => {
    dispatch(loginUser(email, password));
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
        <StyledSubmit type="submit">Login</StyledSubmit>
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
