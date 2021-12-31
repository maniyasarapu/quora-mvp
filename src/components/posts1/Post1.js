import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post1.css";
import dsa from "../images/dsa.png";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";

const Post1 = () => {
  return (
    <div className="post1">
      <div className="post1_clinet">
        <div className="post1_client_info">
          <Avatar />
          <h4>Username</h4>
          <p>
            <small>
              {" "}
              <span style={{ color: "blue" }}>follow</span>
            </small>
          </p>
        </div>
        <div className="post1_client_details">
          <p>Software Engineer at Infosys-jan 28</p>
        </div>
      </div>
      <div className="post1_qst">
        <h2>What are Data Structures?</h2>
        <p>
          Data Structures are a specialized means of organizing and storing data
          in computers in such a way that we can perform operations on the
          stored data more efficiently. Data structures have a wide and diverse
          scope of usage across the fields of Computer Science and Software
          Engineering.
        </p>
      </div>
      <div>
        <img src={dsa} alt="DSA" />
      </div>
      <div className="post1_footer">
        <div className="post1_action">
          <div className="post1_up">
            <ArrowUpwardOutlinedIcon />
            <p>5k.4</p>
            <ArrowDownwardOutlinedIcon />
          </div>
        </div>
          <RepeatOutlinedIcon />
          <ChatBubbleOutlineOutlinedIcon />
        <div className="post1_last">
          <MoreHorizOutlined />
        </div>
      </div>
    </div>
  );
};

export default Post1;
