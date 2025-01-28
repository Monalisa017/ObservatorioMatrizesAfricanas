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
  justify-content: space-around;
  margin: auto;
`;

function Home() {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "transparent",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        margin: "0",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: "5%",
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
              border: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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

          {/* Segundo Grid - Conteúdo */}
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={5}
            style={{
              border: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <CardComponent />
            </Box>
          </Grid>
        </StyledGrid>
      </StyledBoxGrid>
    </Box>
  );
}

export default Home;

