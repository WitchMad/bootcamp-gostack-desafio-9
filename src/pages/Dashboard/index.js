import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Container, Cabecalho, List } from '../../css/container';

import api from '../../services/api';

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await api.get('/students');
        setUsers(response.data);
      } catch (err) {
        toast.error(err.message);
      }
    }
    loadUsers();
  }, []);

  return (
    <Container>
      <Cabecalho>
        <h2>Gerenciando Alunos</h2>
        <div>
          <button type="button">+ CADASTRAR</button>
          <input type="text" placeholder="Buscar Aluno" />
        </div>
      </Cabecalho>
      <List>
        <div className="container">
          <h2>NOME</h2>
          <h2>E-MAIL</h2>
          <h2>IDADE</h2>
        </div>
        {users.length !== 0 &&
          users.map(user => (
            <div className="list_item">
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.age}</p>
              <button type="button" className="edit">
                editar
              </button>
              <button type="button" className="delete">
                apagar
              </button>
            </div>
          ))}
      </List>
    </Container>
  );
}
