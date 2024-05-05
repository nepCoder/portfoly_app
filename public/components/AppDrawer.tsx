'use client'
import { ContrastTwoTone, DashboardTwoTone, Inbox, Mail, NewspaperTwoTone } from '@mui/icons-material';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import React from 'react'
import NavButton from './NavButton';
import { usePathname } from 'next/navigation';
import BlogForm from '@/app/blogs/forms/BlogForm';

const drawerWidth = 240;
const navButtons = [
    {
        buttonName: 'Dashboard',
        path: '/dashboard',
        icon: <DashboardTwoTone />
    },
    {
        buttonName: 'Blogs',
        path: '/blogs',
        icon: <NewspaperTwoTone />
    },
    {
        buttonName: 'Themes',
        path: '/themes',
        icon: <ContrastTwoTone />
    },
]

const AppDrawer = () => {
    const currentPath = usePathname();
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
                {navButtons.map((nav: any, index: any) => (<NavButton key={index} buttonName={nav.buttonName} path={nav.path} icon={nav.icon} current={currentPath} />))}
            </List>
            <Divider />
            <BlogForm/>
        </Drawer>
    )
}

export default AppDrawer
