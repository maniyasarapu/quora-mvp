import React from "react";
import "./Navbar.css";
import mani from "../images/quora_img.png";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import Modal from "react-modal";
import { Avatar, Button } from "@material-ui/core";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_icons">
      <img src={mani} alt="quora" />
      <div className="navbar_icon">
          <HomeIcon />
      </div>
      <div className="navbar_icon">
          <FeaturedPlayListOutlinedIcon/>
      </div>
      <div className="navbar_icon">
          <AssignmentTurnedInOutlinedIcon/>
      </div>
      <div className="navbar_icon">
          <PeopleAltOutlinedIcon/>
      </div>
      <div className="navbar_icon">
          <NotificationsOutlinedIcon/>
      </div>
      </div>
      <div className="navbar_search">
        <SearchIcon />
        <input placeholder="search quora" type="text"/>
      </div>
      <div className="navbar_info" >
        <div className="navbar_try">
        <Button>Try Quora+</Button>
        </div>
          <div className="navbar_avatar">
              <Avatar />
          </div>
       <div className="icon">
       <LanguageIcon />
       </div>
          <div className="navbar_add">
          <Button>Add Question</Button>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
