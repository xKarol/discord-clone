import InputField from "../../../validation/input-field";
import { StyledInput } from "../../../validation/styles";
import {
  StyledContainer,
  StyledFooter,
  StyledHeading,
  StyledDescription,
  StyledButton,
} from "../styles";
import ServerIcon from "./server-icon";

function Add() {
  return (
    <>
      <StyledContainer>
        <StyledHeading id="modal-modal-title">
          Customize your Server
        </StyledHeading>
        <StyledDescription id="modal-modal-description">
          Give your new server a personality with a name and an icon. You can
          always change it later.
        </StyledDescription>

        <ServerIcon />
        <InputField label="Server Name">
          <StyledInput type="text" light defaultValue="Karol's server" />
        </InputField>
      </StyledContainer>
      <StyledFooter row>
        <StyledButton transparent>Back</StyledButton>
        <StyledButton>Create</StyledButton>
      </StyledFooter>
    </>
  );
}

export default Add;
