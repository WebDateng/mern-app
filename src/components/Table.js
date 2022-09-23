import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlineUserAdd, AiFillDelete } from "react-icons/ai";

const TableList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    allUsers();
  }, []);

  const allUsers = async () => {
    try {
      const response = await axios.get("https://mern-fullstack-server.herokuapp.com/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    await axios.delete(`https://mern-fullstack-server.herokuapp.com/user/${id}`);
    allUsers();
  };

  return (
    <>
      <Button href="/create" className="mb-3">
        <AiOutlineUserAdd /> Add User
      </Button>
      <Table bordered striped hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={user._id}>
              <td>{i + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className="text-center">
                <Button size="sm" href={`/user/${user.name}/edit`} variant="warning" className="me-3">
                  <MdModeEditOutline /> Edit
                </Button>
                <Button size="sm" variant="danger" onClick={() => deleteUser(user._id)}>
                  <AiFillDelete /> Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableList;
