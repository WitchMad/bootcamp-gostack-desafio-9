import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border: 1px solid #c9c9c9;
  strong {
    color: #444;
  }
  p {
    color: #ee4d64;
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
    li {
      display: inline-block;
      font-weight: bold;
      color: #444;
      padding: 0 10px;
    }
  }
`;
