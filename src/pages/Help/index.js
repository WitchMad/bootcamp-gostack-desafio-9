import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { Container, Cabecalho, List } from '../../css/container';

export default function Help() {
  const [helps, setHelps] = useState([]);

  useEffect(() => {
    async function loadHelps() {
      try {
        const response = await api.get('/students/help-orders');
        setHelps(response.data);
      } catch (err) {
        toast.error(err.message);
      }
    }
    loadHelps();
  }, []);

  return (
    <Container>
      <Cabecalho>
        <h2>Pedidos de auxílio</h2>
      </Cabecalho>
      <List>
        <div className="container">
          <h2>ALUNO</h2>
        </div>
        {helps.length !== 0 &&
          helps.map((help, index) => (
            <div
              className="list_item"
              key={help.id}
              style={{ animationDelay: `${index}00ms` }}
            >
              <p>{help.student.name}</p>
              <button type="button" className="default">
                responder
              </button>
            </div>
          ))}
      </List>
    </Container>
  );
}
