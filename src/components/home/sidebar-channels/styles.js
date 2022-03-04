import styled from "styled-components";
import { HideScrollbar } from "../../../styles";

const StyledSidebar = styled.ul`
  display: flex;
  flex-direction: column;
  width: 80px;
  min-width: 80px;
  height: 100vh;
  align-items: center;
  background-color: ${(props) => props.theme.colors.veryDark};
  padding: 15px 0;
  padding-top: 5px;
  overflow-y: scroll;
  max-height: 100vh;
  ${HideScrollbar};
`;

const StyledSidebarItem = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #f0f0f0;
  background-color: ${(props) => props.color ?? props.theme.colors.lightDark};
  overflow: hidden;
  transition: border-radius 100ms ease-in-out;
  cursor: pointer;
`;

const StyledSidebarItemBox = styled.li`
  display: flex;
  margin-bottom: 15px;
  position: relative;
  width: 100%;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    ${StyledSidebarItem} {
      border-radius: 15px;
    }
    &::before {
      visiblity: visible;
      height: ${(props) => !props.active && "20px"};
      left: -6px;
    }
  }
  &::before {
    content: "";
    position: absolute;
    left: ${(props) => (props.active ? "-6px" : "-10px")};
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: ${(props) => (props.active ? "40px" : "0px")};
    border-radius: 3px;
    background-color: ${(props) => props.theme.colors.white};
    transition: all 100ms ease-in-out;
    visiblity: ${(props) => (props.active ? "visible" : "hidden")};
    display: ${(props) => props.noIndicator && "none"};
  }
  ${StyledSidebarItem} {
    border-radius: ${(props) => props.active && "15px"};
    background-color: ${(props) => props.active && props.activeColor};
    > * {
      color: ${(props) => props.active && props.theme.colors.white};
    }
  }
`;

export { StyledSidebar, StyledSidebarItemBox, StyledSidebarItem };
