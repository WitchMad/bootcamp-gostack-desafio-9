import React from 'react';

import { Container, Cabecalho, List } from '../../css/container';

export default function Registers() {
  return (
    <Container>
      <Cabecalho>
        <h2>Gerenciando matrículas</h2>
        <div>
          <button type="button">+ CADASTRAR</button>
          <input type="text" placeholder="Buscar Aluno" />
        </div>
      </Cabecalho>
      <List>
        <table>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th>PLANO</th>
              <th>INÍCIO</th>
              <th>TÉRMINO</th>
              <th>ATIVA</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fulano de tal</td>
              <td>Start</td>
              <td>30 de Abril de 2019</td>
              <td>30 de Maio de 2019</td>
              <td>v</td>
              <td>editar</td>
              <td>apagar</td>
            </tr>
          </tbody>
        </table>
      </List>
    </Container>
  );
}
