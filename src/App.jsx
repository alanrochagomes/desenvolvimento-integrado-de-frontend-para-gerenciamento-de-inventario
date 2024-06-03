import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 = {
    nome: 'Notebook',
    imagem: 'https://acerstore.vtexassets.com/arquivos/ids/162593-800-auto?v=638187382738330000&width=800&height=auto&aspect=true',
    preço: '2.500,00'
  }

  const item2 = {
    nome: 'Phone',
    imagem: 'https://www.collinsdictionary.com/images/full/mobilephone_103792316.jpg',
    preço: '1.500,00'
  }

  const item3 = {
    nome: 'Watch',
    imagem: 'https://down-br.img.susercontent.com/file/sg-11134201-7rbmf-lozk2wv92sbh8b',
    preço: '500,00'
  }

  const item4 = {
    nome: 'Tablet',
    imagem: 'https://samsungbrshop.vtexassets.com/arquivos/ids/223799/Galaxy-Tab-S9-FE-Plus_Gray_Product-Image_Combo_RGB1000x1000.jpg?v=638334095344430000',
    preço: '2.400,00'
  }

  const item5 = {
    nome: 'Fone',
    imagem: 'https://www.wb.com.br/upload/produto/imagem/13-WBFOTWBITSRB-1.webp',
    preço: '100,00'
  }

  const pricelists = [item1, item2, item3, item4, item5]

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

export default App
