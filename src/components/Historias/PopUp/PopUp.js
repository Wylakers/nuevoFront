import React from 'react'
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledDiv = styled.div`
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .popup-inner{
    position: relative;
    padding: 32px;
    width: 100%;
    max-width: 640px;
  }
  .popup-inner .close-btn{
    position: absolute;
    top: 16px;
    right: 16px;
  }
 `;



function PopUp(props) {
    <StyledDiv> 
        return (props.trigger) ? (
            <div className="popup">
                <div className="popup-inner">
                    <Button className="close-btn" onClick={() => props.setTrigger(false)} >close</Button>
                    { props.children}
                </div>
            </div>
        ) : "";
    </StyledDiv>  
    }

export default PopUp

