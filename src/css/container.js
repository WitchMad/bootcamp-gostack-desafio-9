import styled from 'styled-components';

export const Container = styled.div`
  width: 85%;
  margin: 0 auto;
`;

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  align-items: center;

  h2 {
    color: #444;
    font-size: 24px;
  }

  button {
    padding: 10px 15px;
    margin-right: 10px;
    border: 0;
    color: #fff;
    background: #ee4d64;
    border-radius: 4px;
    font-weight: bold;
  }
  input {
    padding: 10px 15px;
    border-radius: 4px;
    border: 1px solid #c9c9c9;
    color: #444;
  }
`;

export const List = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 4px;

  table {
    overflow: auto;
    width: 100%;

    thead {
      text-align: left;
      color: #444;
      th {
        padding-bottom: 20px;
      }
    }

    tbody {
      color: #666;
      td {
        padding: 15px 0;
        border-bottom: 1px solid #c9c9c9;
      }
    }
  }
`;
