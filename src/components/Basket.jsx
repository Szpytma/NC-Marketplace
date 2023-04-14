import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api.js";
import ItemCard from "./ItemCard.jsx";
function Basket() {
  const { username } = useParams();
  const [items, setItems] = useState({});
  const [isLoading, setIsLoading] = useState({});

  useEffect(() => {
    api.fetchBasketByUserName(username).then((items) => {
      setItems(items);
      setIsLoading(false);
    });
  }, [username]);
  if (isLoading) {
    return <p>is loading...</p>;
  }

  return (
    <div className="ItemList">
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
    </div>
  );
}

export default Basket;
