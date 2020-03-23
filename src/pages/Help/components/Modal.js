import React, { useState } from 'react';

import { Container, Box } from './styles';
import api from '../../../services/api';
import { toast } from 'react-toastify';

export default function Modal({ open, data, onClose }) {
  const [answer, setAnswer] = useState('');
  async function handleSubmit() {
    if(answer.length === 0) {
      return toast.error('Preencha alguma resposta');
    }
    try {
      await api.post(`students/${data.id}/answer`, { answer });
      setAnswer('');
      onClose();
      toast.success('Pedido de auxílio respondido');
    } catch(err) {
      toast.error(err.message);
    }
  }
  if(open) {
    return (
      <Container>
        <Box>
          <div>
            <strong>PERGUNTA DO ALUNO</strong>
            {data.question}
          </div>
          <div>
            <strong>SUA RESPOSTA</strong>
            <textarea 
              value={answer} 
              onChange={e => setAnswer(e.target.value)}>
            </textarea>
          </div>
          <button 
            type="button" 
            className="primary"
            onClick={handleSubmit}
          >
            Responder aluno
          </button>
          <button 
            type="button" 
            className="secondary" 
            onClick={onClose}>
              Cancelar
          </button>
        </Box>
      </Container>
    )
  }else {
    return (
      <>
      </>
    )
  }
}
