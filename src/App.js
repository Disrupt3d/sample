import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Produits } from "./pages/Produits";
import { Profils } from "./pages/Profils";
import { Navbar } from "./components/Navbar";
import { Accueil } from "./pages/Accueil";
import { ItemDetails } from "./pages/ItemDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/produit" element={<Produits />} />
        <Route path="/itemdescription/:id" element={<ItemDetails />} />

        <Route path="/profil" element={<Profils />} />
      </Routes>

      <div className="App"></div>
    </BrowserRouter>
  );
}

export default App;
