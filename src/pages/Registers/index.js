import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Container, Cabecalho, List } from '../../css/container';
import api from '../../services/api';
import { FormatDate } from '../../util/format';

export default function Registers() {
  const [registers, setRegisters] = useState([]);

  useEffect(() => {
    async function loadRegisters() {
      try {
        const response = await api.get('/register');

        const { data } = response;
        const formated = data.map(item => {
          return {
            ...item,
            start_date_formated: FormatDate(new Date(item.start_date)),
            end_date_formated: FormatDate(new Date(item.end_date)),
          };
        });
        setRegisters(formated);
      } catch (err) {
        toast.error(err.message);
      }
    }
    loadRegisters();
  }, []);

  return (
    <Container style={{ maxWidth: '100%' }}>
      <Cabecalho>
        <h2>Gerenciando matrículas</h2>
        <div>
          <button type="button">+ CADASTRAR</button>
        </div>
      </Cabecalho>
      <List>
        <div className="container">
          <h2>ALUNO</h2>
          <h2>PLANO</h2>
          <h2>INÍCIO</h2>
          <h2>TÉRMINO</h2>
          <h2>ATIVA</h2>
        </div>
        {registers.length !== 0 &&
          registers.map(register => (
            <div className="list_item" key={register.id}>
              <p>{register.student.name}</p>
              <p>{register.plan.title}</p>
              <p>{register.start_date_formated}</p>
              <p>{register.end_date_formated}</p>
              <p>{register.active ? 'Ativo' : 'Inativo'}</p>
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
