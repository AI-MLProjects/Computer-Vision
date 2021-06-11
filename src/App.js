import { Link, Route } from "react-router-dom";
// import Tabs from 'react-bootstrap/Tabs'
import './App.css';
import UpDown from './models/up-down/up-down';
import Namaskar from './models/namaskar/namaskar';
import MovingHands from './models/moving-hand/moving-hand';
import FaceMesh from './models/facemesh/facemesh'
function App() {
  return (
    <div>
      {/* <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example"> */}
        {/* <Tab eventKey="home" title="Home"> */}
          <Link to="/movinghands">Moving Hands</Link>
        {/* </Tab> */}
        {/* <Tab eventKey="profile" title="Profile"> */}
          <Link to="/namaskar">Namaskar</Link>
        {/* </Tab> */}
        {/* <Tab eventKey="contact" title="Contact" disabled> */}
          <Link to="/updown">Up and Down</Link>
          <Link to="/facemesh">Facemesh</Link>
        {/* </Tab> */}
      {/* </Tabs> */}
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li><Link to="/movinghands">Moving Hands</Link></li>
          <li><Link to="/namaskar">Namaskar</Link></li>
          <li><Link to="/updown">Up and Down</Link></li>
          <li><Link to="/facemesh">Facemesh</Link></li>
        </ul>
      </nav>

      { /* Route components are rendered if the path prop matches the current URL */}
      <Route path="/movinghands"><MovingHands /></Route>
      <Route path="/namaskar"><Namaskar /></Route>
      <Route path="/updown"><UpDown /></Route>
      <Route path="/facemesh"><FaceMesh /></Route>

      
    </div>

    

  );
}

export default App;
