import { useState } from "react";
import Accordion from "./components/Accordion";
import Counter from "./components/Counter";
import Header from "./components/Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div
      className={`vh-100 ${
        isDarkMode ? "bg-dark  text-white" : "bg-white text-dark"
      }`}
    >
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Accordion
        title={"Hangi teknolojiler kullanıldı?"}
        description={"Bu proje geliştirilirken react kullanıldı."}
      />
      <Accordion
        title={"Kaç kişilik bir projede çalıştınız?"}
        description={"15 kişilik bir ekip çalıştı."}
      />
      <Counter />
    </div>
  );
}

export default App;
