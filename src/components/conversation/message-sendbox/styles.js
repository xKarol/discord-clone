import styled from "styled-components";
import { HideScrollbar } from "../../../styles";

const StyledMessageSendBox = styled.section`
  display: flex;
  margin-top: auto;
  height: 70px;
  padding-bottom: 25px;
`;

const StyledMessageSendInput = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 100%;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.lightDark};
  color: ${(props) => props.theme.colors.gray};
`;

const StyledInput = styled.textarea.attrs({})`
  flex: 1;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 12px 15px;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 15px;
  resize: none;
  &::placeholder {
    font-size: 15px;
  }
  ${HideScrollbar};
`;

const StyledRightIcons = styled.div`
  display: flex;
  align-items: center;
  > * {
    font-size: 20px;
    margin-left: 10px;
    cursor: pointer;
    transition: color 100ms ease-in-out;
    &:hover {
      color: #f0f0f0;
    }
  }
  > :first-child {
    margin-left: 0;
  }
`;

const StyledEmoticons = styled.span`
  /* font-size: 17px; */
  filter: grayscale(1);
  transition: filter 100ms ease-in-out, transform 50ms ease-in-out;
  &:hover {
    transform: scale(1.2);
    filter: grayscale(0);
  }
`;

export {
  StyledMessageSendBox,
  StyledRightIcons,
  StyledInput,
  StyledMessageSendInput,
  StyledEmoticons,
};
