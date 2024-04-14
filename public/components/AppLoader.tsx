import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const AppLoader = () => {
    return (
        <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <CircularProgress />
        </Box>
    )
}

export default AppLoader
