import React, { useState } from 'react';
import {PencilLine, Trash} from "@phosphor-icons/react";
import './global.css';

function App() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, username };
    setUsers([...users, newUser]);
    setName('');
    setUsername('');
  };

  const handleEdit = (index) => {
    // Add edit functionality here
  };

  const handleDisconnect = (index) => {
    // Add delete functionality here
    const updatedUsers = [...users];
  };

  return (
    <div className="container">
      <div className="column">
        <h3>Adicionar usuário</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nome:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <button className="button-form" type="submit">Salvar</button>
        </form>
      </div>
      <div className="column">
        <h3>Listagem de usuários</h3>
        <table>
          <tbody>
            <tr className="title">
              <td>Nome</td>
              <td>Username</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            {users.map((user, index) => (
              <tr key={index} className="content">
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td><button className="button-td" onClick={() => handleEdit(index)}><PencilLine size={16} /></button></td>
                <td><button className="button-td" onClick={() => handleDisconnect(index)}><Trash size={16} /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App
