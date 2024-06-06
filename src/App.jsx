import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { Api } from "./api/api";

function App() {
  const [pricelists, setPricelists] = useState([]);

  async function fetchData() {
    const apiUrl = Api.inventario.readAll()

    const response = await Api.buildApiGetRequest(apiUrl)

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
