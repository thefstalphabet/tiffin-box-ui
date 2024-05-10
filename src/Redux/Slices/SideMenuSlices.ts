import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState: any = {
    activeId: "1",
    subMenuActiveIds: [],
    collapse: false
}

const SideMenuSlice = createSlice({
    name: 'sideMenu',
    initialState,
    reducers: {
        updateActiveId(state, action: PayloadAction<string>) {
            state.activeId = action.payload
        },
        updateSubMenuActiveId(state, action: PayloadAction<any>) {
            state.subMenuActiveIds = action.payload
        },
        setCollapse(state, action: PayloadAction<boolean>) {
            state.collapse = action.payload
        },
    },
})

export const { updateActiveId, updateSubMenuActiveId, setCollapse } = SideMenuSlice.actions
export default SideMenuSlice.reducer