'use client'
import React, { useEffect, useState } from 'react'
import { Avatar, Badge, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { deepOrange, green, lightGreen } from '@mui/material/colors';
import { Notifications as NotificationIcon } from '@mui/icons-material';
import { Console } from 'console';

interface Notification {
    id: number,
    message: string,
    viewed: boolean
}
let unseenNotification: Notification[] = []
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NotificationPanel = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [notificationCount, setNotificationCount] = React.useState<number>(0);
    const [notifications, setNotifications] = React.useState<Notification[]>([
        {
            id: 1,
            message: 'Your blog got 240 views today.',
            viewed: false
        },
        {
            id: 2,
            message: 'Your blog got 240 views today.',
            viewed: false
        },
        {
            id: 3,
            message: 'Your blog got 240 views today.',
            viewed: false
        },
        {
            id: 4,
            message: 'Your blog got 240 views today.',
            viewed: false
        }
    ]);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleNotificationClick = (id: any) => {
        let newValue = notifications;
        let index = newValue.findIndex(x => x.id == id);
        newValue[index].viewed = true;
        setNotifications(newValue);
        setNotificationCount(newValue.filter(x => !x.viewed).length);
        handleCloseUserMenu();
    }

    useEffect(() => {
        setNotificationCount(notifications.filter(x =>  !x.viewed).length);
    }, [notifications])

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Notifications">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {notificationCount > 0 ? <Badge badgeContent={ notificationCount} color="secondary">
                        <NotificationIcon />
                    </Badge> : <NotificationIcon />}
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {/* {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))} */}
                <Box sx={{ width: 260 }}>
                    {
                        notifications.length > 0 ? notifications.map((notification, index) =>
                            <Typography
                                key={index}
                                sx={{
                                    p: 1, color: notification.viewed ? 'lightgray' : '',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        bgcolor: 'lightgray'
                                    }
                                }}
                                onClick={() => handleNotificationClick(notification.id)}
                            >
                                {notification.message}
                            </Typography>)
                            : <Typography>There's no new notifications!</Typography>
                    }
                </Box>
            </Menu>
        </Box>
    )
}

export default NotificationPanel
