
import { createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";
// import { PayloadAction } from "@reduxjs/toolkit";


export interface GeneralState {
    mode: string,
    loading: boolean,
    alert: {
        title?: ReactNode,
        text?: ReactNode,
        icon?: ReactNode | string,
        open: boolean,
        ok: any,
        cancel: any,
    }
}

const alertInit = {
    open: false,
    title: '',
    text: '',
    icon: '',
    ok: () => {},
    cancel: undefined,
};

const initialState: GeneralState = {
    mode: 'dark',
    loading: false,
    alert: alertInit
};

const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {

        toggle (state) {
            state.mode = state.mode == 'dark' ? 'light' : 'dark';
        },

        showAlert (state, action) {
            state.alert = {...state.alert, ...action.payload};
            state.alert.open = true;
        },

        closeAlert (state) {
            state.alert = alertInit
        },

        startLoading (state) {
            state.loading = true;
        },

        stopLoading (state) {
            state.loading = false;
        }
    }
})

export const { toggle, showAlert, closeAlert, startLoading, stopLoading } = generalSlice.actions;

export default generalSlice.reducer;