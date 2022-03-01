import { StyledOptions, StyledLabel, StyledScrollbar } from "./styles";
import {
  StyledFooter,
  StyledHeading,
  StyledDescription,
  StyledContainer,
  StyledButton,
} from "../styles";
import Option from "./option";

function Main() {
  return (
    <>
      <StyledContainer>
        <StyledHeading id="modal-modal-title">Create a Server</StyledHeading>
        <StyledDescription id="modal-modal-description">
          Your server is where you and your friends hang out. Make yours and
          start talking.
        </StyledDescription>
      </StyledContainer>
      <StyledScrollbar>
        <Option text="Create My Own" image="/images/magic-wand.png" />
        <StyledLabel>Start from template</StyledLabel>
        <StyledOptions>
          <Option text="Gaming" image="/images/controller.png" />
          <Option text="School Club" image="/images/school.png" />
          <Option text="Study group" image="/images/backpack.png" />
          <Option text="Friends" image="/images/people.png" />
        </StyledOptions>
      </StyledScrollbar>
      <StyledFooter>
        <h5>Have an invite already?</h5>
        <StyledButton>Join a server</StyledButton>
      </StyledFooter>
    </>
  );
}

export default Main;
