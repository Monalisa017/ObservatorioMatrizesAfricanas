import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import { Box } from '@mui/material';
import imagemExemplo from '../../assets/imagens/placehoholderPng.webp';


// Estilização da imagem
const StyledImagem = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  margin-left: 15%;

`;

const StyledBoxImagem = styled(Box)`
  width: 85%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: relative;
  
`;

// Estilos para os botões de navegação (setas)
const StyledCarousel = styled(Carousel)`
  .control-arrow {
    background-color: #fc791e !important; /* Cor de fundo laranja */
    border-radius: 15%; /* Bordas arredondadas */
    color: brown; /* Cor da seta marrom */
    font-size: 30px; /* Tamanho da seta */
    padding: 10px; /* Tamanho do botão */
    width: 85px; /* Largura do botão */
    height: 85px; /* Altura do botão */
    position: absolute; /* Posiciona o botão em relação ao contêiner */
    top: 50% !important; /* Mover o botão para baixo */
    left: 96%; /* Centraliza o botão horizontalmente */
    transform: translateX(-50%); /* Centraliza o botão exatamente */
    z-index: 10; /* Garante que o botão fique visível acima de outros elementos */
  }

  .control-arrow:hover {
    background-color: darkorange; /* Cor do botão ao passar o mouse */
  }

  .control-arrow:before {
    font-family: 'react-responsive-carousel';
    font-size: 30px;
    color: brown; /* Cor da seta marrom */
  }
`;



const ImageCarousel = () => {
  return (
    <StyledCarousel showArrows={true} autoPlay={true} infiniteLoop={true}>
      <StyledBoxImagem>
        <StyledImagem src={imagemExemplo} />
      </StyledBoxImagem>
      <StyledBoxImagem>
        <StyledImagem src={imagemExemplo} />
      </StyledBoxImagem>
      <StyledBoxImagem>
        <StyledImagem src={imagemExemplo} />
      </StyledBoxImagem>
    </StyledCarousel>
  );
}

export default ImageCarousel;


