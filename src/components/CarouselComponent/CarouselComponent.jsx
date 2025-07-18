import React, { useState, useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import { Box, Grid, Typography, Card } from '@mui/material';
import audioBabaSilvio from '../../assets/audios/ILE BABA SILVIO.mp3';
import audioAziris from '../../assets/audios/ILE AZIRI.mp3';

// ✅ Importar imagens dinamicamente (com .default)
const importarImagens = (imagens) =>
  Object.entries(imagens).map(([path, mod]) => mod.default);

// ✅ Caminhos sem espaço nos nomes das pastas
const imagensBabaSilvio = importarImagens(
  import.meta.glob('../../assets/ILE_BABA_SILVIO/*.{jpg,jpeg,png}', { eager: true })
);

const imagensAziris = importarImagens(
  import.meta.glob('../../assets/ILE_AZIRI/*.{jpg,jpeg,png}', { eager: true })
);

// Montar os objetos com título e texto
const imagens1a40 = imagensBabaSilvio.map((img, i) => ({
  img,
  texto: `Texto para a imagem ${i + 1}`,
  titulo: "ILE BABA SILVIO",
  audio: audioBabaSilvio
}));

const imagens41a70 = imagensAziris.map((img, i) => ({
  img,
  texto: `Texto para a imagem ${i + 41}`,
  titulo: "ILE AZIRI",
  audio: audioAziris
}));

const listaDeImagens = [...imagens1a40, ...imagens41a70];

// Estilos
const PageContainer = styled(Box)`padding: 24px 16px;`;

const StyledCarousel = styled(Carousel)`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: 100px;


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
  object-fit: contain;
  border-radius: 8px;
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
  width: 100%;

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
  @media (max-width: 600px) { font-size: 1.5rem; }
`;

const StyledText = styled(Typography)`
  color: #6a4f2f;
  font-size: 1.1rem;
  line-height: 1.5;
  @media (max-width: 600px) { font-size: 1rem; }
`;

const AudioPlayer = styled("audio")`
  width: 100%;
  margin-top: 16px;
`;

const ImageCarousel = () => {
  const [selectedText, setSelectedText] = useState(listaDeImagens[0].texto);
  const [selectedTitle, setSelectedTitle] = useState(listaDeImagens[0].titulo);
  const audioRef = useRef(null);
  const lastAudioRef = useRef(listaDeImagens[0].audio);
  const [selectedItem, setSelectedItem] = useState(listaDeImagens[0]);

  const handleChange = (index) => {
    const novoItem = listaDeImagens[index];
    setSelectedItem(novoItem);
    setSelectedText(novoItem.texto);
    setSelectedTitle(novoItem.titulo);

    if (audioRef.current && novoItem.audio !== lastAudioRef.current) {
      lastAudioRef.current = novoItem.audio;
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  return (
    <PageContainer id="image-carousel">
      <Grid container spacing={4} alignItems="center" justifyContent="center" direction={{ xs: 'column', lg: 'row' }}>
        <Grid item xs={12} lg={6}>
          <StyledCard>
            <StyledTitle variant="h4">{selectedTitle}</StyledTitle>
            <StyledText>{selectedText}</StyledText>
            <AudioPlayer ref={audioRef} src={selectedItem.audio} controls preload="auto" />
          </StyledCard>
        </Grid>

        <Grid item xs={12} lg={6}>
          <StyledCarousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            interval={7000}
            onChange={handleChange}
            showStatus={false}
            showIndicators={true}
          >
            {listaDeImagens.map((item, index) => {
              console.log("Caminho da imagem:", item.img); // 🐞 DEBUG
              return (
                <div key={index}>
                  <StyledImagem src={item.img} alt={`Imagem ${index + 1}`} />
                </div>
              );
            })}
          </StyledCarousel>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default ImageCarousel;
