import React, { useState, useEffect } from "react";
import "./App.css";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [editId, setEditId] = useState(null);

  // Load users
  const loadUsers = () => {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  };

  useEffect(() => {
    loadUsers();
  }, []);


  const handleSubmit = () => {

    // Name validation
    if (name.trim() === "") {
      alert("Enter name");
      return;
    }

    // Email validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Enter valid email");
      return;
    }

    // Phone validation (only numbers, min 10 digits)
    if (!/^[0-9]+$/.test(number) || number.length < 10) {
      alert("Enter valid phone number");
      return;
    }

    const data = { name, email, number };

    if (editId) {
      fetch(`http://localhost:5000/users/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }).then(() => {
        setEditId(null);
        loadUsers();
      });
    } else {
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }).then(() => loadUsers());
    }

    setName("");
    setEmail("");
    setNumber("");
  };

  // Delete
  const deleteUser = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(() => loadUsers())
      .catch(err => console.log(err));
  };

  // Edit
  const editUser = (user) => {
    setName(user.name);
    setEmail(user.email);
    setNumber(user.number);
    setEditId(user.id);
  };

  return (
    <div className="container">
      <h1>User Management</h1>

      <div className="form">
        <input
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />


        <PhoneInput
          country={'in'}
          value={number}
          onChange={(value) => {
            // only numbers allowed
            const cleaned = value.replace(/[^0-9]/g, "");
            setNumber(cleaned);
          }}
        />

        <button onClick={handleSubmit}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

      <div className="list">
        {users.map(user => (
          <div key={user.id} className="row">
            <div className="info">
              <strong>{user.name}</strong><br />
              {user.email} | {user.number}
            </div>

            <div className="actions">
              <button className="edit" onClick={() => editUser(user)}>
                Edit
              </button>
              <button className="delete" onClick={() => deleteUser(user.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;