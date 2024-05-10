import { configureStore } from "@reduxjs/toolkit";
import sideMenuReducer from "./Slices/SideMenuSlices";


export const store = configureStore({
    reducer: {
        sideMenu: sideMenuReducer,

    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
