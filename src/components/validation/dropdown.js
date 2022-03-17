import {
  StyledDropdownInput,
  StyledDropdown,
  StyledDropdownList,
} from "./styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRef, useState } from "react";

function Dropdown({ children }) {
  const [value, setValue] = useState("");
  const dropdownRef = useRef(null);

  const handleClick = (e) => {
    setValue(e.target.innerText);
    dropdownRef.current.blur();
  };

  return (
    <StyledDropdown ref={dropdownRef}>
      <StyledDropdownInput value={value} readOnly />
      <KeyboardArrowDownIcon className="arrow-icon" />
      <StyledDropdownList onClick={(e) => handleClick(e)}>
        {children}
      </StyledDropdownList>
    </StyledDropdown>
  );
}

export default Dropdown;
