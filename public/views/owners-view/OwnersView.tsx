import * as React from 'react';
import AppDrawer from '@/public/components/AppDrawer';
import CustomAppBar from '@/public/components/PortfolyAppBar';
import FloatingAddButton from '@/public/components/FloatingAddButton';

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
                <FloatingAddButton/>
            </div>
        </main>
    );
}