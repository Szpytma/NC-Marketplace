import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api.js";
import "./Item.css";

function Item() {
  const { item_id } = useParams();
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState({});
  useEffect(() => {
    api.fetchItemById(item_id).then((item) => {
      setItem(item);
      setIsLoading(false);
    });
  }, [item_id]);
  if (isLoading) {
    return <p>is loading...</p>;
  }
  return (
    <div className="Item">
      <h3>
        id:{item.item_id} {item.item_name}
      </h3>

      <p>{item.description}</p>
      <img src={item.img_url} alt={item.item_name} />
      <p>$ {item.price}</p>
      <p>{item.category_name}</p>
    </div>
  );
}

export default Item;
