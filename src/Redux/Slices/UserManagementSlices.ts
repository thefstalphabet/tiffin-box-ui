import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IInitialStage {
    kitchens: any[],
    users: any[]
}
const initialState: IInitialStage = {
    kitchens: [],
    users: []
}

const UserManagementSlices = createSlice({
    name: 'userManagement',
    initialState,
    reducers: {
        setKitchens(state, action: PayloadAction<any[]>) {
            state.kitchens = action.payload
        },
        addKitchen(state, action: PayloadAction<any>) {
            state.kitchens = [...state.kitchens, action.payload]
        },
        updateKitchen(state, action: PayloadAction<{
            id: string,
            newKitchenData: any
        }>) {
            const index = state.kitchens.findIndex(kitchen => kitchen._id === action.payload.id);
            if (index !== -1) {
                state.kitchens[index] = { ...state.kitchens[index], ...action.payload.newKitchenData };
            }
        },
        deleteKitchen(state, action: PayloadAction<string>) {
            const newKitchensData = state.kitchens.filter(
                (kitchen: any) => kitchen._id !== action.payload
            );
            state.kitchens = newKitchensData
        },

        setUsers(state, action: PayloadAction<any[]>) {
            state.users = action.payload
        },
        addUser(state, action: PayloadAction<any>) {
            state.users = [...state.users, action.payload]
        },
        updateUser(state, action: PayloadAction<{
            id: string,
            newUserData: any
        }>) {
            const index = state.users.findIndex(user => user._id === action.payload.id);
            if (index !== -1) {
                state.users[index] = { ...state.users[index], ...action.payload.newUserData };
            }
        },
        deleteUser(state, action: PayloadAction<string>) {
            const newUsersData = state.users.filter(
                (user: any) => user._id !== action.payload
            );
            state.kitchens = newUsersData
        },
    },
})

export const { setKitchens, deleteKitchen, addKitchen, updateKitchen, setUsers, addUser, updateUser, deleteUser } = UserManagementSlices.actions
export default UserManagementSlices.reducer