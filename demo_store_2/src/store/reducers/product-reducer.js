import { PRODUCT_SELECTION } from "../actions/product-action";

const initialProductState = {
    products: [
        {
            id: 1,
            name: 'Je ne sais pas, productName par exemple',
            price: 42.1,
            description: 'Lorem ipsum ... etc',
            image: 'images/AR-14270-2.jpg'
        },
        {
            id: 2,
            name: 'Alf',
            price: 15,
            description: 'The best peluche',
            image: 'images/642466.jpg'
        },
        {
            id: 3,
            name: 'Hello Doggy',
            price: 24.99,
            description: 'Une peluche trop mimi',
            image: 'images/5af84ea6.jpeg'
        }
    ],
    selectedProduct: null
}

export const ProductReducer = (state = initialProductState, action) => {
    switch(action.type) {
        case PRODUCT_SELECTION :
            return {
                ...state,
                selectedProduct: state.products.find(p => p.id === action.payload)
            }
        default :
            return state
    }
}