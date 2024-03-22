import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function HomeTemplate({ img, selected, onClick }) {
  const navigate = useNavigate();

  const useTemplate = () => {
    navigate("/details");
  };

  return (
    <div
      className={`w-full h-[300px] shadow-md relative template-div rounded-md ${selected ? 'selected' : ''}`}
      style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
      onClick={onClick}
    >
      {selected && (
        <div className="w-full h-full bg-black opacity-50 temp-highlight rounded-md"></div>
      )}
      {selected && (
        <button className="bg-blue-500 text-white rounded-md p-2 absolute left-[30%] top-[40%]" onClick={useTemplate}>
          Use Template
        </button>
      )}
    </div>
  );
}

export default HomeTemplate;
