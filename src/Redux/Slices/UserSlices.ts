import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState: any = {
    data: {}
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addData(state, action: PayloadAction<boolean>) {
            state.data = action.payload
        },
    },
})

export const { addData } = UserSlice.actions
export default UserSlice.reducer