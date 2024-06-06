import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [pricelists, setPricelists] = useState([]);

  async function fetchData() {
    const apiUrl =
      "https://desenvolvimento-integrado-de-backend-gtnt.onrender.com/inventario";

    const response = await fetch(apiUrl).catch(function (error) {
      console.error('Erro ao chamr endpoint /inventario', error)
      toast.error('Erro ao carregar lista do Pricelists.')
    })

    if (response.ok) {
     const data = await response.json();

     setPricelists(data)
    } else {
      toast.error('Erro ao carregar lista do Pricelists.')
    }
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
      <ToastContainer />
    </>
  );
}

export default App;
