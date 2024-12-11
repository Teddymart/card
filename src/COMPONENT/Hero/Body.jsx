import { Button } from "@mui/material";
import "./Body.css"
import React from 'react'
import { Link } from "react-router-dom";

const Body = ({title = "this my website", btn }) => {
  return (
    <div className="major">
        <marquee behavior="" direction="" >
          <h1>{title}</h1>
        </marquee>
        <div className="hero-body">
        <Link to="Post">
        <Button>{btn}</Button>
        </Link>

        <Link to="/letschat">
        {" "}
        <Button>Lets start</Button>{" "}
        </Link>
        {/* <Link to="/Register">
        {" "}
        <Button></Button>
        </Link> */}
        </div>
    </div>
  );
};

export default Body