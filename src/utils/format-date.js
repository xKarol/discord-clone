import moment from "moment";

export const formatMessageDate = (date) => {
  return moment(date, "hh:mm:ss").fromNow();
};
