import styled from "styled-components";

const StyledMessagesBox = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 0 20px;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.formDark};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.veryDark};
    border-radius: 5px;
    transition: background-color 100ms ease-in-out;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #111;
  }
`;

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const StyledMessage = styled.div`
  display: flex;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledMessageBox = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
`;

const StyledMessageHeader = styled.header`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
`;
const StyledMessageUsername = styled.div`
  color: ${(props) => props.theme.colors.white};
  margin-right: 10px;
`;

const StyledMessageDate = styled.time`
  font-size: 10px;
  color: ${(props) => props.theme.colors.gray};
`;

const StyledMessageText = styled.span`
  font-size: 14px;
  color: #f0f0f0;
`;

export {
  StyledContainer,
  StyledMessagesBox,
  StyledMessage,
  StyledMessageBox,
  StyledMessageDate,
  StyledMessageText,
  StyledMessageHeader,
  StyledMessageUsername,
};
