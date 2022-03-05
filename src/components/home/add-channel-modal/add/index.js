import { CircularProgress } from "@mui/material";
import { useContext, useState } from "react";
import InputField from "../../../validation/input-field";
import { StyledInput } from "../../../validation/styles";
import {
  StyledContainer,
  StyledFooter,
  StyledHeading,
  StyledDescription,
  StyledButton,
  StyledBox,
} from "../styles";
import ServerIcon from "./server-icon";
import { useDispatch, useSelector } from "react-redux";
import { createNewChannel } from "../../../../redux/channels/channelActions";
import { NewChannelContext } from "../../../../context/new-channel-context";
import { MAIN } from "../../../../constants/channel-modal-pages";

function Add() {
  const [pending, setPending] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [channelName, setChannelName] = useState(`${user.username}'s server`);
  const dispatch = useDispatch();
  const { setOpen, changePage } = useContext(NewChannelContext);

  const handleCreateChannel = async () => {
    if (pending) return;
    try {
      setPending(true);
      dispatch(createNewChannel(channelName));
    } finally {
      setPending(false);
      setOpen(false);
    }
  };

  return (
    <StyledBox>
      <StyledContainer>
        <StyledHeading id="modal-modal-title">
          Customize your Server
        </StyledHeading>
        <StyledDescription id="modal-modal-description">
          Give your new server a personality with a name and an icon. You can
          always change it later.
        </StyledDescription>

        <ServerIcon />
        <InputField label="Server Name">
          <StyledInput
            type="text"
            light
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
          />
        </InputField>
      </StyledContainer>
      <StyledFooter row>
        <StyledButton back onClick={() => changePage(MAIN)}>
          Back
        </StyledButton>
        <StyledButton next onClick={handleCreateChannel}>
          {pending ? <CircularProgress size={20} thickness={6} /> : "Create"}
        </StyledButton>
      </StyledFooter>
    </StyledBox>
  );
}

export default Add;
