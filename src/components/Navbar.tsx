import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = ({ setOpen }: { setOpen: any }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#7091F5', boxShadow: '2', borderBottom: '1' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <IconButton edge="start" color="inherit" sx={{ mr: 1 }}>
            <LocalHospitalIcon />
          </IconButton>
          <Typography variant="h6" component={RouterLink} to="/" sx={{ color: '#fff', textDecoration: 'none' }}>
            Medi Core
          </Typography>
        </Box>

        {/* Links */}
        <Box display="flex" alignItems="center" gap={2}>
          <Button color="inherit" component={RouterLink} to="#features">
            Features
          </Button>
          <Button color="inherit" component={RouterLink} to="#pricing">
            Pricing
          </Button>
          <Button color="inherit" component={RouterLink} to="#contact">
            Contact
          </Button>

          {/* CTA */}
          <Button
            variant="contained"
            // component={RouterLink}
            // to="/login"
            onClick={() => {
              setOpen(true)
            }}
            sx={{
              backgroundColor: '#96EFFF',
              color: '#000',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#C5FFF8',
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
