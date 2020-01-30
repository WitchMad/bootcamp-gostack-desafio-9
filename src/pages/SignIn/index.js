import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/logo.png';
import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    const { email, password } = values;

    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GYMPOINT" />
      <h1>GYMPOINT</h1>
      {loading ? (
        <h2>Carregando...</h2>
      ) : (
        <>
          <label htmlFor="email">
            SEU E-MAIL
            <input
              type="email"
              id="email"
              placeholder="email@example.com"
              onChange={e => setValues({ ...values, email: e.target.value })}
            />
          </label>
          <label htmlFor="password">
            SUA SENHA
            <input
              type="password"
              id="password"
              placeholder="**********"
              onChange={e => setValues({ ...values, password: e.target.value })}
            />
          </label>
          <button type="button" onClick={handleSubmit}>
            Entrar no sistema
          </button>
        </>
      )}
    </>
  );
}
