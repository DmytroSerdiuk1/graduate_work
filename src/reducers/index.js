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
                bag: [...state.bag, action.payload]
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
        case 'REMOVE_FROM_CART':
            const indx = state.bag.findIndex((val)=>{
                return val._id === action.productId
            })

            return {
                ...state,
                bag: [...state.bag.splice(0, indx), ...state.bag.slice(indx + 1)]
            }
        default:
            return state
    }
}

export default reducer