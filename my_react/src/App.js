import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Row,
  Col,
  Card,
  Table,
  Form,
  Button,
  Pagination,
} from "react-bootstrap";
import Login from "./Components/Login";
import Products from "./Components/Products";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Row style={{ width: "80%" }}>
          <Col md={4} style={{ borderRight: "1px solid #1abc9c" }}>
            <Login />
          </Col>

          <Col md={2}></Col>

          <Col md={6}>
            <Products />
          </Col>
        </Row>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
