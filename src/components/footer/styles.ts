import { styled, alpha } from '@mui/material/styles';
import { Box } from '@mui/material';

const FooterBox = styled(Box)(({ theme }) => ({
    backgroundColor: alpha(theme.palette.background.default, 0.98),
    color: theme.palette.text.primary,
    position: 'sticky',
    top: '0px',
    zIndex: 100,
    boxShadow: `0px -1px 8px ${alpha(theme.palette.text.primary, 0.4)}`,
}));

export {FooterBox};