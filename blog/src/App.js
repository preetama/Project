import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import Css from "./Screens/Css";
import ReactDom from "./Screens/ReactDom";
import ReactHooks from "./Screens/ReactHooks";
import JavaScript from "./Screens/JavaScript";
import JavaScriptDom from "./Screens/JavaScriptDom";
import JavaScriptBom from "./Screens/JavaScriptBom";
import Html from "./Screens/Html";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>

        <Route path="/css">
          <Css />
        </Route>

        <Route path="/reactdom">
          <ReactDom />
        </Route>

        <Route path="/reacthooks">
          <ReactHooks />
        </Route>

        <Route path="/javascript">
          <JavaScript />
        </Route>

        <Route path="/javascriptdom">
          <JavaScriptDom />
        </Route>

        <Route path="/bom">
          <JavaScriptBom />
        </Route>

        <Route path="/html">
          <Html />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
