import { useState } from "react";
import { StyledEmoticons } from "./styles";

const emoticons = [
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐ฅฐ",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐ค",
  "๐คฉ",
  "๐ค",
  "๐คจ",
  "๐",
  "๐",
  "๐",
  "๐คช",
];

function Emoticons() {
  const [iconIndex, setIconIndex] = useState(0);
  return (
    <StyledEmoticons
      onMouseLeave={() =>
        setIconIndex(iconIndex >= emoticons.length - 1 ? 0 : iconIndex + 1)
      }
    >
      {emoticons[iconIndex]}
    </StyledEmoticons>
  );
}

export default Emoticons;
