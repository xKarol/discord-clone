import {
  StyledDropdownInput,
  StyledDropdown,
  StyledDropdownList,
} from "./styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Dropdown({children}) {
  return (
    <StyledDropdown>
      <StyledDropdownInput />
      <KeyboardArrowDownIcon className="arrow-icon" />
      <StyledDropdownList>
        {children}
      </StyledDropdownList>
    </StyledDropdown>
  );
}

export default Dropdown;
