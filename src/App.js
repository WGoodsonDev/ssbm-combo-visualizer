import './App.css';
import { Switch } from 'react-router-dom';
import AppRoute from "./util/AppRoute";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";


function App() {
  return (
    <div className="App">
      <Switch>
        <AppRoute exact path={"/"} component={Home} layout={LayoutDefault}/>
      </Switch>

    </div>
  );
}

export default App;
