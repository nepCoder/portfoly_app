import * as React from 'react';
import { Fab,Tooltip } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import AppDrawer from '@/public/components/AppDrawer';
import CustomAppBar from '@/public/components/CustomAppBar';

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
                <Tooltip title='Create New Blog'>
                    <Fab variant="circular" size="medium" color="success" sx={{ position: 'fixed', right: 20, bottom: 20 }}>
                        <AddIcon />
                    </Fab>
                </Tooltip>
            </div>
        </main>
    );
}