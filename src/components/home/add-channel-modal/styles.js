import styled from "styled-components";

const StyledMainBox = styled.div`
  position: relative;
  max-width: 400px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.dark};
  margin: auto;
  padding-top: 25px;
  display: flex;
  outline: none;
  border-radius: 3px;
  overflow: hidden;
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

const StyledBox = styled.div`
  min-width: 400px;
  display: flex;
  flex-direction: column;
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

const MainButton = styled.button.attrs({ type: "button" })`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.darkGray};
  border-radius: 3px;
  padding: 10px 0;
  border: none;
  cursor: pointer;
  max-height: 35px;
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 100ms ease-in-out;
`;

const StyledButton = styled(MainButton)`
  width: 100%;
  margin-top: 10px;
  //back btn
  background-color: ${(props) => props.back && "transparent"};
  color: ${(props) => props.back && props.theme.colors.black};
  width: ${(props) => props.back && "unset"};
  //next btn
  background-color: ${(props) => props.next && props.theme.colors.blue};
  color: ${(props) => props.next && props.theme.colors.white};
  width: ${(props) => props.next && "unset"};
  margin-left: ${(props) => props.next && "auto"};
  padding-left: ${(props) => props.next && "25px"};
  padding-right: ${(props) => props.next && "25px"};

  &:hover {
    background-color: ${(props) => props.theme.colors.dark};
    background-color: ${(props) => props.back && "unset"};
    background-color: ${(props) => props.next && props.theme.colors.darkBlue};
  }
`;

export {
  StyledMainBox,
  StyledBox,
  StyledContainer,
  StyledFooter,
  StyledHeading,
  StyledDescription,
  StyledButton,
};
