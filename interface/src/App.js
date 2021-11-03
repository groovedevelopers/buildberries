// MAIN PAGES
import Home from "./pages/Home";
import Templates from './pages/Templates';
import Pricing from './pages/Pricing';

// OTHER PAGES
import About from './pages/About';
import Careers from './pages/Careers';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function AppRoutes(){
  return (
    <Switch>

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
