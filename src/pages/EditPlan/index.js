import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Container, Cabecalho, List } from '../../css/container';
import normalizeCurrency from '../../util/normalizeCurrency';
import { FormatPrice } from '../../util/format';
import history from '../../services/history';
import api from '../../services/api';

export default function EditPlan({ match }) {
  const [priceFormated, setPriceFormated] = useState('');
  const [months, setMonths] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [initialData, setInitialData] = useState({
    title: null,
  });

  useEffect(() => {
    const price = parseFloat(priceFormated.replace('.', '').replace(',', '.'));
    if (months > 0 && price !== 0) {
      const value = months * price;
      setTotalPrice(FormatPrice(value));
    } else {
      setTotalPrice(FormatPrice(0));
    }
  }, [priceFormated, months]);

  useEffect(() => {
    async function loadResponse() {
      const response = await api.get('plans');
      const plan = response.data.find(item => item.id === Number(match.params.id));
      console.log(plan);
      console.log(response.data);
      console.log(match.params.id);
      if(plan) {
        setInitialData({
          title: plan.title,
        });
        setMonths(plan.duration);
        setTotalPrice(plan.total_price);
        setPriceFormated(normalizeCurrency('' + plan.price + '00'));
      }
    }
    loadResponse();
  }, [match.params.id])

  async function handleSubmit({ title }) {
    try {
      await api.put(`/plans/${match.params.id}`, {
        title,
        duration: months,
        price: parseFloat(priceFormated.replace('.', '').replace(',', '.')),
      });
      toast.success('Plano Editado com sucesso');
    } catch (err) {
      toast.error(err.message);
    }
  }

  const schema = Yup.object().shape({
    title: Yup.string().required('Título é um campo obrigatório'),
    duration: Yup.number('Duração deve ser número').required(
      'Duração é um campo obrigatório'
    ),
    price: Yup.string().required('Preço é um campo obrigatório'),
  });

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema} initialData={initialData}>
        <Cabecalho>
          <h2>Edição de plano</h2>
          <div>
            <button
              type="button"
              className="btn-grey"
              onClick={() => history.push('/plans')}
            >
              <MdKeyboardArrowLeft color="#fff" size={12} /> VOLTAR
            </button>
            <button type="submit" className="btn-red">
              <MdDone color="#fff" size={12} /> SALVAR
            </button>
          </div>
        </Cabecalho>
        <List>
          <label htmlFor="title">
            TÍTULO DO PLANO
            <Input name="title" id="title" />
          </label>
          <div className="wrap">
            <label htmlFor="duration">
              DURAÇÃO (em meses)
              <Input
                name="duration"
                id="duration"
                value={months}
                onChange={e => setMonths(Number(e.target.value))}
              />
            </label>
            <label htmlFor="price">
              PREÇO MENSAL
              <Input
                name="price"
                id="price"
                value={priceFormated}
                onChange={e =>
                  setPriceFormated(normalizeCurrency(e.target.value))
                }
              />
            </label>
            <label htmlFor="total_price">
              PREÇO TOTAL
              <Input
                name="total_price"
                id="total_price"
                value={totalPrice}
                readOnly
                style={{ backgroundColor: '#eee' }}
              />
            </label>
          </div>
        </List>
      </Form>
    </Container>
  );
}
