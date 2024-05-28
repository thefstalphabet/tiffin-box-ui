import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
interface IInitialStage {
    activeItemKey: string,
    subMenuActiveIds: string[],
    collapse: boolean
}

const initialState: IInitialStage = {
    activeItemKey: "1",
    subMenuActiveIds: [],
    collapse: false
}

const SideMenuSlice = createSlice({
    name: 'sideMenu',
    initialState,
    reducers: {
        setActiveItemKey(state, action: PayloadAction<string>) {
            state.activeItemKey = action.payload
        },
        updateSubMenuActiveId(state, action: PayloadAction<any>) {
            state.subMenuActiveIds = action.payload
        },
        setCollapse(state, action: PayloadAction<boolean>) {
            state.collapse = action.payload
        },
    },
})

export const { setActiveItemKey, updateSubMenuActiveId, setCollapse } = SideMenuSlice.actions
export default SideMenuSlice.reducer