let initialState = {
    categories: [
        { name: 'FOOD', active: false },
        { name: 'ELECTRONICS', active: false },
        { name: 'GAMES', active: false },
        { name: 'WEAPONS', active: false }
    ]
}

export default (state = initialState, action) => {

    const { type, payload } = action;
    switch (type) {
        case 'ACTIVE':
            let categories = state.categories.map((data) => {
                if (data.name === payload) {
                    return {
                        name: data.name,
                        active: true,
                    }
                }
                return data;
            })
            return { categories: categories }
        case 'RESET':
            return initialState;
        default:
            return state;

    }
}
export const active = (name) => {
    return { type: 'ACTIVE', payload: name }
}
export const reset = () => {
    return { type: 'RESET' }
}