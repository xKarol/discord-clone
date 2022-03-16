import { useEffect } from "react";

function useUpdateScroll(messageBoxRef, messages, loading) {
  useEffect(() => {
    if (loading) return;
    const element = messageBoxRef.current;
    element.scrollTo(0, element.scrollHeight);
  }, [messageBoxRef, messages, loading]);

  return null;
}

export default useUpdateScroll;
