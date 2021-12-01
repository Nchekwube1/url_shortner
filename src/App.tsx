import Body from "./Body";
import Head from "./Head";
import Url from "./url";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
// import "./sass/app.css";
function App() {
  return (
    <Router>
      <div className="relative body">
        <Head />
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/:id" component={Url} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
