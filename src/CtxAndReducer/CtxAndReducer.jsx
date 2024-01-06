
"use client"

import React, { createContext, useReducer, useContext } from 'react'


export const AppContext = createContext();

const initialState = {
    product: [],
    popular: [],
    recomended: [],
    loading: null,
    msg: "",
    showModal: false,
}


const UserReducer = (state, action) => {


    if (action.type === "open_modal") {
        return ({
            ...state,
            showModal: action.payload
        })
    }
    else if (action.type === "close_modal") {
        return ({
            ...state,
            showModal: action.payload
        })
    }


    return state;
}


export const CtxAndProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);



    const openModal = () => {
        dispatch({
            type: "open_modal",
            payload: true,
        })
    }
    const closeModal = () => {
        dispatch({
            type: "close_modal",
            payload: false,
        })
    }

    return (
        <AppContext.Provider
            value={{
                ...state,
                openModal,
                closeModal,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalCtx = () => {
    return useContext(AppContext)
}

