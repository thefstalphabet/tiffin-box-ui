import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  kichensBookmarks: any[];
}

const initialState: IInitialState = {
  kichensBookmarks: [],
};

const KichensBookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    setBookmarks(state, action: PayloadAction<any[]>) {
      state.kichensBookmarks = action.payload;
    },
    addBookmark(state, action: PayloadAction<any[]>) {
      state.kichensBookmarks = [...state.kichensBookmarks, action.payload];
    },
    unbookmark(state, action: PayloadAction<string>) {
      state.kichensBookmarks = state.kichensBookmarks.filter(
        (kichensBookmarks) => kichensBookmarks.id !== action.payload
      );
    },
  },
});

export const { setBookmarks, addBookmark, unbookmark } =
KichensBookmarkSlice.actions;
export default KichensBookmarkSlice.reducer;
