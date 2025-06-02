import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import { Box, Grid, Typography, Card } from '@mui/material';

// Importando todas as 40 imagens manualmente
import imagem1 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-1.jpg';
import imagem2 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-2.jpg';
import imagem3 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-3.jpg';
import imagem4 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-4.jpg';
import imagem5 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-5.jpg';
import imagem6 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-6.jpg';
import imagem7 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-7.jpg';
import imagem8 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-8.jpg';
import imagem9 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-9.jpg';
import imagem10 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-10.jpg';
import imagem11 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-11.jpg';
import imagem12 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-12.jpg';
import imagem13 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-13.jpg';
import imagem14 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-14.jpg';
import imagem15 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-15.jpg';
import imagem16 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-16.jpg';
import imagem17 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-17.jpg';
import imagem18 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-18.jpg';
import imagem19 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-19.jpg';
import imagem20 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-20.jpg';
import imagem21 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-21.jpg';
import imagem22 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-22.jpg';
import imagem23 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-23.jpg';
import imagem24 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-24.jpg';
import imagem25 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-25.jpg';
import imagem26 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-26.jpg';
import imagem27 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-27.jpg';
import imagem28 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-28.jpg';
import imagem29 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-29.jpg';
import imagem30 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-30.jpg';
import imagem31 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-31.jpg';
import imagem32 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-32.jpg';
import imagem33 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-33.jpg';
import imagem34 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-34.jpg';
import imagem35 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-35.jpg';
import imagem36 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-36.jpg';
import imagem37 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-37.jpg';
import imagem38 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-38.jpg';
import imagem39 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-39.jpg';
import imagem40 from '../../assets/ILE BABA SILVIO/ILE_BABA_SILVIO_POR_CARLA_MARIA-40.jpg';

// ... (todos os imports anteriores)

import imagem41 from '../../assets/ILE AZIRI/IMG_20250517_155917.jpg';
import imagem42 from '../../assets/ILE AZIRI/IMG_20250517_155918.jpg';
import imagem43 from '../../assets/ILE AZIRI/_MG_9071.jpg';
import imagem44 from '../../assets/ILE AZIRI/_MG_9074.jpg';
import imagem45 from '../../assets/ILE AZIRI/_MG_9078.jpg';
import imagem46 from '../../assets/ILE AZIRI/_MG_9084.jpg';
import imagem47 from '../../assets/ILE AZIRI/_MG_9085.jpg';
import imagem48 from '../../assets/ILE AZIRI/_MG_9089.jpg';
import imagem49 from '../../assets/ILE AZIRI/_MG_9094.jpg';
import imagem50 from '../../assets/ILE AZIRI/_MG_9104.jpg';
import imagem51 from '../../assets/ILE AZIRI/_MG_9109.jpg';
import imagem52 from '../../assets/ILE AZIRI/_MG_9110.jpg';
import imagem53 from '../../assets/ILE AZIRI/_MG_9115.jpg';
import imagem54 from '../../assets/ILE AZIRI/_MG_9121.jpg';
import imagem55 from '../../assets/ILE AZIRI/_MG_9126.jpg';
import imagem56 from '../../assets/ILE AZIRI/_MG_9132.jpg';
import imagem57 from '../../assets/ILE AZIRI/_MG_9133.jpg';
import imagem58 from '../../assets/ILE AZIRI/_MG_9144.jpg';
import imagem59 from '../../assets/ILE AZIRI/_MG_9151.jpg';
import imagem60 from '../../assets/ILE AZIRI/_MG_9154.jpg';
import imagem61 from '../../assets/ILE AZIRI/_MG_9160.jpg';
import imagem62 from '../../assets/ILE AZIRI/_MG_9167.jpg';
import imagem63 from '../../assets/ILE AZIRI/_MG_9169.jpg';
import imagem64 from '../../assets/ILE AZIRI/_MG_9174.jpg';
import imagem65 from '../../assets/ILE AZIRI/_MG_9176.jpg';
import imagem66 from '../../assets/ILE AZIRI/_MG_9178.jpg';
import imagem67 from '../../assets/ILE AZIRI/_MG_9182.jpg';
import imagem68 from '../../assets/ILE AZIRI/_MG_9183.jpg';
import imagem69 from '../../assets/ILE AZIRI/_MG_9186.jpg';
import imagem70 from '../../assets/ILE AZIRI/_MG_9191.jpg';

const titulo1 = "ILE BABA SILVIO";
const titulo2 = "ILE AZIRI";

const imagens1a40 = [
  imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8, imagem9, imagem10,
  imagem11, imagem12, imagem13, imagem14, imagem15, imagem16, imagem17, imagem18, imagem19, imagem20,
  imagem21, imagem22, imagem23, imagem24, imagem25, imagem26, imagem27, imagem28, imagem29, imagem30,
  imagem31, imagem32, imagem33, imagem34, imagem35, imagem36, imagem37, imagem38, imagem39, imagem40
].map((img, i) => ({
  img,
  texto: `Texto para a imagem ${i + 1}`,
  titulo: titulo1
}));

const imagens41a70 = [
  imagem41, imagem42, imagem43, imagem44, imagem45, imagem46, imagem47, imagem48, imagem49, imagem50,
  imagem51, imagem52, imagem53, imagem54, imagem55, imagem56, imagem57, imagem58, imagem59, imagem60,
  imagem61, imagem62, imagem63, imagem64, imagem65, imagem66, imagem67, imagem68, imagem69, imagem70
].map((img, i) => ({
  img,
  texto: `Texto para a imagem ${i + 41}`,
  titulo: titulo2
}));

const listaDeImagens = [...imagens1a40, ...imagens41a70];

// Estilos

const PageContainer = styled(Box)`
  padding: 24px 16px;

`;

const StyledCarousel = styled(Carousel)`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: 10px;

  @media (min-width: 600px) {
    padding-top: 20px;
  }

  @media (min-width: 900px) {
    padding-top: 30px;
  }

  @media (min-width: 1200px) {
    padding-top: 0px;
  }

  .control-arrow {
    background-color: #fc791e !important;
    border-radius: 50%;
    color: brown;
    font-size: 24px;
    padding: 10px;
    width: 45px;
    height: 45px;
    z-index: 10;
    margin: 0 10px;
  }
`;



const StyledImagem = styled("img")`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  object-fit: contain; /* Mostra a imagem inteira */

  @media (min-width: 900px) {
    height: 500px;
    padding-top: 0px;
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
  margin: 0 auto;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  width: 100%;

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
      <Grid
  container
  spacing={4}
  alignItems="center"
  justifyContent="center"
  direction={{ xs: 'column', lg: 'row' }}
>
  <Grid item xs={12} lg={6}>
    <StyledCard>
      <StyledTitle variant="h4">{selectedTitle}</StyledTitle>
      <StyledText>{selectedText}</StyledText>
    </StyledCard>
  </Grid>

  <Grid item xs={12} lg={6} sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
  <Box width="100%">
    <StyledCarousel
      showArrows
      autoPlay
      infiniteLoop
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
  </Box>
</Grid>

</Grid>

    </PageContainer>
  );
};

export default ImageCarousel;
