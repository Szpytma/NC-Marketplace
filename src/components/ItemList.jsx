import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import "./styles/ItemCard.css";
import "./styles/ItemList.css";
import * as api from "../api.js";
import ItemAdder from "./ItemAdder";

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
    <div>
      <div>
        <ItemAdder setItems={setItems} />
      </div>
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
    </div>
  );
}

export default ItemList;
