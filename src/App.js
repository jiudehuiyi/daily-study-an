import React from 'react';
import './App.css';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import Buttons from "./Buttons";
import Context from "./createContext/Context.jsx";
import LocContext from "./HocComponentAndRenderProps/LocContext.jsx";
import HashRouter from "./HashRouter";
class App extends React.Component{

  
  render(){
    return (
      <div className="App">
       <Router>
          <Route  path="/"component={Buttons} />
            <Switch >
              
              <Route  path="/context" component={Context} />
              <Route  path="/locContext" component={LocContext} />
              <Route  path="/hashRouter" component={HashRouter} />
            </Switch>
        
       </Router>

     
      </div>
    );
  }
}




export default App;




