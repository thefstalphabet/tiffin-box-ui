import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IInitialStage {
    data: any,
}
const initialState: IInitialStage = {
    data: {},
}

const ViewKitchenSlice = createSlice({
    name: 'viewKitchen',
    initialState,
    reducers: {
        setData(state, action: PayloadAction<any>) {
            state.data = action.payload
        },
        updateData(state, action: PayloadAction<any>) {
            state.data = action.payload
        },
    },
})

export const { setData, updateData } = ViewKitchenSlice.actions
export default ViewKitchenSlice.reducer