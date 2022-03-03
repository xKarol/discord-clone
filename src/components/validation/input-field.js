import { StyledField, StyledFieldInputs, StyledLabel } from "./styles";

function InputField({ error, label, children }) {
  const errorMessage = error?.message;
  return (
    <StyledField>
      <StyledLabel error={!!errorMessage}>
        {label}
        {errorMessage && <span> - {errorMessage}</span>}
      </StyledLabel>
      <StyledFieldInputs>{children}</StyledFieldInputs>
    </StyledField>
  );
}

export default InputField;
