import styled, { keyframes } from 'styled-components';

const itemFade = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-30px);
  } 100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
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
    border-radius: 4px;
    font-weight: bold;
  }
  button.btn-red {
    color: #fff;
    background: #ee4d64;
  }
  button.btn-grey {
    color: #fff;
    background: #c9c9c9;
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
  padding: 30px;
  border-radius: 4px;

  label {
    color: #444;
    font-weight: bold;
    width: 100%;
    margin: 0 5px;
    input {
      display: block;
      margin-top: 5px;
      margin-bottom: 20px;
      width: 100%;
      border: 1px solid #c9c9c9;
      color: #999;
      font-size: 14px;
      border-radius: 4px;
      padding: 10px;
    }
    span {
      width: 100%;
      padding: 5px;
      text-align: center;
      background: #c9c9c9;
      color: #fff;
      display: block;
      margin-bottom: 20px;
    }
  }

  div.wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div.container {
    color: #444;
    display: flex;
  }

  div.container h2 {
    flex: 0.275;
    font-size: 16px;
  }

  div.list_item {
    color: #666;
    display: flex;
    font-size: 16px;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
    justify-content: space-between;
    align-items: center;
    animation: ${itemFade} 300ms linear;
    animation-fill-mode: backwards;
  }

  div.list_item p {
    flex: 1;
  }

  div.list_item button {
    flex: 0.3;
    background: none;
    border: 0;
  }

  button.edit {
    color: #4d85ee;
  }

  button.delete {
    color: #de3b3b;
  }

  button.default {
    color: #4d85ee;
  }

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
