import React, {useRef, useState} from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../Context";
import Signup from "./Signup";
import { Link, useHistory } from "react-router-dom";


const Login =()=> {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

  
    async function handleSubmit(e) {
      e.preventDefault()
  
      try {
        setError("")
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        history.push("/")
      } catch {
        setError("Failed to log in")
      }
  
      setLoading(false)
    }

  return (
      <React.Fragment>
          <Card.Body>
          <h1 className="text-center mb-4">Log In</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>
                  <Button disabled={loading} className="w-100" type="submit">Log In</Button>
              </Form>
             
          </Card.Body>
          <div className="w-100 text-center mt-2">
              Create Account <Link to="/Signup">Sign Up</Link>
          </div>

      </React.Fragment>
  )
}

export default Login;
