import styled from "styled-components";

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
  border: 1px solid #e6e6e6;
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

const StyledLabel = styled.small`
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

export {
  StyledOptions,
  StyledOption,
  StyledOptionImage,
  StyledLabel,
  StyledScrollbar,
};
