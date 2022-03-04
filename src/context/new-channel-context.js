import { useState, createContext } from "react";

const NewChannelContext = createContext(null);
export { NewChannelContext };

export default function NewChannelProvider({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <NewChannelContext.Provider value={{ open, setOpen }}>
      {children}
    </NewChannelContext.Provider>
  );
}
