import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import ImageCarousel from "../../components/CarouselComponent/CarouselComponent";
import CardComponent from "../../components/CardComponent/CardComponent";

const StyledBoxGrid = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledGrid = styled(Grid)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; /* Alinha horizontalmente no centro */
  align-items: center; /* Alinha verticalmente no centro */
  margin: 0; /* Remove o margin automático */
`;

function Home() {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "transparent",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",  /* Garantir que ocupa toda a altura da tela */
        margin: "0",
        display: "flex",
        justifyContent: "center", /* Centraliza horizontalmente */
        alignItems: "center",  /* Centraliza verticalmente */
        paddingTop: "5%",  /* Ajustar o espaçamento do topo */
      }}
    >
      <StyledBoxGrid>
        <StyledGrid container>
          {/* Primeiro Grid - Imagens */}
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={7}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",  /* Garantir que o grid ocupa toda a altura disponível */
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              <ImageCarousel />
            </Box>
          </Grid>
        </StyledGrid>
      </StyledBoxGrid>
    </Box>
  );
}

export default Home;
