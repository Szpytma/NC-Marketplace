import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Item from "./components/Item";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/items/:item_id" element={<Item />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
