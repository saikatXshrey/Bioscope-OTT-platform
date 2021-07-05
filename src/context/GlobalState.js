import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// initialState
const initialState = {
    favourite: localStorage.getItem('favourite') ? JSON.parse(localStorage.getItem('favourite')) : []
};

//create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('favourite', JSON.stringify(state.favourite));
    }, [state]);

    //actions
    const addMovieToFavourite = (id) => {
        dispatch({ type: "ADD_MOVIE_TO_FAVOURITE", payload: id });
    };

    const removeMovieFromFavourite = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_FAVOURITE", payload: id });
    };

    return (
        <GlobalContext.Provider
            value={{
                favourite: state.favourite,
                addMovieToFavourite,
                removeMovieFromFavourite
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};