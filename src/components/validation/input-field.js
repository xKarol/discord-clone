import { StyledField, StyledFieldInputs, StyledLabel } from "./styles";

function InputField({ label, children }) {
  return (
    <StyledField>
      <StyledLabel>{label}</StyledLabel>
      <StyledFieldInputs>{children}</StyledFieldInputs>
    </StyledField>
  );
}

export default InputField;
