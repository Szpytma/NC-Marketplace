import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import "./ItemCard.css";
import "./ItemList.css";
import * as api from "../api.js";

function ItemList() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchItems().then((items) => {
      setItems(items);
      setIsLoading(false);
    });
  }, [setItems]);

  if (isLoading) {
    return <p>is loading...</p>;
  }

  return (
    <div className="ItemList">
      <ul>
        {items.map((item) => (
          <ItemCard
            key={item.item_id}
            item_id={item.item_id}
            item_name={item.item_name}
            price={item.price}
            img_url={item.img_url}
            category_name={item.category_name}
          />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
