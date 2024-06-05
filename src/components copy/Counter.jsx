import React, { useState } from "react";

const Counter = () => {
  /*
     * useState'i tutulan değerin değişimi bileşen içerisindeki arayüzü de etkilesin istiyorsak veriyi depolamak için tercih ederiz.
     * useState'i çağırdığımız zaman dizi içerisinde iki değer dönderir. 
     * 1.değer:count >> Tuttuğumuz veri
     * 2.değer:setCount >> Tuttuğumuz veriyi değiştirecek fonksiyondur
     ! State'de ki değer her değiştiğinde react tekrardan render işlemini yapar ve bu sayade arayüzü güncel tutar.
    */

  const [count, setCount] = useState(0);
  //   const [lightMode, setLightMode] = useState(false);
  return (
    <div className="d-flex justify-content-center align-items-center mt-5 gap-3">
      <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
        Azalt
      </button>
      <p className="mt-3">{count}</p>
      <div className="btn-group">
        <button className="btn btn-secondary" onClick={() => setCount(0)}>
          Sıfırla
        </button>
        <button className="btn btn-success" onClick={() => setCount(count + 1)}>
          Arttır
        </button>
      </div>
    </div>
  );
};

export default Counter;
