import React from "react";
import { styled } from "@mui/system";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

const primaryDark = "#1D394F";
const primaryPale = "#F6F8F8";
const primaryLight = "#E0E7EB";

const BaseSwitch = styled(Switch)({
  width: 45,
  height: 22,
  padding: 0,
  margin: 10,
  display: "flex",
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(23px)",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: primaryPale,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 18,
    height: 18,
    borderRadius: "25px",
    backgroundColor: primaryDark,
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    borderRadius: "25px",
    border: `1px solid ${primaryLight}`,
    backgroundColor: primaryPale,
    boxSizing: "border-box",
  },
});

const SwitchWithIcons = styled(BaseSwitch)({
  "& .MuiSwitch-track": {
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
      top: 11,
    },
  },
  "& .MuiSwitch-thumb:before": {
    content: "''",
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="white" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zm-4-4v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V9c0-1.11-.9-2-2-2H9v2h4v2h-2v2h2v2H9v2h4c1.1 0 2-.89 2-2"/></svg>')`,
  },
  "& .MuiSwitch-switchBase": {
    "&.Mui-checked": {
      "& .MuiSwitch-thumb:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="white" d="M19.04 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16h-14V5h14zm-6-2h2V7h-2v4h-2V7h-2v6h4z" /></svg>')`,
      },
    },
  },
});

const YearToggle = ({ switchContract, setContract }) => {
  const handleSwitchChange = () => {
    setContract((switchContract) => !switchContract);
  };

  return (
    <div>
      <FormControlLabel
        control={
          <SwitchWithIcons
            checked={switchContract}
            onChange={handleSwitchChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Yearers"
      />
    </div>
  );
};

export default YearToggle;
