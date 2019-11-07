import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HeaderMenu from './HeaderMenu';
import InitView from './InitView';
import MainScreen from './MainScreen';
import SelectView from './SelectView';
import TravellHistory from './TravellHistory'
import TravellDetails from './TravellDetails'
import User from './User';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Router>
          <HeaderMenu></HeaderMenu>
          <Switch>
            {/* <Route path ="/" exact component={InitView}/> */}
            <Route path ="/" exact component={MainScreen}/>            
            <Route path ="/tecvago" exact component={MainScreen}/>
            <Route path ="/tecvago/user" exact component = {User}/>
            <Route path ="/tecvago/select" exact component={SelectView}/>
            <Route path ="/tecvago/history" exact component={TravellHistory}/>
            <Route path ="/tecvago/history/details" exact component={TravellDetails}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;