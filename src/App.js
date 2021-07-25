import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
//css
import "./css/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//js
import Admin from "./pages/admin/admin";
import Contact from "./pages/contact/contact";
import Main from "./pages/main/main";
import Auntification from "./pages/auth/auntification";



export default class App extends React.Component {
  constructor(props){
    super(props);
    this.createSite = this.createSite.bind(this);
  }
  createSite(site){
    let siteArr = [Admin, Contact, Main, Auntification];

  }
    render(){
        return(
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/auntification">Auntification</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/auntification">
            <Auntification />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
        )
    }
}