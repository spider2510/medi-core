import { Dialog, DialogTitle, DialogContent, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setRole } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AuthModal({ open, onClose }: AuthModalProps) {
  const [role, setLocalRole] = useState<'doctor' | 'pharmacist' | 'admin' | 'super-admin' | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role) {
      dispatch(setRole(role));
      navigate('/dashboard');
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Select Role</DialogTitle>
      <DialogContent>
        <ToggleButtonGroup exclusive value={role} onChange={(_, val) => setLocalRole(val)}>
          <ToggleButton value="doctor">Doctor</ToggleButton>
          <ToggleButton value="pharmacist">Pharmacist</ToggleButton>
          <ToggleButton value="admin">Admin</ToggleButton>
          <ToggleButton value="super-admin">Super Admin</ToggleButton>
        </ToggleButtonGroup>
        <Button fullWidth variant="contained" color="primary" onClick={handleLogin} sx={{ mt: 3 }}>
          Login / Register
        </Button>
      </DialogContent>
    </Dialog>
  );
}