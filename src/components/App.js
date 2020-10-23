import React from 'react';
import { Container } from 'react-bootstrap';
import  Signup  from './Signup';
import Home from "./Home";
import Login from "./Login";
import { AuthProvider } from "../Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import updateProfile from"./updateProfile"


function App() {
  return (
    
      <Container className="d-flex align-items-center justify-content-center"
       style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{maxWidth: "600px"}}>
        <Router>
          <AuthProvider>
            <Switch>
             <PrivateRoute exact path="/" component={Home} />
             <PrivateRoute path="/update-profile" component={updateProfile} />
             <Route path="/signup" component={Signup} />
             <Route path="/login"  component={Login} />
             <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider> 
        </Router>
      </div>
      </Container>
    
  );
}

export default App;
