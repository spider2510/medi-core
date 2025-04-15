import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// File: store/slices/authSlice.ts
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