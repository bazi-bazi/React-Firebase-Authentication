import React from 'react';
import { Container } from 'react-bootstrap';
import  Signup  from './Signup';
import Home from "./Home";
import Login from "./Login";
import { AuthProvider } from "../Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    
      <Container className="d-flex align-items-center justify-content-center"
       style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{maxWidth: "600px"}}>
        <Router>
          <AuthProvider>
            <Switch>
             <Route exact path="/" component={Home} />
             <Route path="/signup" component={Signup} />
             <Route path="/login"  component={Login} />
            </Switch>
          </AuthProvider> 
        </Router>
      </div>
      </Container>
    
  );
}

export default App;
