import React from 'react';

import { Container, Cabecalho, List } from '../../css/container';

export default function Plans() {
  return (
    <Container>
      <Cabecalho>
        <h2>Gerenciando planos</h2>
        <div>
          <button type="button">+ CADASTRAR</button>
        </div>
      </Cabecalho>
      <List>
        <table>
          <thead>
            <tr>
              <th>TÍTULO</th>
              <th>DURAÇÃO</th>
              <th>VALOR p/ MÊS</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Start</td>
              <td>1 mês</td>
              <td>R$ 129,00</td>
              <td>editar</td>
              <td>apagar</td>
            </tr>
            <tr>
              <td>Start</td>
              <td>1 mês</td>
              <td>R$ 129,00</td>
              <td>editar</td>
              <td>apagar</td>
            </tr>
            <tr>
              <td>Start</td>
              <td>1 mês</td>
              <td>R$ 129,00</td>
              <td>editar</td>
              <td>apagar</td>
            </tr>
          </tbody>
        </table>
      </List>
    </Container>
  );
}
