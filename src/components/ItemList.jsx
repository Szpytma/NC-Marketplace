import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import './ItemCard.css'
import './ItemList.css'

function ItemList() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://nc-marketplace-sem-2.onrender.com/api/items";

  useEffect(() => {
    fetch(url)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setItems(data.items);
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
          <ItemCard className='ItemCard'
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
