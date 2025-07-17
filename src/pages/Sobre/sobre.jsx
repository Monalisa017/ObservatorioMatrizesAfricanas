import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
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
  max-width: 100%;
  height: auto;
  border-radius: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-top: 10px

  img {
    width: 100%;
    height: auto;
    max-width: 100%;
    display: block;
    object-fit: contain; /* Mostra a imagem inteira */
  }

`;


function Contatos() {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "whitesmoke",
        width: "80%",
        margin: "0 auto",
        marginTop: { xs: "10px", sm: "0px", md: "30px", lg: "20px", xl: "50px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        item
        xs={12}
        lg={10}
        sm={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: 1, sm: 2, md: 3 },
        }}
      >
        <ImageWrapper>
          <Typography>Sobre</Typography>
        </ImageWrapper>
      </Grid>
    </Box>
  );
}

export default Contatos;
