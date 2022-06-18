import React from 'react';
import { Stack } from '@mui/material';
import { Rings,Triangle,InfinitySpin } from 'react-loader-spinner';

const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
    <Rings color="#FFC600" />
  </Stack>
);

export default Loader;
