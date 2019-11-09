import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #ee4d64;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  background: #fff;
  border-radius: 4px;
  padding: 40px 20px;

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
  }
  input {
    padding: 10px;
    margin: 10px 0;
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
  }
`;
