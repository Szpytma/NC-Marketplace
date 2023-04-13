import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Item from "./components/Item";
import PostItem from "./components/PostItem";

function App() {
  return (
    <div className="App">
      <Header />
      <PostItem />
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/items/:item_id" element={<Item />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
