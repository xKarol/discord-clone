import Dropdown from "../components/validation/dropdown";
import InputField from "../components/validation/input-field";
import RedirectLink from "../components/validation/redirect-link";
import {
  ValidationBackground,
  StyledForm,
  StyledFormHeading,
  StyledSubmit,
  StyledInput,
} from "../components/validation/styles";

function Login() {
  return (
    <ValidationBackground>
      <StyledForm>
        <StyledFormHeading>Welcome back!</StyledFormHeading>
        <InputField label="Email or phone number">
          <StyledInput type="email" />
        </InputField>
        <InputField label="Password">
          <StyledInput type="password" />
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
