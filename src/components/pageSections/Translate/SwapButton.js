import SwapVertIcon from '@mui/icons-material/SwapVert';
import { Box } from '@mui/material';

export default function SwapButton({onClick}) {
    return <Box
        sx={{
            '& > :not(style)': { m: 4, width: "100%" },
        }}
    >
        <SwapVertIcon color='primary' fontSize='large' onClick={onClick} style={{margin: "auto", cursor: "pointer"}}/>
    </Box>
}