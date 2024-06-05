import React, { useState } from "react";

const Accordion = ({ title, description }) => {
  // nesne parçalama | Object Destructuring
  //   const { title, description } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [number, setNumber] = useState([2, 3, 4]);
  number.push(2342);
  console.log(number);

  // const deneme = {
  //   id: "1",
  //   text: "test",
  //   title1: "deneme",
  // };
  // console.log(deneme);

  // const { id, text, title1 } = deneme;
  // console.log(id);
  // console.log(text);
  // console.log(title1);
  return (
    <div className="p-3 bg-primary m-3 rounded text-white">
      <div className="d-flex justify-content-between align-items-center description">
        <h2>{title}</h2>
        <button
          onClick={() => {
            //* isOpen değerini true ya çek
            // setIsOpen(isOpen === true ? false : true);
            setIsOpen(!isOpen);
          }}
          className={`btn  ${isOpen ? "btn-danger" : "btn-success"} `}
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>

      {isOpen && <p className="mt-4 lead">{description}</p>}
    </div>
  );
};

export default Accordion;
