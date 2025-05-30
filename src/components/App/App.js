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
        minWidth: '250vh !important',
        minHeight: '100vh',
      }}
    >
      <Box>
        <HeaderComponent />
      </Box>
      <Box>
        <Home />
      </Box>
    </Box>
  );
}

export default App;
