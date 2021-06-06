const initialState = {
    menuActive: false,
    bag: [],
    wishlist: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ACTIVE_MENU':
            return {
                ...state,
                menuActive: !state.menuActive
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                bag: [...state.bag, action.productId]
            }
        case 'TOGGLE_TO_WISHLIST':
            if(state.wishlist.indexOf(action.productId) === -1){
                return {
                    ...state,
                    wishlist: [...state.wishlist, action.productId]
                }
            } else {
                return {
                    ...state,
                    wishlist: [...state.wishlist.splice(0, action.productId), ...state.wishlist.slice(action.productId + 1)]
                }
            }
        default:
            return state
    }
}

export default reducer