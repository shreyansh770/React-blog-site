import { useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { auth, signInWithGoogle } from "./firebase";

let Login = (props) => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        let { displayName, email, uid } = user;
        props.handleUser({ displayName, email, uid });
      } else {
        props.handleUser(user);
      }
    });
  }, []);

  return (
    <div>
      {props.user ? (
        <Redirect to="/myblogs" />
      ) : (
        <div>
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
                  {/* <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/myblogs">
                    My Blogs
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/addblog" aria-current="page">
                    Add New Blog
                  </Link>
                </li> */}
                </ul>
                <form class="d-flex">
                  <Link to="/login" className="btn btn-primary">
                    Sign up
                  </Link>
                </form>
              </div>
            </div>
          </nav>
          {/* {props.user ? <Redirect to="/user"/> : ""} */}
          <button
            class="btn btn-primary"
            onClick={signInWithGoogle}
            type="submit"
          >
            Sign in with Google
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
