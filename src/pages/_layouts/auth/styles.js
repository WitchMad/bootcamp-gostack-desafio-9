import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  background: #ee4d64;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const fade = keyframes`
  from{
    opacity:0;
    transform:scale(1.1);
  }to{
    opacity:1;
    transform:scale(1);
  }
`;
export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  background: #fff;
  border-radius: 4px;
  padding: 40px 20px;
  animation: ${fade} 300ms linear;

  img {
    max-width: 50%;
  }

  h1 {
    color: #ee4d64;
    margin-bottom: 20px;
    font-size: 29.86px;
  }

  label {
    margin-top: 10px;
    display: block;
    text-align: left;
    font-weight: bold;
    color: #444;
    font-size: 14px;
    span {
      background: #ee4d64;
      color: #fff;
      text-align: center;
      padding: 5px;
      width: 100%;
      display: block;
      margin-bottom: 10px;
    }
  }
  input {
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #eee;
    width: 100%;
  }
  button {
    background: #ee4d64;
    border: 0;
    padding: 10px;
    width: 100%;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    opacity: 1;
  }
  button:disabled {
    opacity: 0.4;
  }
`;
