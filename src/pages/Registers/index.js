import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { MdCheckCircle } from 'react-icons/md';
import { Container, Cabecalho, List } from '../../css/container';
import api from '../../services/api';
import { FormatDate } from '../../util/format';
import history from '../../services/history';

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

  async function deleteRegister(id) {
    try {
      await api.delete(`register/${id}`);
      setRegisters(registers.filter(register => register.id !== id));
      toast.success('Matrícula deletada');
    } catch(err) {
      toast.error(err.message);
    }
  }

  return (
    <Container style={{ maxWidth: '100%' }}>
      <Cabecalho>
        <h2>Gerenciando matrículas</h2>
        <div>
          <button
            type="button"
            className="btn-red"
            onClick={() => history.push('/registers/new')}
          >
            + CADASTRAR
          </button>
        </div>
      </Cabecalho>
      <List>
        <div className="container">
          <h2>ALUNO</h2>
          <h2>PLANO</h2>
          <h2>INÍCIO</h2>
          <h2>TÉRMINO</h2>
          <h2>ATIVA</h2>
          <div></div>
        </div>
        {registers.length !== 0 &&
          registers.map((register, index) => (
            <div
              className="list_item"
              key={register.id}
              style={{ animationDelay: `${index}00ms` }}
            >
              <p>{register.student.name}</p>
              <p>{register.plan.title}</p>
              <p>{register.start_date_formated}</p>
              <p>{register.end_date_formated}</p>
              <p>
                <MdCheckCircle
                  color={register.active ? '#42cb59' : '#ddd'}
                  size={22}
                />
              </p>
              <div>
              <button type="button" className="edit" onClick={() => history.push(`/registers/edit/${register.id}`)}>
                editar
              </button>
              <button type="button" className="delete" onClick={() => deleteRegister(register.id)}>
                apagar
              </button>
              </div>
            </div>
          ))}
      </List>
    </Container>
  );
}
