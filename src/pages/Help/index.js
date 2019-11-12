import React from 'react';

import { Container, Cabecalho, List } from '../../css/container';

export default function Help() {
  return (
    <Container>
      <Cabecalho>
        <h2>Pedidos de auxílio</h2>
      </Cabecalho>
      <List>
        <table>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fulano de tal</td>
              <td>responder</td>
            </tr>
          </tbody>
        </table>
      </List>
    </Container>
  );
}
