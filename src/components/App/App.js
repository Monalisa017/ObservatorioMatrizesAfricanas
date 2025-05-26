import React from 'react';
import { Box } from '@mui/material';
import background from '../../assets/imagens/background.png';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import Home from '../../pages/Home/home';

function App() {
  return (
    <Box
      component="div"
      sx={{
        backgroundImage: `url(${background})`,
        backgroundColor: 'transparent',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      {/* Header fixo no topo */}
      <HeaderComponent />

      {/* Conteúdo com padding-top para evitar sobreposição do AppBar */}
      <Box sx={{ paddingTop: '100px' }}>
        <Home />
      </Box>
    </Box>
  );
}

export default App;
