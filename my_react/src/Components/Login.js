import React from "react";
import { Button, Form } from "react-bootstrap";

const Login = (props) => {
  const [username, setUsername] = React.useState("");
  const [result, setResult] = React.useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/api/v1/login").then((res) =>
      setResult(res.status)
    );
  };
  return (
    <>
      {result === false ? (
        <Form onSubmit={submitForm} id="userForm" key="userForm">
          <Form.Group controlId="formName" className="col-md-8">
            <Form.Label>Login</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              name="name"
              placeholder="Enter Username"
              required
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
            />
            <Button type="submit" size="sm" style={{ width: "100%" }}>
              Login
            </Button>
          </Form.Group>
        </Form>
      ) : (
        <h3>Welcome {username}</h3>
      )}
    </>
  );
};

export default Login;
