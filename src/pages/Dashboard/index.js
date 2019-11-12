import React from 'react';

import { Container, Cabecalho, List } from '../../css/container';

export default function Dashboard() {
  return (
    <Container>
      <Cabecalho>
        <h2>Gerenciando Alunos</h2>
        <div>
          <button type="button">+ CADASTRAR</button>
          <input type="text" placeholder="Buscar Aluno" />
        </div>
      </Cabecalho>
      <List>
        <table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>E-MAIL</th>
              <th>IDADE</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fulano de tal</td>
              <td>exemplo@email.com</td>
              <td>45</td>
              <td>editar</td>
              <td>apagar</td>
            </tr>
            <tr>
              <td>Fulano de tal</td>
              <td>exemplo@email.com</td>
              <td>45</td>
              <td>editar</td>
              <td>apagar</td>
            </tr>
            <tr>
              <td>Fulano de tal</td>
              <td>exemplo@email.com</td>
              <td>45</td>
              <td>editar</td>
              <td>apagar</td>
            </tr>
          </tbody>
        </table>
      </List>
    </Container>
  );
}
