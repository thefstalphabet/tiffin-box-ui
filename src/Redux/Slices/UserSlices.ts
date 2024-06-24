import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TLoginUserType } from '../../Interfaces/Apis/Auth.interface'

interface IInitialStage {
    data: any,
    type: TLoginUserType
}
const initialState: IInitialStage = {
    data: {},
    type: "user"
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setData(state, action: PayloadAction<any>) {
            state.data = action.payload
        },
        updateData(state, action: PayloadAction<any>) {
            state.data = action.payload
        },
        setType(state, action: PayloadAction<TLoginUserType>) {
            state.type = action.payload
        },
    },
})

export const { setData, setType, updateData } = UserSlice.actions
export default UserSlice.reducer