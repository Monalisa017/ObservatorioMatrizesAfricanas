import React from 'react';
import { Box } from '@mui/material';
import background from '../../assets/imagens/background.png';

function App() {
  return (
    <Box
      component="div"
      sx={{
        backgroundImage: `url(${background})`,
        backgroundColor:'red',
        backgroundSize: 'cover',
        minWidth: '100vh',
        minHeight: '100vh',
      }}
    >
    </Box>

  );
}

export default App;
