import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';

// Estilos para a imagem e o carrossel
import imagemExemplo from '../../assets/imagens/placehoholderPng.webp';
import imagem1 from '../../assets/imagens/Esu.webp';
import imagem2 from '../../assets/imagens/Oya.webp';
import imagem3 from '../../assets/imagens/Ogun.webp';
import imagem4 from '../../assets/imagens/Nana.webp';
import imagem5 from '../../assets/imagens/Oxossi.webp';

const listaDeImagens = [
  { img: imagemExemplo, texto: "Texto para a imagem base", titulo: "Título da Imagem Base" },
  { img: imagem1, texto: "Texto para a primeira imagem", titulo: "Título da Primeira Imagem" },
  { img: imagem2, texto: "Texto para a segunda imagem", titulo: "Título da Segunda Imagem" },
  { img: imagem3, texto: "Texto para a terceira imagem", titulo: "Título da Terceira Imagem" },
  { img: imagem4, texto: "Texto para a terceira imagem", titulo: "Título da Quarta Imagem" },
  { img: imagem5, texto: "Texto para a terceira imagem", titulo: "Título da Quinta Imagem" },
];

// Estilização da imagem
const StyledImagem = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  opacity: 1;
  visibility: visible;

  &.hidden {
    opacity: 0;
    visibility: hidden;
  }
`;

// Estilização da caixa da imagem
// Estilização da caixa da imagem
const StyledBoxImagem = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: relative;
  margin-top: 45px; /* Adicionando um pequeno espaço no topo */
`;


// Estilos para os botões de navegação (setas)
const StyledCarousel = styled(Carousel)`
  .control-arrow {
    background-color: #fc791e !important;
    border-radius: 15%;
    color: brown;
    font-size: 24px; /* Tamanho reduzido das setas */
    padding: 8px;
    width: 60px; /* Largura menor */
    height: 60px; /* Altura menor */
    position: absolute;
    top: 50% !important;
    left: 92%; /* Ajustado para garantir que as setas não fiquem cortadas */
    transform: translateX(-50%);
    z-index: 10;
  }

  .control-arrow:hover {
    background-color: darkorange;
  }

  .control-arrow:before {
    font-family: 'react-responsive-carousel';
    font-size: 24px; /* Tamanho reduzido das setas */
    color: brown;
  }

  .control-prev {
    left: 5% !important; /* Ajuste para a seta anterior (Previous) */
  }
`;

// Estilos para o Card com título e texto
const StyledCard = styled(Card)`
  background-color: #f5f5dc; /* Cor de fundo bege */
  border-radius: 12px; /* Bordas arredondadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  overflow: hidden;
  padding: 30px 20px; /* Aumentar o padding para aumentar o card */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 90%; /* Card mais largo */
  max-width: 90%; /* Limitar a largura máxima */
  margin: auto; /* Centralizar o card */
  margin-bottom: 50px;
  height: 80%; /* Ajustando a altura do card */
  justify-content: flex-start; /* Título no topo */
  
  /* Estilo de hover */
  &:hover {
    transform: translateY(-10px) scale(1.05); /* Aumento da altura e largura */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Aumento da sombra ao passar o mouse */
  }
`;

// Estilização do título dentro do Card
const StyledTitle = styled(Typography)`
  color: #fc791e; /* Cor laranja */
  font-weight: bold;
  margin-bottom: 16px;
  font-size: 2rem; /* Aumentar o tamanho do título */
  margin-top: 0; /* Garantir que o título fique no topo */
`;

// Estilização do texto dentro do Card
const StyledText = styled(Typography)`
  color: #6a4f2f; /* Cor marrom */
  font-size: 1.1rem; /* Aumentar o tamanho da fonte do texto */
  line-height: 1.5;
`;

// Estilos para a parte ao lado do carrossel
const ContentContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px; /* Espaçamento entre imagem e o card */
  width: 100%;
  height: 100%;
`;

// Layout do carrossel e do card
const ImageCarousel = () => {
  const [selectedText, setSelectedText] = useState(listaDeImagens[0].texto); // Inicializa com o texto da primeira imagem
  const [selectedTitle, setSelectedTitle] = useState(listaDeImagens[0].titulo); // Inicializa com o título da primeira imagem
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para controlar o índice da imagem selecionada
  
  return (
    <Grid container spacing={2} justifyContent="center">
      {/* Carrossel */}
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <StyledCarousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          onChange={(index) => {
            setSelectedText(listaDeImagens[index].texto); // Atualiza o texto ao trocar a imagem
            setSelectedTitle(listaDeImagens[index].titulo); // Atualiza o título ao trocar a imagem
            setCurrentIndex(index); // Atualiza o índice da imagem selecionada
          }}
        >
          {listaDeImagens.map((item, index) => (
            <StyledBoxImagem key={index}>
              <StyledImagem 
                src={item.img} 
                alt={`Imagem ${index + 1}`} 
                className={currentIndex !== index ? "hidden" : ""} // Aplica a classe 'hidden' às imagens que não estão visíveis
              />
            </StyledBoxImagem>
          ))}
        </StyledCarousel>
      </Grid>

      {/* Card com título e texto ao lado da imagem */}
      <Grid item xs={12} sm={12} md={6} lg={5}>
        <ContentContainer>
          <StyledCard>
            <StyledTitle variant="h4" component="div">
              {selectedTitle} {/* Título dinâmico */}
            </StyledTitle>
            <StyledText>
              {selectedText} {/* Texto dinâmico */}
            </StyledText>
          </StyledCard>
        </ContentContainer>
      </Grid>
    </Grid>
  );
};

export default ImageCarousel;
