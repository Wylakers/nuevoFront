import { TYPES } from "../actions/carritoActions";
export const shoppingInitialState={
    products:{ grafica:[
        {id:1, name:"nvidia  rtx 350",price:300},
        {id:2, name:"nvidia  rtx 380",price:400},
        {id:3, name:"nvidia  rtx 390",price:500},
        {id:4, name:"nvidia gtx 1660",price:161},
        {id:5, name:"nvidia  gtx 1650",price:160},
        {id:6, name:"nvidia  gtx ",price:100},
    ],
    process:[
        {id:7, name:"nvidia  rtx 350",price:500},
        {id:8, name:"nvidia  rtx 380",price:400},
        {id:3, name:"nvidia  rtx 390",price:50},
        {id:4, name:"nvidia gtx 1660",price:161},
        {id:5, name:"nvidia  gtx 1650",price:160},
        {id:6, name:"nvidia  gtx ",price:100},
    ]

},
    
  
    cart:[],
};
export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            let newItem = state.products.grafica.find(  
                (product) => product.id === action.payload
              );
            
              
              
              //console.log(newItem);
              let itemInCart = state.cart.find((item) => item.id === newItem.id);
             

             
              return  itemInCart


        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === (  newItem.id  )
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem ,quantity: 1 }],
          };
    
        }
        
    case TYPES.REMOVE_ONE_FROM_CART:{
        let itemToDelete = state.cart.find((item) => item.id === action.payload);

        return itemToDelete.quantity > 1
          ? {
              ...state,
              cart: state.cart.map((item) =>
                item.id === action.payload
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
            }
          : {
              ...state,
              cart: state.cart.filter((item) => item.id !== action.payload),
            };

    }
    case TYPES.REMOVE_ALL_FROM_CART:{
        return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };

    }
    case TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART: {
        return {
          ...state,
          totalPriceShoppingCart: state.cart.reduce((previousValue, product) => previousValue + (product.price * product.quantity), 0)
        }
      }
    case TYPES.CLEAR_CART:
        return shoppingInitialState;

default:
    return state;
}
}
