export default (state, action) => {
    switch (action.type) {

        case "ADD_MOVIE_TO_FAVOURITE":
            return {
                ...state,
                favourite: [action.payload, ...state.favourite]
            }

        case "REMOVE_MOVIE_FROM_FAVOURITE":
            return {
                ...state,
                favourite: state.favourite.filter(
                    (id) => id !== action.payload)
            }

        default:
            return state;
    }
};