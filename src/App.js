
import './App.css';
import {BrowserRouter as Router , Switch , Route, Link} from "react-router-dom"; 
import Header from "./Header";
import Home from './Home';

function App() {
  return (
    <Router>
    <div className = "App">
      <Switch>
         <Route path = "/checkout"> 
         <Header/>
           <h1>Checkout</h1>
         </Route>
         <Route path = "/">
           <Header/>
            <Home/>

         </Route>

      </Switch>

    </div>
    </Router>
    
  );
}

export default App;
