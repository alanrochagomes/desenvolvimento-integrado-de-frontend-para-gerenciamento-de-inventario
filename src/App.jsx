import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const [pricelists, setPricelists] = useState([]);

  async function fetchData() {
    const apiUrl =
      "https://desenvolvimento-integrado-de-backend-gtnt.onrender.com/inventario";

    const response = await fetch(apiUrl);

    const data = await response.json();

    setPricelists(data)
  }

  useEffect(function () {
    fetchData();
  }, []);

  return (
    <>
      <div className="cards">
        {pricelists.map(function (pricelists) {
          return <Card key={pricelists.nome} item={pricelists} />;
        })}
      </div>
    </>
  );
}

export default App;
