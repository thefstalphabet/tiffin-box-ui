import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  dishesBookmarks: any[];
}

const initialState: IInitialState = {
  dishesBookmarks: [],
};

const DishesBookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    setBookmarks(state, action: PayloadAction<any[]>) {
      state.dishesBookmarks = action.payload;
    },
    addBookmark(state, action: PayloadAction<any[]>) {
      state.dishesBookmarks = [...state.dishesBookmarks, action.payload];
    },
    unbookmark(state, action: PayloadAction<string>) {
      state.dishesBookmarks = state.dishesBookmarks.filter(
        (dishesBookmarks) => dishesBookmarks.id !== action.payload
      );
    },
  },
});

export const { setBookmarks, addBookmark, unbookmark } =
  DishesBookmarkSlice.actions;
export default DishesBookmarkSlice.reducer;
