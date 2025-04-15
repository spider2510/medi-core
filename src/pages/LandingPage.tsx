import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import { landingTwo } from '../assets';
import AuthModal from '../components/AuthModal';

export default function LandingPage() {
    const [open, setOpen] = useState(false);
    console.log("asdas : ", open)
    return (<Box>

        <Navbar setOpen={setOpen} />
        <AuthModal open={open} onClose={() => setOpen(false)} />
        <Box sx={{ display: 'flex', minHeight: '50vh', overflow: 'hidden' }}>

            <Box sx={{ display: 'flex' }}>
                {/* Left Section - Promotional Content */}
                <Box
                    sx={{
                        backgroundColor: '#7B66FF', // Adjust to match the dark blue/purple
                        color: 'white',
                        padding: { xs: 4, md: 8 },
                        textAlign: 'left',
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Empower your partners and patients with seamless access to data
                    </Typography>
                    <Typography variant="subtitle1" sx={{ lineHeight: 1.6, mb: 4 }}>
                        Medi-Core's developer-friendly healthcare vault is customizable, extensible, and built for scale. Leverage our secure platform to streamline data sharing and improve patient outcomes.
                        {/* Update this text to be relevant to your application */}
                    </Typography>
                    {/* You might add more promotional elements here */}
                </Box>

                {/* Right Section - Lead Capture Form */}
                <Box
                    sx={{
                        backgroundColor: '#7B66FF', // Adjust to a light background color
                        padding: { xs: 4, md: 8 },
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <img src={landingTwo} alt="Label 1" width="80%" height="85%" />
                    {/* <AuthModal open={open} onClose={() => setOpen(false)} /> */}
                </Box>
            </Box>
        </Box>
    </Box>
    );
}