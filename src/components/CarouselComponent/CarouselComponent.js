import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import { Box, Grid, Typography, Card } from '@mui/material';

import imagemExemplo from '../../assets/imagens/placehoholderPng.webp';
import imagem1 from '../../assets/imagens/Esu.webp';
import imagem2 from '../../assets/imagens/Oya.webp';
import imagem3 from '../../assets/imagens/Ogun.webp';
import imagem4 from '../../assets/imagens/Nana.webp';
import imagem5 from '../../assets/imagens/Oxossi.webp';

const listaDeImagens = [
  { img: imagemExemplo, texto: "Texto para a imagem base...", titulo: "Título da Imagem Base" },
  { img: imagem1, texto: "Texto para a primeira imagem", titulo: "Título da Primeira Imagem" },
  { img: imagem2, texto: "Texto para a segunda imagem", titulo: "Título da Segunda Imagem" },
  { img: imagem3, texto: "Texto para a terceira imagem", titulo: "Título da Terceira Imagem" },
  { img: imagem4, texto: "Texto para a quarta imagem", titulo: "Título da Quarta Imagem" },
  { img: imagem5, texto: "Texto para a quinta imagem", titulo: "Título da Quinta Imagem" },
];

// Reduzimos o padding superior em telas grandes
const PageContainer = styled(Box)`
  padding: 24px 16px;

  @media (min-width: 900px) {
    padding: 48px 80px 32px 80px;
  }
`;

const StyledCarousel = styled(Carousel)`
  width: 100%;
  height: auto;

  .control-arrow {
    background-color: #fc791e !important;
    border-radius: 50%;
    color: brown;
    font-size: 24px;
    padding: 10px;
    width: 45px;
    height: 45px;
    top: 45% !important;
    z-index: 10;
  }
`;

const StyledImagem = styled("img")`
  width: 100%;
  height: auto;
  min-height: 500px;        /* altura mínima para telas menores */
  max-height: 600px;
  object-fit: contain;

  @media (min-width: 900px) {
    min-height: 400px;
    max-height: 900px;
  }
`;

const StyledCard = styled(Card)`
  background-color: #f5f5dc;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px 20px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 600px) {
    padding: 20px 10px;
  }
`;

const StyledTitle = styled(Typography)`
  color: #fc791e;
  font-weight: bold;
  margin-bottom: 16px;
  font-size: 2rem;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const StyledText = styled(Typography)`
  color: #6a4f2f;
  font-size: 1.1rem;
  line-height: 1.5;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const ImageCarousel = () => {
  const [selectedText, setSelectedText] = useState(listaDeImagens[0].texto);
  const [selectedTitle, setSelectedTitle] = useState(listaDeImagens[0].titulo);

  return (
    <PageContainer id="image-carousel">
      <Grid container spacing={4} alignItems="center">
        {/* Carrossel */}
        <Grid item xs={12} md={6}>
          <StyledCarousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            onChange={(index) => {
              setSelectedText(listaDeImagens[index].texto);
              setSelectedTitle(listaDeImagens[index].titulo);
            }}
          >
            {listaDeImagens.map((item, index) => (
              <Box key={index}>
                <StyledImagem src={item.img} alt={`Imagem ${index + 1}`} />
              </Box>
            ))}
          </StyledCarousel>
        </Grid>

        {/* Texto */}
        <Grid item xs={12} md={6}>
          <StyledCard>
            <StyledTitle variant="h4">{selectedTitle}</StyledTitle>
            <StyledText>{selectedText}</StyledText>
          </StyledCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default ImageCarousel;
