import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  0% {
    opacity:0;
  } 100% {
    opacity:1;
  }
`;

export const Container = styled.div`
  position: fixed;
  top:0;
  left:0;
  z-index:20;
  width:100%;
  height:100vh;
  background:rgba(0,0,0,.6);
  display:flex;
  animation:${fade} 300ms linear;
  justify-content:center;
  align-items:center;
  padding:15px;
`;

export const Box = styled.div`
  background:#fff;
  border-radius:4px;
  width:100%;
  max-width:500px;
  min-height:auto;
  z-index:30;
  padding:30px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  div {
    padding:10px 0;
    width:100%;
    color:#888;
    strong {
      display:block;
      color:#666;
      margin-bottom:10px;
    }
    textarea {
      width:100%;
      border:1px solid #eee;
      border-radius:4px;
      padding:10px;
      color:#888;
    }
  }
  button {
    border-radius:4px;
    color:#fff;
    font-weight:bolder;
    width:100%;
    border:0;
    padding:10px 0;
  }
  button.primary {
    background: #ee4d64;
  }
  button.secondary {
    background:#666;
    margin-top:5px;
  }
`;
