import React from 'react';
import styled from 'styled-components';

// Importe a imagem que você deseja usar
import imagem from '../../assets/imagens/iconTitle.png';

// Estilize a imagem usando Styled-components
const ImagemEstilizada = styled.img`
  width: 100%;
  max-width: 300px; /* Define o tamanho máximo da imagem */
  border-radius: 50%; /* Adiciona um efeito de borda arredondada */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra */
`;

// Exporte o componente estilizado
export default function Imagem() {
  return <ImagemEstilizada src={imagem} alt="Descrição da imagem" />;
}
