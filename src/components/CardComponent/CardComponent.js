import React from 'react';
import { Grid, Box, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';

// Estilização do Card
const StyledCard = styled(Card)`
  background-color: #f5f5dc; /* Cor de fundo bege */
  border-radius: 12px; /* Bordas arredondadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  overflow: hidden;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  width: 95%; /* Tornar o card mais largo */
  max-width: 100%; /* Limitar a largura máxima */
  margin-left: 35%; /* Mover o card para a direita */
  margin-bottom: 200px;
  
  &:hover {
    transform: translateY(-10px) scale(1.55); /* Aumento da altura e largura */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Aumento da sombra ao passar o mouse */
  }
`;

// Estilização do título dentro do Card
const StyledTitle = styled(Typography)`
  color: #fc791e; /* Cor laranja */
  font-weight: bold;
  margin-bottom: 16px;
`;

// Estilização do texto dentro do Card
const StyledText = styled(Typography)`
  color: #6a4f2f; /* Cor marrom */
  font-size: 1rem;
  line-height: 1.5;
`;

const CardComponent = () => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={5}
      style={{
        border: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <StyledCard>
          <CardContent>
            <StyledTitle variant="h4" component="div">
              TESTE2
            </StyledTitle>
            <StyledText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo.
            </StyledText>
            <StyledText>
              Quisque id dui ut ligula gravida efficitur eu vel libero. Integer
              ac orci tincidunt, facilisis nisi vel, sollicitudin arcu.
            </StyledText>
          </CardContent>
        </StyledCard>
      </Box>
    </Grid>
  );
};

export default CardComponent;
