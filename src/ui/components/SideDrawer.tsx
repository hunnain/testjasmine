import React                    from 'react';
import clsx                     from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer                   from '@material-ui/core/Drawer';
import AppBar                   from '@material-ui/core/AppBar';
import Toolbar                  from '@material-ui/core/Toolbar';
import List                     from '@material-ui/core/List';
import CssBaseline              from '@material-ui/core/CssBaseline';
import Divider                  from '@material-ui/core/Divider';
import IconButton               from '@material-ui/core/IconButton';
import MenuIcon                 from '@material-ui/icons/Menu';
import ChevronLeftIcon          from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon         from '@material-ui/icons/ChevronRight';
import ListItem                 from '@material-ui/core/ListItem';
import ListItemIcon             from '@material-ui/core/ListItemIcon';
import ListItemText             from '@material-ui/core/ListItemText';
import ArrowBackIcon            from '@material-ui/icons/ArrowBack';
import { NavLink, Link }        from 'react-router-dom'
import Logo                     from '../assets/images/logo.png'
import Navbar                   from '../components/Navbar'
import RebuildIcon              from '../assets/images/rebuild.png'
import HomeIcon                 from '../assets/images/homeIcon.png';

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
    root: {
        display:                'flex',
    },

    header: {
        background:             '#0c3451',
        width:                  '100%',
        float:                  'left',
    },
    logoSection: {
        float:                  'left'
    },
    logo: {
        height:                 '60px',
        padding:                '0 20px'
    },
    anchBtn: {
        color:                  '#fff',
        padding:                '20px 10px 20px 20px',
        float:                  'left'
    },    
    icons: {
        width:                  '25px',
        float:                  'left',
        maxWidth:               '100%',
    },
    active: {
        background:             '#ddd',
        width:                  '100%'
    },
    navLink: {
        float:                  'left',
        width:                  '100%',
        paddingLeft:            '10px'
    },
    appBar: {
        background:             '#0c3451',
        zIndex:                 theme.zIndex.drawer + 1,
        transition:             theme.transitions.create(['width', 'margin'], {
            easing:             theme.transitions.easing.sharp,
            duration:           theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft:             drawerWidth,
        width:                  `calc(100% - ${drawerWidth}px)`,
        transition:             theme.transitions.create(['width', 'margin'], {
            easing:             theme.transitions.easing.sharp,
            duration:           theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight:            20,
    },
    hide: {
        display:                'none',
    },
    drawer: {
        width:                  drawerWidth,
        flexShrink:             0,
        whiteSpace:             'nowrap',
    },
    drawerOpen: {
        width:                  drawerWidth,
        transition:             theme.transitions.create('width', {
            easing:             theme.transitions.easing.sharp,
            duration:           theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition:             theme.transitions.create('width', {
            easing:             theme.transitions.easing.sharp,
            duration:           theme.transitions.duration.leavingScreen,
        }),
        overflowX:              'hidden',
        width:                  theme.spacing(7) + 1,

        [theme.breakpoints.up('sm')]: {
            width:              theme.spacing(7) + 1,
        },
    },
    toolbar: {
        display:                'flex',
        alignItems:             'center',
        justifyContent:         'flex-end',
        padding:                theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    navList:{
        '& a':{
            paddingTop:          '10px',
            paddingBottom:       '10px',
            borderBottom:        '1px solid #ccc',
            '&:hover':{
                background:      '#ddd',                
            }
        }
    },
    navText:{
        '& span':{
            fontSize:             '15px',
            fontWeight:           'bold'
        }        
    }
}));
type headerOptions = {
    showBack: boolean
}
function SideDrawer({ showBack }: headerOptions) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const navData = [
    {
        navName:    'Home',
        navIcon:    HomeIcon,
        anchLink:   '/home'    
    },
    {
        navName:    'Rebuild Files',
        navIcon:    RebuildIcon,
        anchLink:   '/rebuildFiles'    
    }
]

    return (
        <div>
            <CssBaseline />
            <AppBar
                position=                       "fixed"
                className=                      {clsx(classes.appBar, {
                    [classes.appBarShift]:      open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color=                  "inherit"
                        aria-label=             "open drawer"
                        onClick=                {handleDrawerOpen}
                        edge=                   "start"
                        className=              {clsx(classes.menuButton, {
                            [classes.hide]:     open,
                        })}
                    >
                    <MenuIcon />
                    </IconButton>
                    <div className={classes.header} >
                        {
                            showBack && <Link to="/home"><ArrowBackIcon className={classes.anchBtn} /></Link>}
                        <div className={classes.logoSection}>
                            <img src={Logo} className={classes.logo}></img>
                        </div>
                        <Navbar />
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                variant=                            "permanent"
                className=                          {clsx(classes.drawer, {
                    [classes.drawerOpen]:           open,
                    [classes.drawerClose]:          !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]:       open,
                        [classes.drawerClose]:      !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List className={classes.navList}>
                {navData.map((nav, index) => (
                        <ListItem key={index} button component={NavLink} to={nav.anchLink} activeClassName={classes.active}>
                            <ListItemIcon><img src={nav.navIcon}  className={classes.icons}></img></ListItemIcon>
                            <ListItemText primary={nav.navName} className={classes.navText}/>
                        </ListItem>
                    ))}
                </List>               
            </Drawer>
        </div>
    );
}

export default SideDrawer;