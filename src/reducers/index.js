const initialState = {
    menuActive: false,
    catalog: [],
    catalogLoad: true,
    bagPrice: 0,
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
        case 'CATALOG_LOAD':
            return {
                ...state,
                catalogLoad: false,
                catalog: [...action.catalog]
            }
        case 'EXIT_MENU':
            return {
                ...state,
                menuActive: !state.menuActive
            }
        case 'ADD_TO_CART':
            const price = state.bagPrice + action.payload.price
            return {
                ...state,
                bagPrice: price,
                bag: [...state.bag, action.payload]
            }
        case 'TOGGLE_TO_WISHLIST':
            const catalogWishlsitIndex = state.catalog.findIndex(el => el._id === action.productId);
            const addedCatalogWishlist = {...state.catalog[catalogWishlsitIndex], wishlist: !state.catalog[catalogWishlsitIndex].wishlist}

            if(state.wishlist.indexOf(action.productId) === -1){
                return {
                    ...state,
                    catalog: [...state.catalog.slice(0, catalogWishlsitIndex), addedCatalogWishlist, ...state.catalog.slice(catalogWishlsitIndex + 1)],
                    wishlist: [...state.wishlist, action.productId]
                }
            } else {
                const deleteIndex = state.wishlist.findIndex((el) => el === action.productId);
                console.log("delete");
                return {
                    ...state,
                    catalog: [...state.catalog.slice(0, catalogWishlsitIndex), addedCatalogWishlist, ...state.catalog.slice(catalogWishlsitIndex + 1)],
                    wishlist: [...state.wishlist.slice(0, deleteIndex), ...state.wishlist.slice(deleteIndex + 1)]
                }
            }
        case 'REMOVE_FROM_CART':
            const indx = state.bag.findIndex((val)=>{
                return val._id === action.productId
            })
            
            const prevPrice = state.bagPrice - state.bag[indx].price

            return {
                ...state,
                bagPrice: prevPrice,
                bag: [...state.bag.splice(0, indx), ...state.bag.slice(indx + 1)]
            }
        default:
            return state
    }
}

export default reducer