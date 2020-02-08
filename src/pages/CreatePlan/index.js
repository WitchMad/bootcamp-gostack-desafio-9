import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { Container, Cabecalho, List } from '../../css/container';
import normalizeCurrency from '../../util/normalizeCurrency';
import { FormatPrice } from '../../util/format';
import history from '../../services/history';
import api from '../../services/api';

export default function CreatePlan() {
  const [priceFormated, setPriceFormated] = useState('');
  const [months, setMonths] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  useEffect(() => {
    const price = parseFloat(priceFormated.replace('.', '').replace(',', '.'));
    if (months > 0 && price !== 0) {
      const value = months * price;
      setTotalPrice(FormatPrice(value));
    } else {
      setTotalPrice(FormatPrice(0));
    }
  }, [priceFormated, months]);

  async function handleSubmit({ title }) {
    try {
      const response = await api.post('/plans', {
        title,
        duration: months,
        price: parseFloat(priceFormated.replace('.', '').replace(',', '.')),
      });
      toast.success('Plano Criado com sucesso');
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Cabecalho>
          <h2>Cadastro de plano</h2>
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
