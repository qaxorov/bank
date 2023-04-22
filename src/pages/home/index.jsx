import React from "react";
import Kredit from "../../components/main/section/kredit/kredit";
import Bank from "../../components/bank/bank";
import Contact from "../../components/contact";
import Layout from "../../Layout";

export default function Home() {
  return (
      <>
        <Kredit />
        <Bank />
        <Contact />
      </>
  );
}
