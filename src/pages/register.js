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
import { months } from "../utils/month-names";

function Register() {
  const currentYear = new Date().getFullYear();

  console.log(currentYear);
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
            {[...new Array(31)].map((_, index) => (
              <li key={index}>{index + 1}</li>
            ))}
          </Dropdown>
          <Dropdown>
            {months.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </Dropdown>
          <Dropdown>
            {[...new Array(160)].map((_, index) => {
              if (currentYear - index < 1870) return null;
              return <li key={index}>{currentYear - index}</li>;
            })}
          </Dropdown>
        </InputField>
        <StyledSubmit type="submit">Continue</StyledSubmit>
        <RedirectLink linkText="Already have an account?" href={"/login"} />
      </StyledForm>
    </ValidationBackground>
  );
}

export default Register;
