import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const DarkTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} arrow />
))((props) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: props.theme.palette.common.black,
    color: "#c8c8c8",
    fontSize: props?.medium === "true" ? 13 : 15,
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 700,
    padding: "6px 10px",
  },

  [`& .${tooltipClasses.arrow}::before`]: {
    backgroundColor: props.theme.palette.common.black,
  },
}));

function CustomTooltip(props) {
  return (
    <DarkTooltip {...props} disableInteractive>
      {props.children}
    </DarkTooltip>
  );
}

export default CustomTooltip;
