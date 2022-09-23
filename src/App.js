import React from "react";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TableList from "./components/Table.js";
import CreateUser from "./components/CreateUser.js";
import EditUser from "./components/EditUser.js";

const App = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Routes>
            <Route path="/" element={<TableList />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/user/:slug/edit" element={<EditUser />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
