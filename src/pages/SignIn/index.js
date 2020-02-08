import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import logo from '../../assets/logo.png';
import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn() {
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Campo deve ser um email')
      .required('Email é um campo obrigatório'),
    password: Yup.string().required('Senha é um campo obrigatório'),
  });

  return (
    <>
      <img src={logo} alt="GYMPOINT" />
      <h1>GYMPOINT</h1>
      <Form onSubmit={handleSubmit} schema={schema}>
        <label htmlFor="email">
          SEU E-MAIL
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="email@example.com"
          />
        </label>
        <label htmlFor="password">
          SUA SENHA
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="**********"
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Entrar no sistema'}
        </button>
      </Form>
    </>
  );
}
