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
import Button from '@mui/material/Button';
import styled from 'styled-components';
import Imagem from '../../assets/imagens/africa.png';
import { Grid } from '@mui/material';
import { useState } from 'react';
import background from '../../assets/imagens/background.png';


function Home(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(true);



  return (
    <Box
      component="div"
      sx={{
        backgroundImage: `url(${background})`,
        backgroundColor: 'transparent',
        backgroundSize: 'cover',
        minWidth: '100vh',
        minHeight: '100vh',
        marginTop:'50px'
      }}
    >
      <Grid container>
        <Grid item xs={6} sm={6} md={6} lg={6}>

          <Typography> TESTE </Typography>
        </Grid>
        <Grid itemxs={6} sm={6} md={6} lg={6} >

          <Typography> TESTE2 </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
