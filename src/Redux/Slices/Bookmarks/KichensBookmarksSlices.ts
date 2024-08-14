import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  bookmarks: any[];
}

const initialState: IInitialState = {
  bookmarks: [],
};

const KichensBookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    setBookmarks(state, action: PayloadAction<any[]>) {
      state.bookmarks = action.payload;
    },
    addBookmark(state, action: PayloadAction<string>) {
      state.bookmarks = [...state.bookmarks, action.payload];
    },
    unbookmark(state, action: PayloadAction<string>) {
      state.bookmarks = state.bookmarks.filter(
        (bookmark) => bookmark !== action.payload
      );
    },
  },
});

export const { setBookmarks, addBookmark, unbookmark } =
  KichensBookmarkSlice.actions;
export default KichensBookmarkSlice.reducer;
