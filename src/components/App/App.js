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
      <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1100, width: '100%' }}>
        <HeaderComponent />
      </Box>

      {/* Conteúdo principal com padding para não ficar embaixo do header */}
      <Box sx={{ paddingTop: { xs: '230px', sm: '250px', md: '250px', lg:'120', xg:'140' }, px: 2 }}>
        <Home />
      </Box>
    </Box>
  );
}

export default App;
