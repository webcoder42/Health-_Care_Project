// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Authentication from './components/Authentication';
import ShiftManagement from './components/ShiftManagement';
import { fetchHello } from './services';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/authentication', state: { from: props.location } }} />
      )
    }
  />
);

const App = () => {
  // Assuming you have a state for user authentication status
  const isAuthenticated = true;

  return (
    <Router>
      <div>
        <h1>Healthcare Staffing Platform</h1>
        <Switch>
          <Route path="/authentication" component={Authentication} />
          <PrivateRoute
            path="/dashboard"
            component={Dashboard}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
            path="/shift-management"
            component={ShiftManagement}
            isAuthenticated={isAuthenticated}
          />
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
