import React, { useState } from 'react';
import { Box } from '@mui/material';
import background from '@/assets/imagens/background.png';
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent';
import Home from '@/pages/Home/home';
import Sobre from '../pages/Sobre/sobre';
import Contatos from '../pages/Contatos/contatos';
import Footer from '../components/Footer/footer';

function App() {
  const [selectedTab, setSelectedTab] = useState('INÍCIO');

  const renderPage = () => {
    switch (selectedTab) {
      case 'SOBRE':
        return <Sobre />;
      case 'CONTATOS':
        return <Contatos />;
      case 'INÍCIO':
      default:
        return <Home />;
    }
  };

  return (
    <>
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
        <HeaderComponent selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </Box>

      {/* Conteúdo principal com padding para não ficar embaixo do header */}
      <Box
        sx={{
          paddingTop: {
            xs: '170px',
            sm: '280px',
            md: '180px',
            lg: '250px',
            xl: '100px',
          },
          px: 2,
        }}
      >
        {renderPage()}
      </Box>
    </Box>
    <Box >
  <Footer />
</Box>

    </>
  );
}

export default App;
