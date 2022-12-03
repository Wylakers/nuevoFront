import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledDiv = styled.div`
  .App {
    font-family: sans-serif;
    text-align: center;
  }
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    width: 405px;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .product {
    display: flex;
    align-items: center;
  }
  .product h1 {
    font-size: 20px;
  }
  textarea {
    width: 100%;
    border-radius: 6px;
    padding: 10px;
  }
  button {
    background: blue;
    color: #fff;
    margin-top: 10px;
    width: 100%;
    border-radius: 6px;
    padding: 10px 0;
    border: none;
    font-weight: bolder;
    cursor: pointer;
  }
  button.disabled {
    opacity: 0.5;
    pointer-events: none;
  }`;

export default function App() {
  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("");

  const handleText = () => {
    switch (number || hoverStar) {
      case 0:
        return "Evaluate";
      case 1:
        return "Dissatifation";
      case 2:
        return "Unsatisfied";
      case 3:
        return "Normal";
      case 4:
        return "Satisfied";
      case 5:
        return "Very Satisfied";
      default:
        return "Evaluate";
    }
  };

  const handlePlaceHolder = () => {
    switch (number || hoverStar) {
      case 0:
        return "Comment here...";
      case 1:
      case 2:
      case 3:
      case 4:
        return "What is your problem?";
      case 5:
        return "Why do you like the product?";
      default:
        return "Comment here...";
    }
  };
  return (
   <StyledDiv> 
    <div className="App">
      <div className="popup">
        <div className="content">
          <div className="product">
          </div>
          <div>
            <h1>{handleText()}</h1>
            {Array(5)
              .fill()
              .map((_, index) =>
                number >= index + 1 || hoverStar >= index + 1 ? (
                  <AiFillStar
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange" }}
                    onClick={() => setNumber(index + 1)}
                  />
                ) : (
                  <AiOutlineStar
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange" }}
                    onClick={() => setNumber(index + 1)}
                  />
                )
              )}
          </div>
          <textarea placeholder={handlePlaceHolder()}></textarea>
          <button className={activeTab === "home" ? "activo mb-2" : "mb-2"}
                  onClick={() => setActiveTab("home")}>Submit </button>
        </div>
      </div>
    </div>
    </StyledDiv>
  );
}