import React, {useRef, useState} from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../Context";


const Signup =()=> {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const signup = useAuth();
    const [ error, setError ] = useState("");
    const [ loading, setLoading ] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Password do not match");
        }

        try  {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError("Failed to create an account"); 
        }
        setLoading(false);

        
    }

  return (
      <React.Fragment>
          <Card.Body>
              <h1  className="text-center mb-4">Sign Up</h1>
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
                  <Form.Group id="password-confirmation">
                      <Form.Label>Password Confirmation</Form.Label>
                      <Form.Control type="password" ref={passwordConfirmRef} required />
                  </Form.Group>
                  <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
              </Form>
             
          </Card.Body>
          <div className="w-100 text-center mt-2">
              Already have an account? Log in
          </div>

      </React.Fragment>
  )
}

export default Signup;
  