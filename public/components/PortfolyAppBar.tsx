import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import NotificationPanel from './NotificationPanel'
import MySearchBar from './SearchBar'
import UserAvatar from './UserAvatar'
import { CameraswitchOutlined as PreviewIcon } from '@mui/icons-material'
import { cursorTo } from 'readline'
import { usePathname } from 'next/navigation'
import AppBarTitle from './AppBarTitle'

const drawerWidth = 240;

const PortfolyAppBar = () => {
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
                    <AppBarTitle/>
                </Typography>
                <Box sx={{ display: 'flex', flexGrow: '1', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <IconButton>
                        <Tooltip title='Switch to Visitor Mode'>
                            <PreviewIcon style={{ cursor: 'pointer' }} />
                        </Tooltip>
                    </IconButton>
                    <NotificationPanel />
                    <MySearchBar />
                    <UserAvatar />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default PortfolyAppBar