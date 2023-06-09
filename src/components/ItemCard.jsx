import { Link } from "react-router-dom";

function ItemCard({
  item_id,
  item_name,
  description,
  img_url,
  price,
  category_name,
}) {
  return (
    <div className="ItemCard">
      <li key={item_id}>
        <Link to={`/items/${item_id}`}>
          <h2>{item_name}</h2>
        </Link>
        <img src={img_url} alt={item_name} />
        <p>$ {price}</p>
        <p>{category_name}</p>
      </li>
    </div>
  );
}
export default ItemCard;
