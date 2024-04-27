import { useState } from "react";
import EgyptianFood from "./data";
import "./App.css";
const App = () => {
  const [currentFoodIndex, setCurrentFoodIndex] = useState(Math.floor(Math.random() * EgyptianFood.length));

  const changeFood = () => {
    const newIndex = Math.floor(Math.random() * EgyptianFood.length);
    setCurrentFoodIndex(newIndex);
  };
  return (
    <div className="card">
      <h1>هنتغدى إيه النهاردة؟</h1>
      <div className="wrapper">
      <h2>{EgyptianFood[currentFoodIndex].name}</h2>
        <div className="buttons">
          <button onClick={changeFood}>
            <a href="#">أكلة تانية</a>
          </button>
          <button>
            <a href={EgyptianFood[currentFoodIndex].link} target="_blank" rel="noopener noreferrer">
              شوف الطريقة من هنا
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
