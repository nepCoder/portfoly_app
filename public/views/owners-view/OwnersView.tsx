import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import SearchBar from '@/public/components/SearchBar';
import MySearchBar from '@/public/components/SearchBar';
import { Grid, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import UserAvatar from '@/public/components/UserAvatar';
import { ContrastTwoTone, DashboardTwoTone, NewspaperTwoTone } from '@mui/icons-material';
import NotificationPanel from '@/public/components/NotificationPanel';
import MainContent from '@/public/components/MainContent';
import AppDrawer from '@/public/components/AppDrawer';
import CustomAppBar from '@/public/components/CustomAppBar';
import AppLoader from '@/public/components/AppLoader';

const drawerWidth = 240;


export default function OwnersView({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className='flex h-screen w-screen'>
            <CustomAppBar />
            <AppDrawer />
            <div className='mt-16 p-3 w-full bg-white'>
                {children}
            </div>
        </main>
    );
}