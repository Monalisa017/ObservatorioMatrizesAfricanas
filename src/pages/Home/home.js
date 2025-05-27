import * as React from "react";
import { Box, Grid } from "@mui/material";
import styled from "styled-components";
import ImageCarousel from "../../components/CarouselComponent/CarouselComponent";

const StyledBoxGrid = styled(Box)`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const StyledGrid = styled(Grid)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled(Box)`
  width: 100%;
  max-width: 100%; // Remove limite fixo
  height: auto; // Permite que a altura se ajuste automaticamente

  // Opcionalmente, pode ajustar o padding em breakpoints para manter o espaçamento
  @media (min-width: 900px) {
    padding: 0 32px; // ou o que preferir
  }
`;


const TextoContainer = styled(Box)`
  padding: 16px;
  background-color: #f9f9f9;
  font-size: 14px;

  @media (min-width: 900px) {
    font-size: 18px;
    padding: 32px;
  }
`;


function Home() {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "transparent",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      {/* Container principal */}
      <Grid item xs={12} lg={10} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: { xs: 1, sm: 2, md: 3 } }}>
  <ImageWrapper>
    <ImageCarousel />
  </ImageWrapper>
</Grid>


    </Box>
  );
}

export default Home;
