import React from 'react';

import logo from '../../assets/logo.png';

import { Container, Logo, Menu } from './styles';

export default function Header() {
  return (
    <Container>
      <Menu>
        <Logo>
          <img src={logo} alt="GYMPOINT" />
          <h1>GYMPOINT</h1>
        </Logo>
        <nav>
          <ul>
            <li>ALUNOS</li>
            <li>PLANOS</li>
            <li>MATRÍCULAS</li>
            <li>PEDIDOS DE AUXÍLIO</li>
          </ul>
        </nav>
      </Menu>
      <div>
        <strong>Lucas Henrique</strong>
        <p>sair do sistema</p>
      </div>
    </Container>
  );
}
