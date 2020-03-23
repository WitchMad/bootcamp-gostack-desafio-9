import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';

import Modal from './components/Modal';

import { Container, Cabecalho, List } from '../../css/container';

export default function Help() {
  const [helps, setHelps] = useState([]);
  const [modal, setModal] = useState({ open: false, data: {} });

  async function loadHelps() {
    try {
      const response = await api.get('/students/help-orders');
      setHelps(response.data.filter(item => item.answer === null));
    } catch (err) {
      toast.error(err.message);
    }
  }

  useEffect(() => {
    loadHelps();
  }, []); // eslint-disable-line

  return (
    <Container style={{ maxWidth: '600px' }}>
      <Modal open={modal.open} data={modal.data} 
        onClose={() => { 
        setModal({ open: false, data: {} });
        loadHelps();
      }} 
      />
      <Cabecalho>
        <h2>Pedidos de auxílio</h2>
      </Cabecalho>
      <List>
        <div className="container">
          <h2>ALUNO</h2>
          <div></div>
        </div>
        {helps.length !== 0 ?
          helps.map((help, index) => (
            <div
              className="list_item"
              key={help.id}
              style={{ animationDelay: `${index}00ms` }}
            >
              <p>{help.student.name}</p>
              <div>
              <button type="button" className="default" onClick={() => setModal({ open: true, data: help })}>
                responder
              </button>
              </div>
            </div>
          )) : (
            <h4 style={{ color: '#888', marginTop: '20px' }}>
              Não há nenhum pedido de auxĩlio
            </h4>
          )}
      </List>
    </Container>
  );
}
