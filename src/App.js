import Dashboard from "./Components/Main/Entry/Dashboard";
import Notification from "./Components/Main/Entry/Notification";
import WorkFromHome from "./Components/Main/Entry/WFhome";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/notification" component={Notification} />
          <Route exact path="/work from home" component={WorkFromHome} />
        </Switch>
      </div>
    </>
  );
}

export default App;
