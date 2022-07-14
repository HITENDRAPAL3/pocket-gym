import React from 'react';
import { Box, Typography } from '@mui/material';


const Footer = () => (
  <Box mt="20px" bgcolor="#361500">
    <Typography style={{color: 'white' }}  fontWeight={600}  sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Pocket Gym 2022 - By <span style={{color: '#FFC600'}}>Hitendra Singh Pal</span></Typography>
  </Box>
);

export default Footer;
