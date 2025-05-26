import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Imagem from '../AfricaImg/AfricaImg';
import { Grid } from '@mui/material';
import { useState } from 'react';

const drawerWidth = 240;

const StyledAppBar = styled(AppBar)`
  background-color: #fc791e !important;
  padding-top: 35px;
`;

const StyledListItemNav = styled(List)`
  display: flex;
  gap: 30px;
  padding-left: 0;
  justify-content: flex-start;
  margin-left: 20px; /* ou ajuste conforme quiser */
`;

const StyledListItem = styled(ListItem)`
  padding: 0 !important;
`;

const CustomLinkButton = styled(ListItemButton)`
  color: white !important;
  font-weight: 600;
  white-space: nowrap;
  font-size: 1.5rem;
  padding: 6px 12px;

  &:hover {
    background-color: #5f210e !important;
    color: #fc791e !important;
    border-radius: 5px;
  }
`;

const LogoContainer = styled(Box)`
  display: flex;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;

    @media (min-width: 600px) {
      width: 60px;
      height: 60px;
    }

    @media (min-width: 960px) {
      width: 70px;
      height: 70px;
    }
  }
`;

const ObservatorioBox = styled(Box)`
  background-color: #5f210e;
  border-radius: 5px;
  box-shadow: 0 0 0 2px black;
  padding: 15px;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;
  width: 95%;
  height: auto;
  margin-left: 20px;
  margin-right: auto;
  margin-bottom: 20px;
  gap: 10px;

  @media (max-width: 959px) {
    flex-direction: column;
    align-items: start;
    margin: auto; /* Centraliza de novo em telas pequenas */
    margin-bottom: 20px;
  }

  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  @media (min-width: 1200px) {
    width: 45%;
    margin-bottom: 20px;
  }
`;

const ObservatorioText = styled(Typography)`
  color: #fc791e;
  font-weight: 600;
  font-size: 2.5rem !important;
  text-align: center;
  word-break: break-word;
  width: 100%;

  @media (min-width: 960px) and (max-width: 1199px) {
    width: auto; /* <- deixa o texto ocupar só o necessário */
    text-align: left;
  }

  @media (min-width: 1200px) {
    font-size: 2.1rem !important;
  }
`;

function HeaderComponent(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = ['INÍCIO', 'SEMENTE CRIATIVA E SUSTENTÁVEL', 'CONTATOS'];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', marginTop: '10em !important' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Observatório de Matrizes Africanas
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              component="a"
              href={`#${item.replace(/\s+/g, '').toLowerCase()}`}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <StyledAppBar component="nav" position="fixed">
        <Toolbar sx={{ padding: 0, position: 'relative', minHeight: '100px !important' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile e Tablet (até 1199px) */}
          <Box
            sx={{
              display: { xs: 'flex', lg: 'none' },
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <ObservatorioBox sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <ObservatorioText>
                Observatório Matrizes Africanas
              </ObservatorioText>
              <LogoContainer>
                <Imagem />
              </LogoContainer>
            </ObservatorioBox>
          </Box>

          {/* Desktop (a partir de 1200px) */}
          <Box
            sx={{
              display: { xs: 'none', lg: 'flex' },
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              paddingRight: '50px',
              paddingLeft: '30px',
            }}
          >
            <ObservatorioBox>
              <ObservatorioText>
                Observatório Matrizes Africanas
              </ObservatorioText>
            </ObservatorioBox>
<Box sx={{ display: 'flex', justifyContent: 'flex-start', flex: 0.9}}>
  <StyledListItemNav>
    {navItems.map((item) => (
      <StyledListItem key={item}>
        <CustomLinkButton component="a" href={`#${item.replace(/\s+/g, '').toLowerCase()}`}>
          {item}
        </CustomLinkButton>
      </StyledListItem>
    ))}
  </StyledListItemNav>
</Box>


            <Box sx={{ ml: 2 }}>
              <Imagem />
            </Box>
          </Box>
        </Toolbar>
      </StyledAppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </>
  );
}

HeaderComponent.propTypes = {
  window: PropTypes.func,
};

export default HeaderComponent;
