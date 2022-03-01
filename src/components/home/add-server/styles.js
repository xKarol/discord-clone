import styled from "styled-components";

const StyledBox = styled.div`
  position: relative;
  max-width: 400px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.dark};
  margin: auto;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  outline: none;
  border-radius: 3px;
  > .close-icon {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.gray};
    transition: color 200ms ease-in-out;
    font-size: 26px;
    &:hover {
      color: ${(props) => props.theme.colors.black};
    }
  }
`;

const StyledContainer = styled.div`
  padding: 0 15px;
`;

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.lightGray};
  font-size: 24px;
  padding: 15px;
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  align-items: center;
`;

const StyledHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 10px;
`;

const StyledDescription = styled.p`
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
`;

const StyledButton = styled.button.attrs({ type: "button" })`
  color: ${(props) => (props.transparent ? "#000" : props.theme.colors.white)};
  background-color: ${(props) =>
    props.transparent ? "transparent" : props.theme.colors.darkGray};
  border-radius: 3px;
  padding: 10px 0;
  width: 100%;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 100ms ease-in-out;
  &:hover {
    background-color: ${(props) =>
      props.transparent ? null : props.theme.colors.dark};
  }
`;

export {
  StyledBox,
  StyledContainer,
  StyledFooter,
  StyledHeading,
  StyledDescription,
  StyledButton,
};
