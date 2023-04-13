import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<h1>1</h1>} />

        <Route path="/items" element={<ItemList />} />
      </Routes>
      <ItemList />
      <Footer />
    </div>
  );
}

export default App;
