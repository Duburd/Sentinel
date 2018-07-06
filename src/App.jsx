import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Admin from './views/admin.jsx';
import Login from './views/login.jsx';

const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/admin" component={Admin} />
      <Route path="/topics" component={Topics} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
);

const bgStyle = {
  backgroundImage: "url('./Images/AdobeStock_64718583.jpeg')",
  backgroundSize: "cover",
  backgroundRepeat: "repeat-x",
  height: "800px",
}


const Home = () => (
  <div style={bgStyle}>
    <div>
    <div className="tempText">
      <h1 className="landing_rowMainText">Test test test test test test</h1>
      <Link to="/admin"><button className="actionButton">Start Here</button></Link>
      </div>
    </div>
  </div>
);


const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default BasicExample;