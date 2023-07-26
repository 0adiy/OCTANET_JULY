import React, { useState } from "react";
import "../assets/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import img from "../assets/imp.png";

function Header({ setSearched }) {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
        <img
          className='header__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
          alt=''
          onClick={() => setSearched(false)}
        />
      </div>

      <div className='header__input'>
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder='Search'
          type='text'
        />
        <SearchIcon
          className='header__inputButton'
          onClick={() => setSearched(true)}
        />
      </div>

      <div className='header__icons'>
        <VideoCallIcon className='header__icon' />
        <AppsIcon className='header__icon' />
        <NotificationsIcon className='header__icon' />
        <Avatar alt='Imp' src={img} />
      </div>
    </div>
  );
}

export default Header;
