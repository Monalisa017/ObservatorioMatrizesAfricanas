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
  max-width: 100%;
  height: auto;

  @media (min-width: 900px) {
    padding: 0 32px;
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
      <Grid
        item
        xs={12}
        lg={10}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: 1, sm: 2, md: 3 },
        }}
      >
        <ImageWrapper>
          <ImageCarousel />
        </ImageWrapper>
      </Grid>
    </Box>
  );
}

export default Home;
