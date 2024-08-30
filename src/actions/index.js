export const updateData = (value) => (dispatch) => {
    dispatch({
        type: 'TEST_REDUCER',
        payload: value
    })
}