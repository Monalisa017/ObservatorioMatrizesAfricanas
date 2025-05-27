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
import Imagem from '../AfricaImg/AfricaImg';
import { useState } from 'react';
import {
  StyledAppBar,
  StyledListItemNav,
  StyledListItem,
  CustomLinkButton,
  LogoContainer,
  ObservatorioBox,
  ObservatorioText,
} from '../HeaderComponent/HeaderComponent.styled.js';

const drawerWidth = 240;

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
      <StyledAppBar component="nav" position="fixed" id="header">
        <Toolbar sx={{ padding: 0, position: 'relative', minHeight: '10px !important' }}>
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
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', flex: 0.9 }}>
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
