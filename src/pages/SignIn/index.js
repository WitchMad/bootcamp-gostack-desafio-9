import React from 'react';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <h1>GYMPOINT</h1>
      <label htmlFor="email">SEU E-MAIL</label>
      <input type="email" id="email" placeholder="email@example.com" />
      <label htmlFor="password">SEU SENHA</label>
      <input type="password" id="password" placeholder="**********" />
      <button type="button">Entrar no sistema</button>
    </>
  );
}
