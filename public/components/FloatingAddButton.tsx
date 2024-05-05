'use client';

import { Fab, Tooltip } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import { pagesWithAddButton } from '../utils/constants/AppConst';

const FloatingAddButton = () => {
    const router = useRouter();
    const currentPath = usePathname();
    const [showFloatingButton, setShowFloatingButton] = useState(false);

    useEffect(() => {
        checkFloatingButtonCondition()
            .then((res) => {
                setShowFloatingButton(res);
            }).catch(() => {
                console.log('promise rejected')
            })
    }, [currentPath]);

    /**handlers */
    const handleClick = () => {
        router.push(currentPath + '/create');
    }

    /** functions */
    const checkFloatingButtonCondition = (): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            if (pagesWithAddButton.includes(currentPath.substring(1))) {
                resolve(true)
            } else {
                resolve(false)
            }
        })
    }

    return (
        <>
            {showFloatingButton && <Tooltip title={`Create new ${currentPath.substring(1)}`}>
                <Fab
                    variant="circular"
                    color="primary"
                    sx={{ position: 'fixed', right: 20, bottom: 20 }}
                    onClick={handleClick}>
                    <AddIcon />
                </Fab>
            </Tooltip>}
        </>
    )
}

export default FloatingAddButton
