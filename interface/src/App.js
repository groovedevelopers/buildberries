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

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function AppRoutes(){
  return (
    <Switch>

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
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    
  );
}

export default App;
