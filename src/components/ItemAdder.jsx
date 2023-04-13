import { useState } from "react";
import "./ItemAdder.css";
import * as api from "../api.js";
function ItemAdder({ setItems }) {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [categoryName, setCategoryName] = useState("Clothing");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      item_name: itemName,
      description: description,
      img_url: imgUrl,
      price: +price,
      category_name: categoryName,
    };

    api.postItem(newItem).then((addedItem) => {
      setItems((currentItems) => {
        return [addedItem, ...currentItems];
      });
      setItemName("");
      setDescription("");
      setImgUrl("");
      setPrice("");
      //TODO clear default setCategoryName option
      return addedItem;
    });
  };

  return (
    <form onSubmit={handleSubmit} className="ItemAdder ">
      <div>
        <label htmlFor="item_name"></label>
        <input
          type="text"
          id="item_name"
          placeholder="Item Name"
          value={itemName}
          onChange={({ target }) => {
            setItemName(target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="img_url"></label>
        <input
          type="text"
          id="img_url"
          placeholder="link for image"
          onChange={({ target }) => {
            setImgUrl(target.value);
          }}
          value={imgUrl}
        />
      </div>
      <div>
        <label htmlFor="price"></label>
        <input
          type="text"
          id="price"
          placeholder="price"
          onChange={({ target }) => {
            setPrice(target.value);
          }}
          value={price}
        />
      </div>
      <div>
        <label htmlFor="description"></label>
        <input
          type="textBox"
          id="description"
          placeholder="description"
          onChange={({ target }) => {
            setDescription(target.value);
          }}
          value={description}
        />
      </div>
      <div>
        <label htmlFor="category_name">Category</label>
        <select
          id="category_name"
          onChange={({ target }) => {
            setCategoryName(target.value);
          }}
        >
          <option>Clothing</option>
          <option>Electronics</option>
          <option>Household</option>
        </select>
      </div>

      <button type="submit">Add new Item</button>
    </form>
  );
}

export default ItemAdder;
