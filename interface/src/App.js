// MAIN PAGES
import Home from "./pages/Home";
import Templates from './pages/Templates';
import Pricing from './pages/Pricing';

// OTHER PAGES
import About from './pages/About';
import Careers from './pages/Careers';
import Affiliates from "./pages/Affiliates";
import Domains from "./pages/Domains";
import EmailMarketing from "./pages/EmailMarketing";
import OnlineStore from "./pages/OnlineStore";
import HireExpert from "./pages/HireExpert";
import NewsStand from "./pages/NewsStand";
import HelpCenter from "./pages/HelpCenter";
import PointOfsales from "./pages/PointOfSales";
import Scheduling from "./pages/Scheduling";
import CreateAcount from "./pages/CreateAccount";
import Login from "./pages/Login";

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Switch>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/create-account">
        <CreateAcount />
      </Route>

      <Route path="/scheduling">
        <Scheduling />
      </Route>

      <Route path="/point-of-sales">
        <PointOfsales />
      </Route>

      <Route path="/help-and-support">
        <HelpCenter />
      </Route>

      <Route path="/gd-news-stand">
        <NewsStand />
      </Route>

      <Route path="/hire-an-expert">
        <HireExpert />
      </Route>

      <Route path="/online-store">
        <OnlineStore />
      </Route>

      <Route path="/email-marketing">
        <EmailMarketing />
      </Route>

      <Route path="/domains">
        <Domains />
      </Route>

      <Route path="/affiliates">
        <Affiliates />
      </Route>

      <Route path="/careers">
        <Careers />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/templates">
        <Templates />
      </Route>

      <Route path="/pricing">
        <Pricing />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>    
  );
}

export default App;
