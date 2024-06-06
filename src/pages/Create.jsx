import { toast } from "react-toastify"
import { Api } from "../api/api"
import { useNavigate } from "react-router-dom"

export default function Create() {
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()

    const pricelists = {
      nome: event.target.nome.value,
      imagem: event.target.imagem.value,
      Preço: event.target.Preço.value
    }

    const apiUrl = Api.inventario.create()

    const response = await Api.buildApiPostRequest(apiUrl, pricelists)

    if (response.ok) {
      toast.success('Criado com sucesso!')
      navigate('/')
    } else {
      const body = await response.json()
      toast.error('Erro ao criar: ' + body.error)
    }
  }

  return (
    <div>
      <h1>Criar Item</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome*:</label><br />
          <input type="text" id="nome" name="nome" placeholder="Insira o nome" />
        </div>
        <div>
          <label htmlFor="imagem">Imagem (URL)*:</label><br />
          <input type="text" id="imagem" name="imagem" placeholder="Insira a URL da imagem" />
        </div>
        <div>
          <label htmlFor="Preço">Preço (opcional):</label><br />
          <input type="text" id="Preço" name="Preço" placeholder="Insira o preço" />
        </div>
        <div>
          <button type="submit">Criar</button>
          <button type="reset">Reiniciar</button>
        </div>
      </form>
    </div>
  )
}