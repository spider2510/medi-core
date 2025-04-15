import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Typography, Box } from '@mui/material';

export default function Dashboard() {
  const role = useSelector((state: RootState) => state.auth.role);

  return (
    <Box p={4}>
      <Typography variant="h4">Dashboard</Typography>
      <Typography variant="h6" mt={2}>You are logged in as: {role}</Typography>
    </Box>
  );
}