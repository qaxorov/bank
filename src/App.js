import React from "react";
import Header from "./components/header/header";
import Kredit from "./components/main/section/kredit/kredit";
import Button from "./components/main/section/button/button";
import Zayem from "./components/main/section/zayem/zayem";
import Contact from "./components/contact";
import Bank from "./components/bank/bank";
import Coin from "./components/cion/coin";
import Footer from "./components/footer/footer";
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./Layout";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  );
}
