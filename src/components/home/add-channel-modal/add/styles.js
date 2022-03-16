import styled from "styled-components";

const StyledAvatar = styled.div`
  width: 80px;
  height: 80px;
  border: 2px dashed ${(props) => props.theme.colors.dark};
  border: ${(props) => props.overflow && "none"};
  border-radius: 50%;
  margin: auto;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  overflow: ${(props) => (props.overflow ? "hidden" : "unset")};
  &:after {
    content: "+";
    position: absolute;
    top: 0;
    right: 0;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    font-size: 20px;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.blue};
    display: ${(props) => (props.overflow ? "none" : "flex")};
    align-items: center;
    justify-content: center;
  }
`;

const StyledAvatarText = styled.span`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.dark};
  font-size: 12px;
  font-weight: 800;
`;

const StyledPreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export { StyledAvatar, StyledAvatarText, StyledPreviewImage };
