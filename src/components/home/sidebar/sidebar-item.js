import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { StyledSidebarItem, StyledSidebarItemBox } from "./styles";
import { styled } from "@mui/material/styles";

const DarkTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 700,
    padding: "5px 10px",
  },
}));

function SidebarItem(props) {
  return (
    <DarkTooltip
      {...props}
      title={props.name}
      disableInteractive
      placement="right"
    >
      <StyledSidebarItemBox>
        <StyledSidebarItem color={props.color}>
          {props.children}
        </StyledSidebarItem>
      </StyledSidebarItemBox>
    </DarkTooltip>
  );
}

export default SidebarItem;
