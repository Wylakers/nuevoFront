import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginContext } from "./Helper/Context";
import {
  Register,
  Login,
  Homepage,
  Account,
  SelectBuild,
  RankingBuilds,
  OptimizedBuild,
  SupportHub,
  SupportGuides,
  SupportQuestions,
  SupportTicket,
  AdvancedBuilding,
  CarritoCompras,
  NotFound,
  Product,
  Search,
} from "./components/pages";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/select-build" element={<SelectBuild />} />
        <Route path="/begginers-build/:id" element={<OptimizedBuild />} />
        <Route path="/ranking-build" element={<RankingBuilds />} />
        <Route path="/support" element={<SupportHub />} />
        <Route path="/support-guides" element={<SupportGuides />} />
        <Route path="/support-questions" element={<SupportQuestions />} />
        <Route path="/support-ticket" element={<SupportTicket />} />
        <Route path="/advanced-build" element={<AdvancedBuilding />} />
        <Route path="/carrito" element={<CarritoCompras />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:Nombre" element={<Product />} />
      </Routes>
    </LoginContext.Provider>
  );
}

export default App;
