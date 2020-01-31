import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { Container, Cabecalho, List } from '../../css/container';
import { FormatPrice } from '../../util/format';

export default function Plans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function loadPlans() {
      try {
        const response = await api.get('/plans');
        const { data } = response;
        const formated = data.map(item => {
          return {
            ...item,
            priceFormated: FormatPrice(item.price),
          };
        });
        setPlans(formated);
      } catch (err) {
        toast.error(err.message);
      }
    }
    loadPlans();
  }, []);

  return (
    <Container>
      <Cabecalho>
        <h2>Gerenciando planos</h2>
        <div>
          <button type="button">+ CADASTRAR</button>
        </div>
      </Cabecalho>
      <List>
        <div className="container">
          <h2>TÍTULO</h2>
          <h2>DURAÇÃO</h2>
          <h2>VALOR p/ MÊS</h2>
        </div>
        {plans.length !== 0 &&
          plans.map(plan => (
            <div className="list_item">
              <p>{plan.title}</p>
              <p>
                {plan.duration} {plan.duration > 1 ? 'Meses' : 'Mês'}
              </p>
              <p>{plan.priceFormated}</p>
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
