import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SclassRoom from "./components/SclassRoom";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import ClassRoom from "./components/ClassRoom";

function App() {
  return (
    <div className="App">
      <header>
        <h1>ClassRoom</h1>
      </header>
      <Nav />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/class" component={ClassRoom} />
        <Route path="/sclass" component={SclassRoom} />
      </Switch>
    </div>
  );
}

export default App;
