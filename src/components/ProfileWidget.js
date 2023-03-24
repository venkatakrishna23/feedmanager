import React from 'react'
import '../StylesSheet/ProfileWidget.css'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { IconButton } from '@material-ui/core';

function ProfileWidget() {
  return (
    <div className="card profile-widget">
      <div className='profileIcon'>
        <IconButton>
          <AccountCircleSharpIcon fontSize="large" style={{ height: '50px', width: '50px' }} />
        </IconButton>
      </div>
      <div class="container">
        <h4><b>User</b></h4>
        <p style={{ color: '#04AA6D', fontSize: "12px", marginLeft: '2px' }}> <b>Posted Recently</b></p>
      </div>
    </div>

  )
}

export default ProfileWidget
