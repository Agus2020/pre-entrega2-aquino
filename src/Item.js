import { Link } from "react-router-dom"

const Item = ({ title, image, price, id }) => {

    return (
<div class="card">
  <img src={image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{price}</p>
    <Link to={"/item/" + id} >
        Ver detalle
    </Link>
  </div>
</div>
    )
}
export default Item