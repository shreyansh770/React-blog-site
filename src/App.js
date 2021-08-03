import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router ,Route,Switch, useHistory} from 'react-router-dom'
import Login from "./Login";
import Myblogs from "./Myblogs";
import AddBlog from "./AddBlog";


function App() {


  let [login,setLogin] = useState(null);



  return (
     <>
       

        <Router>
           <Switch>
              <Route path="/myblogs">
              <Navbar user={login}/>
                  <Myblogs user={login}/>
              </Route>           
              <Route path="/login">
              <Navbar user={login}/>
                <Login handleUser={setLogin} user={login}/>
              </Route>

              <Route path="/addblog">
              <Navbar user={login}/>
                <AddBlog user={login}/>
              </Route>
           </Switch>
        </Router>

     </>
  );
}

export default App;