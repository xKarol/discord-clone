import { useState, createContext } from "react";
import { MAIN, ADD_CHANNEL } from "../constants/channel-modal-pages";

const NewChannelContext = createContext(null);
export { NewChannelContext };

export default function NewChannelProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(MAIN);
  const [selectedAvatar, setSelectedAvatar] = useState("");

  const pages = [MAIN, ADD_CHANNEL];

  const changePage = (page) => {
    const index = pages.indexOf(page);
    if (index === -1) return;
    setPage(pages[index]);
  };
  return (
    <NewChannelContext.Provider
      value={{
        page,
        changePage,
        open,
        setOpen,
        selectedAvatar,
        setSelectedAvatar,
      }}
    >
      {children}
    </NewChannelContext.Provider>
  );
}
