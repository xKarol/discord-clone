import { useState } from "react";
import { StyledEmoticons } from "./styles";

const emoticons = [
  "😃",
  "😂",
  "😁",
  "😅",
  "😆",
  "😉",
  "😊",
  "😋",
  "😎",
  "😍",
  "😘",
  "🥰",
  "😗",
  "😙",
  "😚",
  "🙂",
  "🤗",
  "🤩",
  "🤔",
  "🤨",
  "😛",
  "😜",
  "😝",
  "🤪",
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
