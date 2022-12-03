import React, { useReducer,useState } from "react";
import { shoppingInitialState,shoppingReducer } from "../../reducers/carritoReduce";
import ProductItem from "../../ProductItem";
import CartItem from "../../CartItem"
import { TYPES } from "../../actions/carritoActions";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BsButton = styled(Button)`
  color: ${(props) => (props.primary ? "#fff" : "#3a3a3a")};
  background: ${(props) => (props.primary ? "#c25be9" : "#e6e6e6")};
  border: ${(props) =>
    props.primary ? "1px solid #c25be9" : "1px solid #e6e6e6"};
  appearance: none;
  font-weight: 700;
  text-decoration: none;
  vertical-align: middle !important;
  cursor: pointer !important;
  padding: 12px 20px !important;
  border-radius: 10px !important;
  white-space: normal;
  min-width: 250px;
  align-self: flex-start;

  &:not([disabled]):active,
  &:not([disabled]):hover {
    background-color: ${(props) => (props.primary ? "#c25be9" : "#e6e6e6")};
    background-size: 100%;
    box-shadow: ${(props) =>
      props.primary
        ? "0 0 10px #c25be9, 0 0 10px #c25be9"
        : "0 0 10px #e6e6e6, 0 0 10px #fff"};
    color: ${(props) => (props.primary ? "#fff" : "#3a3a3a")};
    border: ${(props) => (props.primary ? "#c25be9" : "1px solid #e6e6e6")};
    text-shadow: ${(props) =>
      props.primary ? "0 0 10px white" : "0 0 10px grey"};
  }
`;

const Carrito = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;
 
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("");

  const addToCart = (id) => {
   console.log(id);
  dispatch({ type: TYPES.ADD_TO_CART, payload: id });
   
  };

  const delFromCart = (id, all = false) => {
    //console.log(id, all);
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  const calculateTotalPriceOfCart = () => {
    dispatch({ type: TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART })
  }

  return <div>
    <h2>carrito de compras</h2>
    <article className="box grid-responsive">
  {products.grafica.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
       
  </article>
  <h3>Productos</h3>
  <article className="box grid-responsive">
  {
   cart.map((index,item) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} />
          ))
   }
          </article>
  <h3>Carrito</h3>
 
  <article className="box">
  <BsButton onClick={clearCart}>Limpiar Carrito</BsButton>
  

  </article>
  
 
  
  <BsButton   className={activeTab === "power" ? "activo mb-2" : "mb-2"} onClick={() => calculateTotalPriceOfCart()}
                     >total
              
            </BsButton>
            {state.totalPriceShoppingCart > 0 && 
        <p className='totalPrice_shoppingCart'>Total Price: ${state.totalPriceShoppingCart}</p>}
      
  </div>;
  
};

export default Carrito;
