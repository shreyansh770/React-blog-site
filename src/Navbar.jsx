import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import { auth } from "./firebase";

let Navbar = (props) => {

  return (
    <div>
      {props.user ? (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Blogs
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/myblogs">
                    My Blogs
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/addblog" aria-current="page">
                    Add New Blog
                  </Link>
                </li>
                <li class="nav-item">
                <h3 class="nav-link" aria-current="page">
                    {props.user.displayName}
                  </h3>
                </li>
              </ul>
              <form class="d-flex">
                  <button 
                    to="/signup" 
                    className="btn btn-primary"
                    onClick={()=>{
                      auth.signOut();
                    }}
                    >Logout</button>
              </form>
            </div>
          </div>
        </nav>
      ) : (
          <Redirect to="/login"/>
      )}
    </div>
  );
};

export default Navbar;
