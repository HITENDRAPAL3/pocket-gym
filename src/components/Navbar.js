import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';


import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="40px">
    
    <Stack
      direction="row"
      gap="40px"
      fontSize="40px"
      alignItems="flex-end"
      
    >
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: 'white' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;
