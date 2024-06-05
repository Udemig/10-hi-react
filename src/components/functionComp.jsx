import React, { useEffect, useState } from "react";

const FunctionComp = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  //   //* 1)Bileşenin ekrana basılma anını izler.
  //   useEffect(() => {
  //     console.log("bileşen ekrana basıldı");
  //   }, []);

  //   //* 2)Belirli bir state veya propsun değişimini izleyebiliriz.
  //   useEffect(() => {
  //     console.log("Sayfa değişti!", page);
  //     console.log("Inputda değer girildi", name);
  //   }, [page, name]);

  //   //* 3)Bileşenin render olma olayını izler.
  //   useEffect(() => {
  //     console.log("Bileşen render oldu.State veya prop değişti");
  //   });
  //   //* 4) Bileşenin ekrandan gitme olayını izler.
  //   useEffect(() => {
  //     //* Bu fonksiyon unMount anında çalışır.
  //     return () => console.log("Ekrandan gitti!");
  //   }, []);

  //* 5)Hem ekrana gelme hemde ekrandan gitme olayını izler
  useEffect(() => {
    console.log("Ekrana geldi.");
    return () => console.log("Ekrandan gitti!");
  }, []);

  return (
    <div className="d-flex justify-content-center gap-3 align-items-center my-5">
      {/* <button className="btn btn-danger"> {"< Geri"} </button> */}
      {/* <p className="lead mt-3">Sayfa:{page}</p> */}
      <button onClick={() => setPage(page + 1)} className="btn btn-success">
        {"> İleri"}
      </button>

      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default FunctionComp;
