// src/components/FooterComponent/FooterComponent.jsx
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import styled from 'styled-components';

const FooterContainer = styled(Box)`
  width: 100%;
  background-color:  #5f210e;
  color:  #fc791e ;
  padding: 45px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;


function FooterComponent() {
  return (
    <FooterContainer>
      <Typography variant="h5" fontWeight="bold">
        Observatório Matrizes Africanas
      </Typography>

      <Typography variant="caption" sx={{ marginTop: 2, opacity: 0.7 }}>
        © {new Date().getFullYear()} Todos os direitos reservados
      </Typography>
    </FooterContainer>
  );
}

export default FooterComponent;
