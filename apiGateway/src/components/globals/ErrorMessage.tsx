import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import CancelIcon from '@mui/icons-material/Cancel';

type ErrorMessageProps = {
    error: Error,
    fn: () => void,
}

export default ({ error, fn }: ErrorMessageProps) => (
    <Box>
        <Stack direction="row">
            <IconButton onClick={ fn }>
                <CancelIcon />
            </IconButton>
            <Typography>
                { error.message }
            </Typography>
        </Stack>
    </Box>
);
