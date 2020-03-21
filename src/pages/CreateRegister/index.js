import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import { Form, Input, Select } from '@rocketseat/unform';
import { addMonths, parseISO, format } from "date-fns";
import { FormatPrice } from "../../util/format";
import { Container, Cabecalho, List } from '../../css/container';
import api from "../../services/api";
import { toast } from "react-toastify";
import history from '../../services/history';

export default function CreateRegister() {
  const [plans, setPlans] = useState([]);
  const [options, setOptions] = useState({ students: [], plans: [] });
  const [values, setValues] = useState({});

  useEffect(() => {
    async function loadStates() {
      const listStudents = await api.get('students');
      const listPlans = await api.get('plans');
      setPlans(listPlans.data);
      setOptions({
        students: listStudents.data.map(item => {
          return { id: item.id, title: item.name, value: item.id, };
        }), plans: listPlans.data.map(item => {
          return { id: item.id, title: item.title, value: item.id, };
        }),
      });
    }
    loadStates();
  }, []);

  function handleValues(e) {
    const { value, name } = e.target;
    if(name === "plan") {
      const { duration, price } = plans.find(item => item.id === Number(value));
      const price_final = duration * price;
      setValues({ ...values, [name]: Number(value), price_final: FormatPrice(price_final) });
    }else if(name === "date_start") {
      if(values.plan !== undefined) {
        const { duration } = plans.find(item => item.id === values.plan);
        const date_iso = parseISO(value);
        const date_end = addMonths(date_iso, duration);
        setValues({ ...values, [name]: value, date_end: format(date_end, "yyyy'-'MM'-'dd") })
      }
    }
  }

  async function handleSubmit({ student, plan, date_start }) {
    try {
      await api.post('register', {
        student_id: Number(student),
        plan_id: plan,
        start_date: date_start
      });
      toast.success('Matrícula cadastrada com sucesso!');
    } catch(err) {
      toast.error(err.message);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Cabecalho>
          <h2>Cadastro de matrícula</h2>
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
          <label htmlFor="student">
            ALUNO
            <Select name="student" id="student" options={options.students} />
          </label>
          <div className="wrap">
            <label htmlFor="plan">
              PLANO
              <Select name="plan" id="plan" options={options.plans} onChange={(e) => handleValues(e)}/>
            </label>
            <label htmlFor="date_start">
              DATA DE INÍCIO
              <Input name="date_start" id="date_start" type="date" onChange={(e) => handleValues(e)}/>
            </label>
            <label htmlFor="date_end">
              DATA DE TÉRMINO
              <Input
                name="date_end"
                value={values.date_end || ""}
                id="date_end"
                type="date"
                readOnly
                style={{ backgroundColor: '#eee' }}
              />
            </label>
            <label htmlFor="price_final">
              VALOR FINAL
              <Input
                name="price_final"
                id="price_final"
                value={values.price_final || ""}
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
