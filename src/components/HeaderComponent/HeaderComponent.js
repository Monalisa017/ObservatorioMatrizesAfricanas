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
import Imagem from '../AfricaImg/AfricaImg';
import { Grid } from '@mui/material';
import { useState } from 'react';


const drawerWidth = 240;

const StyledAppBar = styled(AppBar)`
background-color: #fc791e !important; 
height: auto;
padding-top: 35px;
`;

const StyledMarginBottom = styled(Typography)`
margin-bottom: 20px;
color: green;
width: 200px;
height:20px
`;

const StyledListItem = styled(ListItem)`
    display: 'block';
`;


function HeaderComponent(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(true);

    const navItems = ['Início', 'Semente Criativa e Sustentável', 'Contatos'];
    const [selectedNavItems, setSelectedItemNavItems] = useState('');

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
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    // Função para lidar com a seleção de um item
    const handleItemClick = (itemName) => {
        setSelectedItemNavItems(itemName);
    }

    function Navigation() {
        // Define o estado local para armazenar o item selecionado

        if (navItems === "Ínicio") {
            alert("Pegando alert 2");

        }

    }
    return (

        <><StyledAppBar >
            <Box sx={{ display: 'flex' }}>
                <nav>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>

                <CssBaseline />


                <Grid container item={true}>
                    <Grid item xs={3} sm={3} md={3} lg={3} sx={{width:'auto', height:'80px',margin:'10px', marginTop:'-10px', display:'flex', justifyItems:'space-between', borderRadius:'5%',boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',}}>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ color: '#fff', paddingTop:'7%', width:'auto', height:'70px', fontWeight:600, fontSize:'1.25em', padding:'7%', display:'flex', justifyItems:'space-between'}}
                        >
                            Observatório Matrizes Africanas
                        </Typography>
                    </Grid>


                    <Grid item xs={7} sm={7} md={7} lg={7} sx={{paddingTop:'0.5%'}}>
                        <StyledListItem component="nav" >
                            <ListItem button component="a" href="#link1" >
                                <ListItemText primary="ÍNICIO" />
                            </ListItem>
                            <ListItem button component="a" href="#link2">
                                <ListItemText primary="SEMENTE CRIATIVA E SUSTENTÁVEL"/>
                            </ListItem>
                            <ListItem button component="a" href="#link3">
                                <ListItemText primary="CONTATOS" />
                            </ListItem>
                        </StyledListItem>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1}>

                    <Imagem />
                    </Grid>
                </Grid>

            </Box>
        </StyledAppBar>

        </>
    );
}



export default HeaderComponent;
