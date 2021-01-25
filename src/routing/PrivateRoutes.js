import React from "react";
import { Route, Switch } from "react-router-dom";
import Espace from "../components/Pages/Espace/Espace";
import Menu from "../components/Pages/Menu/Menu";
import Restaurant from "../components/Pages/Restaurant/Restaurant";
import Commande from "../components/Pages/Commande/Commande";
import Navigation from "../components/Navigation";
// import ComiteList from "../components/Comite/ComiteList";
// import Comite from "../components/Comite/Comite";
// import ComiteDetails from "../components/Comite/ComiteDetails";

const PrivateRoutes = () => (
  <div>
    {/* <Navigation /> */}
    <Switch>
      <Route path="/app" exact component={Espace} />

      <Route path="/menu" exact component={Menu} />
      <Route path="/restaurant" exact component={Restaurant} />
      <Route path="/commande" exact component={Commande} />
    </Switch>
  </div>
);

export default PrivateRoutes;
