const initialState = {
    data: "Testing",
    loading: "false",
}

export default function(state = initialState, action) {
    console.log({action})
    switch (action.type) {
        case 'TEST_REDUCER':
            return {
                ...state,
                data: action.payload,
                loading: "true"
            }
        default:
            return state;
    }
}