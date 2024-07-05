import { configureStore } from "@reduxjs/toolkit";
import sideMenuReducer from "./Slices/SideMenuSlices";
import userReducer from "./Slices/UserSlices";
import userManagementReducer from "./Slices/UserManagementSlices";
import viewKitchenReducer from "./Slices/Kitchen/ViewKitchenSlices";
import addressReducer from "./Slices/AddressSlices";
import screenResolutionReducer from "./Slices/ScreenResolution.slices";
import KichensBookmarkSlice from "./Slices/Bookmarks/KichensBookmarksSlices"
export const store = configureStore({
  reducer: {
    sideMenu: sideMenuReducer,
    user: userReducer,
    userManagement: userManagementReducer,
    viewKitchen: viewKitchenReducer,
    address: addressReducer,
    screenResolution: screenResolutionReducer,
    KichensBookmarks: KichensBookmarkSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
