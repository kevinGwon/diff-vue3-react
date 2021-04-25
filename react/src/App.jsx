import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Params from './pages/Params';
import Inputs from './pages/Inputs';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/custom-hook-params">
            <Params />
          </Route>
          <Route path="/custom-hook-inputs">
            <Inputs />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
