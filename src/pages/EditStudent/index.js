import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import history from '../../services/history';
import api from '../../services/api';
import { Container, Cabecalho, List } from '../../css/container';

export default function EditStudent({ match }) {
  const [initialData, setInitialData] = useState({
    name: null,
    email: null,
    age: null,
    weight: null,
    height: null
  })
  const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string()
      .email('Campo deve ter email')
      .required('Email é obrigatório'),
    age: Yup.number('Idade deve ser um número').required('Idade é obrigatória'),
    weight: Yup.number('Peso deve ser um número').required(
      'Peso é obrigatório'
    ),
    height: Yup.number('Altura deve ser um número').required(
      'Altura é obrigatória'
    ),
  });

  async function handleSubmit({ name, email, age, weight, height }) {
    try {
      await api.put(`/students/${match.params.id}`, {
        name,
        email,
        age,
        weight,
        height,
      });
      toast.success('Aluno editado com sucesso');
    } catch (err) {
      toast.error(err.message);
    }
  }

  useEffect(() => {
    async function loadStudent() {
      const response = await api.get('students');
      const student = response.data.find(item => item.id === Number(match.params.id));
      setInitialData({
        name: student.name,
        email: student.email,
        age: student.age,
        weight: student.weight,
        height: student.height
      })
    }
    loadStudent();
  }, [match.params.id])

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit} initialData={initialData}>
        <Cabecalho>
          <h2>Edição de aluno</h2>
          <div>
            <button
              type="button"
              className="btn-grey"
              onClick={() => history.push('/dashboard')}
            >
              <MdKeyboardArrowLeft color="#fff" size={12} /> VOLTAR
            </button>
            <button type="submit" className="btn-red">
              <MdDone color="#fff" size={12} /> SALVAR
            </button>
          </div>
        </Cabecalho>
        <List>
          <label htmlFor="name">
            NOME COMPLETO
            <Input name="name" id="name" />
          </label>
          <label htmlFor="email">
            ENDEREÇO DE E-MAIL
            <Input type="email" name="email" id="email" />
          </label>
          <div className="wrap">
            <label htmlFor="age">
              IDADE
              <Input name="age" id="age" />
            </label>
            <label htmlFor="weight">
              PESO (em kg)
              <Input name="weight" id="weight" />
            </label>
            <label htmlFor="height">
              ALTURA
              <Input name="height" id="height" />
            </label>
          </div>
        </List>
      </Form>
    </Container>
  );
}
