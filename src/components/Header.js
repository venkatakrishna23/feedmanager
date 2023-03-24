import React from 'react';
import '../StylesSheet/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InstallMobileSharpIcon from '@mui/icons-material/InstallMobileSharp';
import HealthAndSafetySharpIcon from '@mui/icons-material/HealthAndSafetySharp';
import AddAlarmSharpIcon from '@mui/icons-material/AddAlarmSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';


function Header() {

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <InstallMobileSharpIcon />

        </IconButton>
        <h4>Feed</h4>

        <IconButton>
          <AddAlarmSharpIcon />

        </IconButton>
        <h4>Communities</h4>

      </div>
      <div className="header__center">
        <IconButton>
          <HealthAndSafetySharpIcon />

        </IconButton>
        <h4>HEALTHNEST</h4>

      </div>
      <div className="header__right">

        {/* <IconButton>
          <AddIcon />
        </IconButton> */}
        <div className="header__input">
          <SearchIcon fontSize="small" />
          <input placeholder="Search" type="text" />
        </div>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <AccountCircleSharpIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
