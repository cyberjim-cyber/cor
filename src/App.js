import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from './Components/Detail/Detail';

function App() {
  return (
    <div >

      <Router>
      <Header></Header>
      <Switch>
        

        <Route exact path="/">
        <Home></Home>
        </Route>

        <Route path="/detail/:id">
            <Detail></Detail>
        </Route>
        </Switch>
      </Router>
        
    </div>
  );
}

export default App;
