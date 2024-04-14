'use client'
import { DashboardTwoTone as DashboardIcon } from '@mui/icons-material'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

const NavButton = (props: any) => {
    const router = useRouter();

    const handleNavChange = (path: string) => {
        router.push(path);
    }

    return (
        <ListItem key={props.key} disablePadding>
            <ListItemButton onClick={() => handleNavChange(props.path)}>
                <ListItemIcon>
                    {props.icon}
                </ListItemIcon>
                <ListItemText primary={props.buttonName} />
            </ListItemButton>
        </ListItem>

    )
}
export default NavButton
