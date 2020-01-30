import React from 'react';

import logo from '../../assets/logo.png';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GYMPOINT" />
      <h1>GYMPOINT</h1>
      <label htmlFor="email">
        SEU E-MAIL
        <input type="email" id="email" placeholder="email@example.com" />
      </label>
      <label htmlFor="password">
        SUA SENHA
        <input type="password" id="password" placeholder="**********" />
      </label>
      <button type="button">Entrar no sistema</button>
    </>
  );
}
