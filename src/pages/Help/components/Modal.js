import React from 'react';

import { Container, Box } from './styles';

export default function Modal({ open }) {
  if(open) {
    return (
      <Container>
        <Box>

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
