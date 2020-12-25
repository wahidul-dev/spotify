export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // set token to null after developing
    token: "BQBfOgTUUspThFGEgkzo7qqHxkhVPZaOTdDxDQoI9jcC9OAuOP626nLT47YmqE2PYmuawPfdEHORszg0UhSoygxleO5nGAN--Q2_of3iogpAJ1vbfFyOWLAeOwJNHRnHkINiJRQGmbpdU6f4yzImr6Unwu1kWlxWGT2kR-9fC1hg8fNR",
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [paylaod]

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_TOKEN":
                return {
                    ...state,
                    token: action.token
                };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }

        default:
            return state;
    }
}

export default reducer;