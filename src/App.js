import {Switch, Route} from "react-router-dom";
import "./App.css";

// Importing pages 
import {question} from "./pages/Question/question";
import { congrats } from "./pages/Congrats/congrats";

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/question" component={question} />
        <Route exact path="/congrats" component={congrats} />
      </Switch>
    </div>
  );
}

export default App;
