import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '40px', xs: '20px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="60px">Pocket Gym</Typography>
    <Typography fontWeight={750} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      All Gym Exercises at<br />
      One Place
    </Typography>
    <Typography fontSize="22px" lineHeight="35px">
      Learn all variations of Different Exercises
    </Typography>
    <Stack >
      <a href="#exercises" className="explore-hitu" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '20px' }}>Explore Exercises</a>
    </Stack>
    {/* <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Pocket Gym
    </Typography> */}
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
   </Box>
);

export default HeroBanner;
