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

function Register() {
  return (
    <ValidationBackground>
      <StyledForm>
        <StyledFormHeading>Create an account</StyledFormHeading>
        <InputField label="Email">
          <StyledInput type="email" />
        </InputField>
        <InputField label="Username">
          <StyledInput type="text" />
        </InputField>
        <InputField label="Password">
          <StyledInput type="password" />
        </InputField>
        <InputField label="Date of birth">
          <Dropdown>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </Dropdown>
          <Dropdown>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </Dropdown>
          <Dropdown>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </Dropdown>
        </InputField>
        <StyledSubmit type="submit">Continue</StyledSubmit>
        <RedirectLink linkText="Already have an account?" href={"/login"} />
      </StyledForm>
    </ValidationBackground>
  );
}

export default Register;
