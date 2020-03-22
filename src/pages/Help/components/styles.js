import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top:0;
  left:0;
  z-index:20;
  width:100%;
  height:100vh;
  background:rgba(0,0,0,.5);
  display:flex;
  justify-content:center;
  align-items:center;
  padding:15px;
`;

export const Box = styled.div`
  background:#fff;
  border-radius:4px;
  width:100%;
  max-width:500px;
  min-height:500px;
  z-index:30;
`;
