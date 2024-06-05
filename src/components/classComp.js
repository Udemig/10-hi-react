import React from "react";
/*
    * Normal bir class, bir component işlevlerini yerine getiremez
    * Bir classın component(bileşen) olmasını istiyorsak React'ın 
    * içerisindeki Component classını miras alırız.

*/
class Pagination extends React.Component {
  //* Kurucu method
  //* Bu bileşen gönderilen propslara erişiriz.
  constructor(props) {
    super(props);
    //* class componentlerde state kullanımı
    this.state = {
      isDarkMode: false,
      count: 3,
    };
  }
  //! Class Componentler de Yaşam Döngüsü

  //* 1) Bileşenin ekrana basılma anı
  componentDidMount() {
    console.log("componentDidMount çalıştı.");
  }
  //* 2) Bileşenin güncellenme anını izler
  componentDidUpdate() {
    console.log("componentDidUpdate çalıştı");
  }
  //* 3)Bileşenin güncellenme anını izler
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  //* render methodu reactın içerisinden geliyor ve ekrana basılacak olan arayüzü belirler
  render() {
    return (
      <div className="d-flex justify-content-center my-5 gap-3 align-items-center">
        <button className="btn btn-danger">-</button>
        {/* <h1>Sayfa:{this.state.count}</h1> */}
        <button
          className="btn btn-success"
          onClick={() => {
            // console.log(this.state);
            // console.log({ count: this.state.count + 1 });
            // console.log({ ...this.state, count: this.state.count + 1 });
            this.setState({ ...this.state, count: this.state.count + 1 });
          }}
        >
          +
        </button>
      </div>
    );
  }
}
export default Pagination;
