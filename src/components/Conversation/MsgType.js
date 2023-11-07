import { Box, Divider, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'

const MediaMsg = ({ el }) => {
    const theme = useTheme();
    return (
        <Stack direction='row' justifyContent={el.incoming ? 'start' : ' end'}>
            <Box p={1.5} sx={{
                backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
                borderRadius: 1.5,
                width: "max-content"
            }}>
                <Stack spacing={1}>
                    <img src={el.img} alt={el.message} style={{ maxHeight: 201, borderRadius: '10px' }} />
                </Stack>
            </Box>
        </Stack>
    )
}

const TextMsg = ({ el }) => {
    const theme = useTheme();
    return (
        <Stack direction='row' justifyContent={el.incoming ? 'start' : ' end'}>
            <Box p={1.5} sx={{
                backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
                borderRadius: 1.5,
                width: "max-content"
            }}>
                <Typography variant='body2' color={el.incoming ? theme.palette.text : "#fff"}>{el.message}</Typography>
            </Box>
        </Stack>
    )
}

const Timeline = ({ el }) => {
    const theme = useTheme();
    return (
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Divider width='46%' />
            <Typography variant='caption' sx={{ color: theme.palette.text }}>{el.text}</Typography>
            <Divider width='46%' />
        </Stack>
    )
}

export { Timeline, TextMsg, MediaMsg };
