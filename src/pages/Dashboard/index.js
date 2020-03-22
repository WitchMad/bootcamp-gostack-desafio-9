import React, { useEffect, useState, useMemo } from 'react';
import { toast } from 'react-toastify';
import { Container, Cabecalho, List } from '../../css/container';
import history from '../../services/history';
import api from '../../services/api';

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');
  const [filtered, setFiltered] = useState([]);

  useMemo(() => {
    if (filter !== '') {
      const usersFiltered = users.filter(
        user => user.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
      );
      setFiltered(usersFiltered);
    }
  }, [filter]); // eslint-disable-line

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

  async function deleteStudent(id) {
    try {
      await api.delete(`students/${id}`);
      setUsers(users.filter(user => user.id !== id));
      toast.success('Aluno deletado');
    }catch(err) {
      toast.error(err.message);
    }
    
  }

  return (
    <Container>
      <Cabecalho>
        <h2>Gerenciando Alunos</h2>
        <div>
          <button
            type="button"
            className="btn-red"
            onClick={() => history.push('/student/new')}
          >
            + CADASTRAR
          </button>
          <input
            type="text"
            placeholder="Buscar Aluno"
            onChange={e => setFilter(e.target.value)}
          />
        </div>
      </Cabecalho>
      <List>
        <div className="container">
          <h2>NOME</h2>
          <h2>E-MAIL</h2>
          <h2>IDADE</h2>
        </div>
        {users.length !== 0 && filter !== ''
          ? filtered.map(user => (
              <div className="list_item" key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.age}</p>
                <button type="button" className="edit">
                  editar
                </button>
                <button type="button" className="delete" onClick={() => deleteStudent(user.id)}>
                  apagar
                </button>
              </div>
            ))
          : users.map((user, index) => (
              <div
                className="list_item"
                key={user.id}
                style={{ animationDelay: `${index}00ms` }}
              >
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.age}</p>
                <button type="button" className="edit">
                  editar
                </button>
                <button type="button" className="delete" onClick={() => deleteStudent(user.id)}>
                  apagar
                </button>
              </div>
            ))}
      </List>
    </Container>
  );
}
