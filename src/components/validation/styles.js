import styled from "styled-components";

const ValidationBackground = styled.main`
  display: flex;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.blue};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.formDark};
  max-width: 480px;
  width: 480px;
  margin: auto;
  padding: 30px;
  border-radius: 3px;
`;

const StyledFormHeading = styled.h1`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  font-size: 26px;
`;

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const StyledFieldInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  > :nth-child(2) {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const StyledInput = styled.input`
  min-width: unset;
  flex: 1;
  background-color: ${(props) => props.theme.colors.dark};
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 3px;
  padding: 12px;
  color: ${(props) => props.theme.colors.gray};
  font-size: 14px;
  outline: 1px solid transparent;
  transition: outline-color 200ms ease-in-out;
  &:focus {
    border-color: transparent;
    outline-color: ${(props) => props.theme.colors.blue};
  }
`;

const StyledSubmit = styled.button`
  padding: 15px 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.blue};
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 100ms ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.colors.darkBlue};
  }
`;

const StyledLabel = styled.label`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.gray};
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const StyledLink = styled.small`
  margin-top: 10px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.darkGray};
  a {
    color: ${(props) => props.theme.colors.lightBlue};
  }
`;

const StyledDropdownList = styled.ul`
  display: none;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 100%;
  padding: 0 15px;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.formDark};
  border-radius: 3px;
  max-height: 220px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.veryDark};
    border-radius: 5px;
  }
  > li {
    cursor: pointer;
    padding: 10px 0;
    &:hover {
      background-color: ${(props) => props.theme.colors.dark};
    }
  }
`;

const StyledDropdownInput = styled(StyledInput).attrs({
  type: "text",
  placeholder: "Select",
})`
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.black} !important;
  width: 100%;
  &:focus {
    ~ .arrow-icon {
      transform: rotate(180deg);
    }
    ~ ${StyledDropdownList} {
      display: flex;
    }
  }
`;

const StyledDropdown = styled.div`
  position: relative;
  > .arrow-icon {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    color: ${(props) => props.theme.colors.gray};
    pointer-events: none;
    transition: transform 100ms ease-in-out;
  }
`;

export {
  ValidationBackground,
  StyledForm,
  StyledFormHeading,
  StyledField,
  StyledFieldInputs,
  StyledInput,
  StyledSubmit,
  StyledLabel,
  StyledLink,
  StyledDropdown,
  StyledDropdownInput,
  StyledDropdownList,
};
