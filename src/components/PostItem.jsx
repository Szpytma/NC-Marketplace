import "./PostItem.css";
//TODO
function PostItem() {
  return (
    <form className="PostItem ">
      <div>
        <label htmlFor="item_name"></label>
        <input type="text" id="item_name" placeholder="Item Name" />
      </div>
      <div>
        <label htmlFor="img_url"></label>
        <input type="text" id="img_url" placeholder="link for image" />
      </div>
      <div>
        <label htmlFor="price"></label>
        <input type="text" id="price" placeholder="price" />
      </div>
      <div>
        <label htmlFor="description"></label>
        <input type="textBox" id="description" placeholder="description" />
      </div>
      <div>
        <label htmlFor="category_name"></label>
        <input type="text" id="category_name" placeholder="category name" />
      </div>
      <div>
        <label htmlFor="category_name">Category</label>
        <select id="category_name">
          <option defaultValue>Relics</option>
          <option>Electronics</option>
          <option>Household</option>
        </select>
      </div>

      <button type="submit">Add new Item</button>
    </form>
  );
}

export default PostItem;
