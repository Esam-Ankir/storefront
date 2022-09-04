// let initialState = {
//     products: [
//         {
//             category: "FOOD",
//             name: "Apple",
//             description: "A juicy crispy fruit you can pick from a tree.",
//             image: "https://source.unsplash.com/random?apple"

//         },

//     ],
// }

// export default (state = initialState, action) => {
//     const { type, payload } = action;
//     switch (type) {
//         case 'Active':
//             let products = state.products.filter((data) => {
//                 if (data.category === payload) {
//                     return data;
//                 }
//                 return null;
//             })
//             return { products: products };
//         case 'RESET':
//             return initialState;
//         default:
//             return state;
//     }
// }


// export const active = (name) => {
//     return {
//         type: 'Active',
//         payload: name
//     }
// }
// export const reset = () => {
//     return {
//         type: 'RESET',
//     }
// }

import data from './allProducts';

let initialState = {
    products:data
}
export default(state = initialState, action) => {

    const {type, payload} = action;
    switch (type) {
        case 'GET BY CATEGORY NAME':
            let products = state
                .products
                .filter((data) => {
                    if (data.categoryAssociation === payload) {
                        return data;
                    }
                })
                // console.log(products);
                return {products: products}
        case 'RESET':
            // console.log('reset');
            return initialState;
        default:
            return state;

    }
}
//actions
export const getByCategory = (name) => {
    return {type: 'GET BY CATEGORY NAME', payload: name}
}
export const resetProducts = () => {
    return {type: 'RESET'}
}