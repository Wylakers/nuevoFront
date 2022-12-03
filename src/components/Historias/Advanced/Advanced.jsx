import React, {useState, useReducer} from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import gra01 from './images/gra01.jpg';
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import pro01 from './images/pro01.jpg';
import pro02 from './images/pro02.jpg';
import pro03 from './images/pro03.jpg';
import pro04 from './images/pro04.jpg';


import memo1 from './images/memo1.jpg';
import memo2 from './images/memo2.jpg';
import memo3 from './images/memo3.jpg';
import memo4 from './images/memo4.jpg';

import sto1 from './images/sto1.jpg';
import sto2 from './images/sto2.jpg';
import sto3 from './images/sto3.jpg';
import sto4 from './images/sto4.jpg';

import co1 from './images/co1.jpg';
import co2 from './images/co2.jpg';
import co3 from './images/co3.jpg';
import co4 from './images/co4.jpg';

import win1 from './images/win1.jpg';
import win2 from './images/win2.jpg';
import win3 from './images/win3.jpg';
import win4 from './images/win4.jpg';


import pow1 from './images/pow1.jpg';
import pow2 from './images/pow2.jpg';
import pow3 from './images/pow3.jpg';
import pow4 from './images/pow4.jpg';


import { shoppingInitialState,shoppingReducer } from "../../reducers/carritoReduce";
import ProductItem from "../../ProductItem";
import CartItem from "../../CartItem";
import { TYPES } from "../../actions/carritoActions";

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

const StyledDiv = styled.div`
  @media only screen and (min-width: 768px) {
    .case {
      height: 280px;
    }

    .header {
      margin-left: -10px;
    }
  }

  @media only screen and (max-width: 767px) {
    .header {
      margin-left: 0px;
    }
  }

  .divisor {
    background: #596978;
  }

  h1 {
    font-weight: 600;
  }

  .fondo {
    background: linear-gradient(
      176.07deg,
      #1d4778 40.1%,
      #04646f 56%,
      #175091 100%
    );
  }

  .list-group-item {
    border-radius: 0;
    border: none;
    border-bottom: 2px solid black;
    color: white;
    background: transparent;
  }

  .black {
    background: rgba(0, 0, 0, 0.2);
  }
  .bold {
    font-weight: 600;
  }
`;

    

