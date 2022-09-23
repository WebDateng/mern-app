import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const res = await axios.get(`https://mern-fullstack-server.herokuapp.com/user/${slug}`);
    setName(res.data.name);
    setEmail(res.data.email);
    setId(res.data._id);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    await axios.patch(`https://mern-fullstack-server.herokuapp.com/user/${id}`, {
      name,
      email,
    });
    navigate("/");
  };

  return (
    <div>
      <h1>Edit User</h1>
      <Form onSubmit={updateUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateUser;
