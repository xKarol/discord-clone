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

const StyledHeader = styled.header`
  padding: 0 15px;
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

const StyledOptions = styled.ul`
  display: flex;
  flex-direction: column;
  > :last-child {
    margin-bottom: 0;
  }
`;

const StyledOption = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 5px;
  padding: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: background-color 100ms ease-in-out;
  margin-bottom: 7px;
  &:hover {
    background-color: #b9bbbe20;
  }
`;

const StyledOptionImage = styled.img`
  width: 35px;
  object-fit: contain;
  margin-right: 15px;
  pointer-events: none;
`;

const StyledLabel = styled.label`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.darkGray};
  font-weight: 800;
  font-size: 11px;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const StyledScrollbar = styled.div`
  max-height: 300px;
  overflow-y: scroll;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #36393f80;
    border-radius: 5px;
    margin-right: 2px;
  }
`;

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.lightGray};
  font-size: 24px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled.button.attrs({ type: "button" })`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.darkGray};
  border-radius: 3px;
  padding: 10px 0;
  width: 100%;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 100ms ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.colors.dark};
  }
`;

export {
  StyledBox,
  StyledHeader,
  StyledHeading,
  StyledDescription,
  StyledOptions,
  StyledOption,
  StyledOptionImage,
  StyledLabel,
  StyledScrollbar,
  StyledFooter,
  StyledButton,
};
