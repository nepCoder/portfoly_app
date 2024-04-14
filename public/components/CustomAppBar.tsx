import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import NotificationPanel from './NotificationPanel'
import MySearchBar from './SearchBar'
import UserAvatar from './UserAvatar'

const drawerWidth = 240;

const CustomAppBar = () => {
    return (
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
            <Toolbar
                sx={{ bgcolor: 'background.default', color: 'green' }}
            >
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                    Blogs
                </Typography>
                <Box sx={{ display: 'flex', flexGrow: '1', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <NotificationPanel />
                    <MySearchBar />
                    <UserAvatar />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default CustomAppBar