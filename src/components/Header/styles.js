import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  border: 1px solid #c9c9c9;
  strong {
    color: #444;
    display: block;
  }
  button {
    color: #ee4d64;
    border: 0;
    background: none;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
  border-right: 1px solid #c9c9c9;
  img {
    width: 40px;
    margin-right: 10px;
  }
  h1 {
    font-size: 15px;
    color: #ee4d64;
  }
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  nav {
    padding-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      display: inline-block;
      font-weight: bold;
      color: #c9c9c9;
      padding: 0 10px;
      transition: 300ms;
      &:hover {
        color: #666;
      }
    }
  }
`;
