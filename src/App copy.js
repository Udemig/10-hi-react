import Card from "./components/Card";
import { data } from "./constant";
function App() {
  const title = "";
  return (
    <div>
      {/* <div className="wrapper">
        {data.map((item, i) => (
          <Card key={i} text="selam" item={item} />
        ))}
      </div> */}
      {/*
       * 1.yöntem
       * ternary >> title varsa ekrana titleı renderla yoksada null döndür
       */}
      {/* {title ? <h1>{title}</h1> : <h1>Başlık verisi gelmedi</h1>} */}
      {/*
       * 2.yöntem
       * && operatörü
       */}
      {title && <h1>{title}</h1>}
    </div>
  );
}

export default App;
