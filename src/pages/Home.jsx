import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Api } from '../api/api'
import Card from '../components/Card/Card'

export default function Home() {
  const [pricelists, setPricelists] = useState([])

  async function fetchData() {
    const apiUrl = Api.inventario.readAll()

    const response = await Api.buildApiGetRequest(apiUrl)

    if (response.ok) {
      const data = await response.json()

      setPricelists(data)
    } else {
      toast.error('Erro ao carregar lista do pricelists')
    }
  }

  useEffect(function () {
    fetchData()
  }, [])

  return (
    <>
      <div className="cards">
        {pricelists.map(function (pricelists) {
          return <Card key={pricelists.nome} item={pricelists} />
        })}
      </div>
    </>
  )
}
