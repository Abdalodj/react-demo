import './App.css';
import Counter from "./components/counter";
import About from "./components/about"
import Gallery from "./components/gallery/gallery"
import { Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
      <Router>
          <nav className="navbar navbar-expand navbar-brand navbar-dark bg-primary">
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                      <Link className="nav-link" to="/home">Home</Link>
                  </li>
                  <li className="nav-item active">
                      <Link className="nav-link" to="/counter">Counter</Link>
                  </li>
                  <li className="nav-item active">
                      <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item active">
                      <Link className="nav-link" to="/gallery">Gallery</Link>
                  </li>
              </ul>
          </nav>
          <div className="container">
              <Switch>
                  <Route active path="/home" component={Counter}/>
                  <Route exact path="/counter" component={Counter}/>
                  <Route path="/about" component={About}/>
                  <Route path="/gallery" component={Gallery}/>
                  <Route path="/gallery" component={Gallery}/>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
