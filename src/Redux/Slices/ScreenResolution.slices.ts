import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IInitialStage {
    screenWidth: number,
    screenHeight: number
}
const initialState: IInitialStage = {
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight
}

const ScreenResolutionSlice = createSlice({
    name: 'screenResolution',
    initialState,
    reducers: {
        setScreenWidth(state, action: PayloadAction<any>) {
            state.screenWidth = action.payload
        },
        setScreenHeight(state, action: PayloadAction<any>) {
            state.screenHeight = action.payload
        },
    },
})

export const { setScreenWidth, setScreenHeight } = ScreenResolutionSlice.actions
export default ScreenResolutionSlice.reducer