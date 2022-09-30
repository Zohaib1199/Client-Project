import React from "react";
import { Route, Routes } from "react-router-dom";

import Landingpage from "pages/customer/Landingpage";
import Figma from "pages/Figma";
import Design from "pages/Design";

function Main() {
  return (
    <>
      <main>
        <section className="relative w-full  h-full  min-h-screen ">
          <Routes>
            <Route path="/Landing" element={<Landingpage />} />
            <Route path="/Figma" element={<Figma />} />
            <Route path="/" element={<Design />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default Main;