const Advanced= () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products,  cart } = state;
    const addToCart = (id) => {
        //console.log(id);

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

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("");

  return (
    <StyledDiv>
      <Container fluid className="text-white">
        {/* Top  */}
        <Row className="mt-md-5 mt-3 margen px-0 px-md-5 mb-5">
          <Col md="12" lg="5" className="text-center text-lg-start ">
            <h1>Build your own PC!</h1>
          </Col>
          <Col md="12" lg="7" className="text-center text-lg-end">
            <BsButton
              className="me-sm-3 me-0 mb-2 text-center"
              onClick={() => {
                navigate("/");
              }}
            >
              &lt;Back
            </BsButton>
            <BsButton
              className="mb-2 text-center"
              primary="true"
              onClick={() => navigate("/carrito")}
            >
              <Row>
                <Col xs="4" md="4" className="text-end">
                  <FaShoppingCart />
                </Col>
                <Col className="text-start">Checkout</Col>
              </Row>
            </BsButton>
          </Col>
        </Row>
        <Row className="mb-0 mb-md-4">
          <Col
            className="ps-0 ps-md-5 pe-0 pe-md-5 text-center text-md-start"
            xs="12"
            md="auto"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0408/5792/7834/files/01_-_Main_-_Liquid_Cooled-removebg-preview.png"
              alt="Case de PC"
              className="case"
            />
          </Col>
          <Col className="pe-0 pe-md-4">
            <Row>
              <Col className="text-center text-md-start m-0">
                <h4 className="mb-4 header mt-3">Botones</h4>
                <ul>
                <BsButton className={activeTab === "graphics" ? "activo mb-2" : "mb-2"}
                  onClick={() => setActiveTab("graphics")}  >Graphics 
  
</BsButton>
<li>
             
            <BsButton   className={activeTab === "processor" ? "activo mb-2" : "mb-2"}
                  onClick={() => setActiveTab("processor")}     >Processor
              
            </BsButton>
  
 
            
            </li>
            <li>
             
            <BsButton   className={activeTab === "memory" ? "activo mb-2" : "mb-2"}
                  onClick={() => setActiveTab("memory")}     >Memory
              
            </BsButton>
  
 
            
            </li>
            <li>
             
            <BsButton   className={activeTab === "storage" ? "activo mb-2" : "mb-2"}
                  onClick={() => setActiveTab("storage")}     >Storage
              
            </BsButton>
  
 
            
            </li>
            <li>
             
            <BsButton   className={activeTab === "cooler" ? "activo mb-2" : "mb-2"}
                  onClick={() => setActiveTab("cooler")}     >Cooler
              
            </BsButton>
  
 
            
            </li>
            <li>
             
            <BsButton   className={activeTab === "windows" ? "activo mb-2" : "mb-2"}
                  onClick={() => setActiveTab("windows")}     >Windows
              
            </BsButton>
  
 
            
            </li>
            <li>
             
            <BsButton   className={activeTab === "power" ? "activo mb-2" : "mb-2"}
                  onClick={() => setActiveTab("power")}     >Power Supply
              
            </BsButton>
  
 
            
            </li>
                </ul>
              </Col>

            </Row>
            {/* Lista de componentes */}
          </Col>
          <Col >
            <Row className="fondo mb-5 mb-md-0">lista de componentes</Row>
            <article className="box">

  {cart.map((item, index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} />
        ))}
  
  </article>
  <BsButton   className={activeTab === "power" ? "activo mb-2" : "mb-2"} onClick={() => calculateTotalPriceOfCart()}
                     >total
              
            </BsButton>
            {state.totalPriceShoppingCart > 0 && 
        <p className='totalPrice_shoppingCart'>Total Price: ${state.totalPriceShoppingCart}</p>}
          </Col>
          
           
           
           
         
        
        </Row>
      </Container>
      <Col> 

          {activeTab === "graphics" && (
         <Row>
         <div className='productos'>
         <div className='producto'>
             <a href='#'>
            
  <div className='producto_img' >
                 <img src={gra01} alt='' />
                 </div>
                 <article className="box grid-responsive">
  {products.grafica.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
       
  </article>
             </a>
             </div>
             </div>
             
</Row>
          )}
          </Col>  
           <Col >
           {activeTab === "processor" && (

<>
 
<Row>
<div className='productos'>
<div className='producto'>
    <a href='#'>
    
    <div className='producto_img' >
        <img src={pro01} alt='' />

    
    </div>
    </a>
    <div className='producto_footer'>
    <article className="box grid-responsive">
  {products.process.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
         </article>
    </div>
    

    
    </div>
</div>
</Row>
</>



           )}
           </Col>

           <Col>
           {activeTab === "memory" && (
            <div className='productos'>
            <div className='producto'>
                <a href='#'>
                
                <div className='producto_img' >
                    <img src={memo1} alt='' />
        
                
                </div>
                </a>
                <div className='producto_footer'>
                    <h1>title</h1>
                    <p>categoria</p>
                    <p className='price'>
                        $229
                    </p>
        
                </div>
                <div className='bottom'>
                    <button className='btn'>
                        +
        
                    </button>
                   
        
                </div>
                </div>
                
        
                <div className='producto'>
                <a href='#'>
                
                <div className='producto_img' >
                    <img src={memo2} alt='' />
        
                
                </div>
                </a>
                <div className='producto_footer'>
                    <h1>title</h1>
                    <p>categoria</p>
                    <p className='price'>
                        $229
                    </p>
        
                </div>
                <div className='bottom'>
                    <button className='btn'>
                        +
        
                    </button>
                    
                </div>
                </div>
                <div className='producto'>
                <a href='#'>
                
                <div className='producto_img' >
                    <img src={memo3} alt='' />
        
                
                </div>
                </a>
                <div className='producto_footer'>
                    <h1>title</h1>
                    <p>categoria</p>
                    <p className='price'>
                        $229
                    </p>
        
                </div>
                <div className='bottom'>
                    <button className='btn'>
                        +
        
                    </button>
                    
        
                </div>
                </div>
                <div className='producto'>
                <a href='#'>
                
                <div className='producto_img' >
                    <img src={memo4} alt='' />
        
                
                </div>
                </a>
                <div className='producto_footer'>
                    <h1>title</h1>
                    <p>categoria</p>
                    <p className='price'>
                        $229
                    </p>
        
                </div>
                <div className='bottom'>
                    <button className='btn'>
                        +
        
                    </button>
                    
        
                </div>
                </div>
            </div>

           )}
           </Col>

           <Col>
           {activeTab === "storage" && (

<div className='productos'>
<div className='producto'>
    <a href='#'>
    
    <div className='producto_img' >
        <img src={sto1} alt='' />

    
    </div>
    </a>
    <div className='producto_footer'>
        <h1>title</h1>
        <p>categoria</p>
        <p className='price'>
            $229
        </p>

    </div>
    <div className='bottom'>
        <button className='btn'>
            +

        </button>
       

    </div>
    </div>
    

    <div className='producto'>
    <a href='#'>
    
    <div className='producto_img' >
        <img src={sto2} alt='' />

    
    </div>
    </a>
    <div className='producto_footer'>
        <h1>title</h1>
        <p>categoria</p>
        <p className='price'>
            $229
        </p>

    </div>
    <div className='bottom'>
        <button className='btn'>
            +

        </button>
        
    </div>
    </div>
    <div className='producto'>
    <a href='#'>
    
    <div className='producto_img' >
        <img src={sto3} alt='' />

    
    </div>
    </a>
    <div className='producto_footer'>
        <h1>title</h1>
        <p>categoria</p>
        <p className='price'>
            $229
        </p>

    </div>
    <div className='bottom'>
        <button className='btn'>
            +

        </button>
        

    </div>
    </div>
    <div className='producto'>
    <a href='#'>
    
    <div className='producto_img' >
        <img src={sto4} alt='' />

    
    </div>
    </a>
    <div className='producto_footer'>
        <h1>title</h1>
        <p>categoria</p>
        <p className='price'>
            $229
        </p>

    </div>
    <div className='bottom'>
        <button className='btn'>
            +

        </button>
        

    </div>
    </div>
</div>
           )}
           </Col>
           
           <Col>
           {activeTab === "cooler" && (
            <div className='productos'>
            <div className='producto'>
                <a href='#'>
                
                <div className='producto_img' >
                    <img src={co1} alt='' />
        
                
                </div>
                </a>
                <div className='producto_footer'>
                    <h1>title</h1>
                    <p>categoria</p>
                    <p className='price'>
                        $229
                    </p>
        
                </div>
                <div className='bottom'>
                    <button className='btn'>
                        +
        
                    </button>
                   
        
                </div>
                </div>
                
        
                <div className='producto'>
                <a href='#'>
                
                <div className='producto_img' >
                    <img src={co2} alt='' />
        
                
                </div>
                </a>
                <div className='producto_footer'>
                    <h1>title</h1>
                    <p>categoria</p>
                    <p className='price'>
                        $229
                    </p>
        
                </div>
                <div className='bottom'>
                    <button className='btn'>
                        +
        
                    </button>
                    
                </div>
                </div>
                <div className='producto'>
                <a href='#'>
                
                <div className='producto_img' >
                    <img src={co3} alt='' />
        
                
                </div>
                </a>
                <div className='producto_footer'>
                    <h1>title</h1>
                    <p>categoria</p>
                    <p className='price'>
                        $229
                    </p>
        
                </div>
                <div className='bottom'>
                    <button className='btn'>
                        +
        
                    </button>
                    
        
                </div>
                </div>
                <div className='producto'>
                <a href='#'>
                
                <div className='producto_img' >
                    <img src={co4} alt='' />
        
                
                </div>
                </a>
                <div className='producto_footer'>
                    <h1>title</h1>
                    <p>categoria</p>
                    <p className='price'>
                        $229
                    </p>
        
                </div>
                <div className='bottom'>
                    <button className='btn'>
                        +
        
                    </button>
                    
        
                </div>
                </div>
            </div>
           )}
           </Col>
           
           <Col>
           {activeTab === "windows" && (

<div className='productos'>
<div className='producto'>
    <a href='#'>
    
    <div className='producto_img' >
        <img src={win1} alt='' />

    
    </div>
    </a>
    <div className='producto_footer'>
        <h1>title</h1>
        <p>categoria</p>
        <p className='price'>
            $229
        </p>

    </div>
    <div className='bottom'>
        <button className='btn'>
            +

        </button>
       

    </div>
    </div>
    

    <div className='producto'>
    <a href='#'>
    
    <div className='producto_img' >
        <img src={win2} alt='' />

    
    </div>
    </a>
    <div className='producto_footer'>
        <h1>title</h1>
        <p>categoria</p>
        <p className='price'>
            $229
        </p>

    </div>
    <div className='bottom'>
        <button className='btn'>
            +

        </button>
        
    </div>
    </div>
    <div className='producto'>
    <a href='#'>
    
    <div className='producto_img' >
        <img src={win3} alt='' />

    
    </div>
    </a>
    <div className='producto_footer'>
        <h1>title</h1>
        <p>categoria</p>
        <p className='price'>
            $229
        </p>

    </div>
    <div className='bottom'>
        <button className='btn'>
            +

        </button>
        

    </div>
    </div>
    <div className='producto'>
    <a href='#'>
    
    <div className='producto_img' >
        <img src={win4} alt='' />

    
    </div>
    </a>
    <div className='producto_footer'>
        <h1>title</h1>
        <p>categoria</p>
        <p className='price'>
            $229
        </p>

    </div>
    <div className='bottom'>
        <button className='btn'>
            +

        </button>
        

    </div>
    </div>
</div>
           )}
           </Col>
           
           <Col>
           {activeTab === "power" && (
            <div className='productos'>
            <div className='producto'>
                <a href='#'>
                
                <div className='producto_img' >
                    <img src={pow1} alt='' />
        
                
                </div>
                </a>
                <div className='producto_footer'>
                    <h1>title</h1>
                    <p>categoria</p>
                    <p className='price'>
                        $229
                    </p>
        
                </div>
                <div className='bottom'>
                    <button className='btn'>
                        +
        
                    </button>
                   
        
                </div>
                </div>
                
        
                <div className='producto'>
                <a href='#'>
                
                <div className='producto_img' >
                    <img src={pow2} alt='' />
        
                
                </div>
                </a>
                <div className='producto_footer'>
                    <h1>title</h1>
                    <p>categoria</p>
                    <p className='price'>
                        $229
                    </p>
        
                </div>
                <div className='bottom'>
                    <button className='btn'>
                        +
        
                    </button>
                    
                </div>
                </div>
                <div className='producto'>
                <a href='#'>
                
                <div className='producto_img' >
                    <img src={pow3} alt='' />
        
                
                </div>
                </a>
                <div className='producto_footer'>
                    <h1>title</h1>
                    <p>categoria</p>
                    <p className='price'>
                        $229
                    </p>
        
                </div>
                <div className='bottom'>
                    <button className='btn'>
                        +
        
                    </button>
                    
        
                </div>
                </div>
                <div className='producto'>
                <a href='#'>
                
                <div className='producto_img' >
                    <img src={pow4} alt='' />
        
                
                </div>
                </a>
                <div className='producto_footer'>
                    <h1>title</h1>
                    <p>categoria</p>
                    <p className='price'>
                        $229
                    </p>
        
                </div>
                <div className='bottom'>
                    <button className='btn'>
                        +
        
                    </button>
                    
        
                </div>
                </div>
            </div>
           )}
           </Col>
    </StyledDiv>
  );
};

export default Advanced;
