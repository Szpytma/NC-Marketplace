import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Item from "./components/Item";
import UserList from "./components/UserList";
import User from "./components/User";
import Basket from "./components/Basket";
import { useState } from "react";
import Home from "./components/Home";

function App() {
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/items/:item_id" element={<Item />} />
        <Route
          path="/users"
          element={<UserList user={user} setUser={setUser} />}
        />
        <Route path="/users/:username" element={<User username={user} />} />
        <Route path="/users/:username/basket" element={<Basket />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
