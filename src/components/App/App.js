import React from 'react';
import { Box } from '@mui/material';
import background from '../../assets/imagens/background.png';
import HeaderComponent from '../HeaderComponent/HeaderComponent'

function App() {
  return (
    <Box
      component="div"
      sx={{
        backgroundImage: `url(${background})`,
        backgroundColor:'transparent',
        backgroundSize: 'cover',
        minWidth: '100vh',
        minHeight: '100vh',
      }}
    >
      <HeaderComponent />
    </Box>

  );
}

export default App;
