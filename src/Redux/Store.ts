import { configureStore } from "@reduxjs/toolkit";
import sideMenuReducer from "./Slices/SideMenuSlices";
import userReducer from "./Slices/UserSlices";
import userManagementReducer from "./Slices/UserManagementSlices";
import viewKitchenReducer from "./Slices/Kitchen/ViewKitchenSlices";
import addressReducer from "./Slices/AddressSlices";
export const store = configureStore({
  reducer: {
    sideMenu: sideMenuReducer,
    user: userReducer,
    userManagement: userManagementReducer,
    viewKitchen: viewKitchenReducer,
    addressResponse: addressReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
