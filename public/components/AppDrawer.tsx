'use client'
import { ContrastTwoTone, DashboardTwoTone, Inbox, Mail, NewspaperTwoTone } from '@mui/icons-material';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';
import React from 'react'
import NavButton from './NavButton';

const drawerWidth = 240;
const navButtons = [
    {
        buttonName:'Dashboard',
        path:'/dashboard',
        icon:<DashboardTwoTone/>
    },
    {
        buttonName:'Blogs',
        path:'/blogs',
        icon:<NewspaperTwoTone/>
    },
    {
        buttonName:'Themes',
        path:'/themes',
        icon:<ContrastTwoTone/>
    },
]

const AppDrawer = () => {
    const router = useRouter();
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar sx={{ bgcolor: 'background.default' }}>
                <Typography variant="h4" color={'green'} noWrap component="div">
                    NEPCODER
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {navButtons.map((nav, index) => ( <NavButton key={index} buttonName={nav.buttonName} path={nav.path} icon={nav.icon} />))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <Inbox /> : <Mail />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default AppDrawer
