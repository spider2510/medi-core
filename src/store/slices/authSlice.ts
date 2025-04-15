import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  role: 'doctor' | 'pharmacist' | 'admin' | 'super-admin' | null;
}

const initialState: AuthState = {
  role: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRole(state, action: PayloadAction<AuthState['role']>) {
      state.role = action.payload;
    },
    clearRole(state) {
      state.role = null;
    },
  },
});

export const { setRole, clearRole } = authSlice.actions;
export default authSlice.reducer;
