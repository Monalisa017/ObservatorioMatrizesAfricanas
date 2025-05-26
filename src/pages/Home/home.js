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

function Home() {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "transparent",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: { xs: "100px", sm: "100px" }, // compensar o AppBar fixo
      }}
    >
      <StyledBoxGrid>
        <StyledGrid container>
          <Grid
            item
            xs={12}
            lg={7}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "100%", padding: { xs: 1, sm: 2 } }}>
              <ImageCarousel />
            </Box>
          </Grid>
        </StyledGrid>
      </StyledBoxGrid>
    </Box>
  );
}

export default Home;
