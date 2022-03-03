import { CircularProgress } from "@mui/material";
import { useState } from "react";
import InputField from "../../../validation/input-field";
import { StyledInput } from "../../../validation/styles";
import {
  StyledContainer,
  StyledFooter,
  StyledHeading,
  StyledDescription,
  StyledButton,
} from "../styles";
import ServerIcon from "./server-icon";
import { useSelector } from "react-redux";
import { collection, addDoc, getFirestore } from "firebase/firestore";

function Add() {
  const [pending, setPending] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [serverName, setServerName] = useState(`${user.username}'s server`);

  const handleCreateServer = async () => {
    try {
      setPending(true);
      const db = getFirestore();
      await addDoc(collection(db, "channels"), {
        name: serverName,
      });
    } finally {
      setPending(false);
    }
  };

  return (
    <>
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
            value={serverName}
            onChange={(e) => setServerName(e.target.value)}
          />
        </InputField>
      </StyledContainer>
      <StyledFooter row>
        <StyledButton transparent>Back</StyledButton>
        <StyledButton onClick={handleCreateServer}>
          {pending ? <CircularProgress size={20} thickness={6} /> : "Create"}
        </StyledButton>
      </StyledFooter>
    </>
  );
}

export default Add;
