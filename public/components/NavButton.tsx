'use client'
import { DashboardTwoTone as DashboardIcon } from '@mui/icons-material'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const NavButton = (props: any) => {
    const router = useRouter();
    const [activePath, setActivePath] = useState('');

    useEffect(() => {
        if (props.current) {
            var arr = props.current.split('/');
            setActivePath('/' + arr[1])
        }
    }, [props.current]);

    const handleNavChange = (path: string) => {
        router.push(path);
    }



    return (
        <ListItem disablePadding className={activePath == props.path ? 'nav-selected' : 'nav-item'}>
            <ListItemButton onClick={() => handleNavChange(props.path)}>
                <ListItemIcon className={activePath == props.path ? 'selected-nav-icon' : ''}>
                    {props.icon}
                </ListItemIcon>
                <ListItemText primary={props.buttonName} />
            </ListItemButton>
        </ListItem>

    )
}
export default NavButton
