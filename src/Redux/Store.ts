import { configureStore } from "@reduxjs/toolkit";
import sideMenuReducer from "./Slices/SideMenuSlices";
import userReducer from './Slices/UserSlices';
import userManagementReducer from './Slices/UserManagementSlices';

export const store = configureStore({
    reducer: {
        sideMenu: sideMenuReducer,
        user: userReducer,
        userManagement: userManagementReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
