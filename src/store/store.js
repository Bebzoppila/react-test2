const categoriesCatsInitial = []

function categoriesCats(state = categoriesCatsInitial, action) {
    switch (action.type) {
        case 'SET_ALL_CATEGORY':
            return action.payload
        default:
            return state
    }
}

export { categoriesCats };