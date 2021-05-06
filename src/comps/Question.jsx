import React from "react";

export const QuestionCard = (props) => {
  return (
    <div style={{ backgroundColor: "blue", color: "white" }}>
      {Object.keys(props).map((key, index) => {
        return <p>{key}</p>;
      })}
    </div>
  );
};

export const QuestionTest = () => {};
