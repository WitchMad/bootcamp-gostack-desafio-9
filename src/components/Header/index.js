import React from 'react';

import { useDispatch } from 'react-redux';
import { signOut } from '../../store/modules/auth/actions';
import logo from '../../assets/logo.png';
import history from '../../services/history';
import { Container, Logo, Menu } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Menu>
        <Logo>
          <img src={logo} alt="GYMPOINT" />
          <h1>GYMPOINT</h1>
        </Logo>
        <nav>
          <ul>
            <button type="button" onClick={() => history.push('/dashboard')}>
              ALUNOS
            </button>
            <button type="button" onClick={() => history.push('/plans')}>
              PLANOS
            </button>
            <button type="button" onClick={() => history.push('/registers')}>
              MATRÍCULAS
            </button>
            <button type="button" onClick={() => history.push('/help')}>
              PEDIDOS DE AUXÍLIO
            </button>
          </ul>
        </nav>
      </Menu>
      <div>
        <strong>Lucas Henrique</strong>
        <button type="button" onClick={handleSignOut}>
          sair do sistema
        </button>
      </div>
    </Container>
  );
}
