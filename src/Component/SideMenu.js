import React from "react";
import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DialpadIcon from '@mui/icons-material/Dialpad';
import ApiIcon from '@mui/icons-material/Api';
import GridViewIcon from '@mui/icons-material/GridView';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ListSubheader from '@mui/material/ListSubheader';
import { ListItem } from '@mui/material';
import LeftCard from './LeftCard';
import RightCard from './RightCard';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import "./style.css"
import { red } from '@mui/material/colors';
import { SearchOutlined, Message, WbSunny, Widgets, Leaderboard } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import images from './images/images.jpg'



export default function SideMenu() {

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const drawerWidth = 240;


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"

                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, bgcolor: 'white' }}
            >

                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" color="" sx={{ color: "gray" }}>
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 0 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="body1" component="div" sx={{ mx: 2 }}>
                                Dashboard
                            </Typography>
                            <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                                Help
                            </Typography>
                            <SearchOutlined sx={{ mx: 1 }} />
                            <Leaderboard sx={{ mx: 1 }} />
                            <Widgets sx={{ mx: 1 }} />
                            <Message sx={{ mx: 1 }} />
                            <Widgets sx={{ mx: 1 }} />
                            <WbSunny sx={{ mx: 1 }} />
                            <Avatar xl={{ bgcolor: red[500] }} aria-label="recipe">
                                <Box height={200} width={200}
                                    component="img"
                                    sx={{
                                        height: 50,
                                        width: 50,
                                        maxHeight: { xs: 500, md: 500 },
                                        maxWidth: { xs: 350, md: 250 },
                                    }}
                                    alt="profile image"
                                    src={images}
                                />
                            </Avatar>

                        </Toolbar>
                    </AppBar>
                </Box>
            </AppBar >
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: 'black'
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />

                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'black', color: 'grey' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">

                        </ListSubheader>
                    }
                >
                    <ListItemButton>
                        <ListItemIcon color='grey'>
                            <GridViewIcon sx={{ color: grey[500] }} />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <ApiIcon sx={{ color: grey[500] }} />
                        </ListItemIcon>
                        <ListItemText primary="Account" />
                    </ListItemButton>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <DialpadIcon sx={{ color: grey[500] }} />
                        </ListItemIcon>
                        <ListItemText primary="User Management" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <FiberManualRecordIcon sx={{ color: grey[500] }} />
                                </ListItemIcon>
                                <ListItemText primary="Users Lists" NavLink="/userlists" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <FiberManualRecordIcon sx={{ color: grey[500] }} />
                                </ListItemIcon>
                                <ListItemText primary="View Users" />
                            </ListItemButton>
                        </List>

                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <FiberManualRecordIcon sx={{ color: grey[500] }} />
                            </ListItemIcon>
                            <ListItemText primary="Roles" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <FiberManualRecordIcon sx={{ color: grey[500] }} />
                            </ListItemIcon>
                            <ListItemText primary="Permission" />
                        </ListItemButton>

                    </Collapse>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <Button size="medium" color="grey" variant="contained"  fontWeight='bold' backgroundColor="grey">
                        Docs & Component
                    </Button>

                </List>
                <Divider />

            </Drawer>

            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <br></br>
                <h3>View User Details</h3>
                <p color="grey"> Home- User Management- User Lists</p>

                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                        variant="outlined"
                        sx={{ m: 1 }}
                        startIcon={<FilterAltIcon />}
                        className="filter_button"
                    >
                        filter
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ m: 1 }}
                        className="button_Background"
                    >
                        Create
                    </Button>
                </Box>
                {/* Inner Menu bar */}
                <Typography component="list" sx={{ display: "flex", justifyContent: "flex-end", color: 'grey', fontWeight: "bold", alignItem: "flex-end" }}>
                    <ul className="innermenu topnav " display="inline" >
                        <li className="active" >Overview</li>
                        <li>Security</li>
                        <li>Event and Logs</li>


                        <Button
                            variant="contained"
                            sx={{ m: 1 }}
                            className="button_Background"
                        >
                            Actions
                        </Button>
                    </ul>
                </Typography>


                <Typography paragraph Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >


                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                            <Item>
                                <LeftCard /></Item>
                        </Grid>
                        <Grid item xs={8}>
                            <Item>
                                <RightCard />
                            </Item>
                        </Grid>
                    </Grid>
                    <Divider />

                </Typography>
                <Grid container spacing={2}>
                        <Grid item lg={9} md={8} sm={6} xs={12} sx={{ my: 2 }}>
                            <Box>
                                <Typography level="body2">
                                    <span className="footer_text">2022 ©</span> KeenThemes
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12} sx={{ my: 2 }}>
                            <Stack direction="row" spacing={2}>
                                <NavLink to={"/"} className="navLink">
                                    About
                                </NavLink>
                                <NavLink to={"/"} className="navLink">
                                    Support
                                </NavLink>
                                <NavLink to={"/"} className="navLink">
                                    Purchase
                                </NavLink>
                            </Stack>
                        </Grid>
                    </Grid>
            </Box>
        </Box >
    );
}