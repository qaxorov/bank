import React from "react";
import Header from "../components/header/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";
import Home from "../pages/home";

export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}
