import './Card.css'

export default function Card(props) {
  return (
    <div className="card">
      <h2>{props.item.nome}</h2>
      {props.item.preço && <p><b>R$:</b> {props.item.preço}</p>}
      <img src={props.item.imagem} width="200" />
    </div>
  )
}
