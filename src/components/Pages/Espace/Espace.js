import React from "react";
import NavBarApp from "../../NavBarApp";
import Menu from "../Menu/Menu";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Restaurant from "../Restaurant/Restaurant";
import Commande from "../Commande/Commande";
function Espace() {
  return (
    <div>
      <NavBarApp />
      Section ESpace
      {/* <Router>
       
        <Switch>
          <Route path="/menu" exact component={Menu} />
          <Route path="/restaurant" exact component={Restaurant} />
          <Route path="/commande" exact component={Commande} />
        </Switch>
      </Router> */}
    </div>
  );
}
export default Espace;
