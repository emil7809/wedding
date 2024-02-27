
import "./app.scss";
import { useState } from "react";
import Countdown from "./components/Countdown"
import Menu from "./components/Menu"
import Welcome from "./components/Welcome"
import Dresscode from "./components/Dresscode"
import Wishlist from "./components/Wishlist"
import Adresse from "./components/Adresse"
import Guestlist from "./components/Guestlist"
import Eventplan from "./components/Eventplan"
import Foodmenu from "./components/Foodmenu"
import Weather from "./components/Weather"
import Photoes from "./components/Photoes"
import Qa from "./components/Qa"

import { IoMenu } from "react-icons/io5";

function App() {

  const [navigation, setNavigation] = useState("Menu")
  const [active, setActive] = useState("Menu")


  return (
    <>
      <Countdown />
      <main>
        <div className={`${navigation === "Menu" ? "show" : "hide"}`} onClick={() => setNavigation("Welcome")}>
          <Qa />
          <Photoes />
          <Weather />
          <Foodmenu />
          <Eventplan />
          <Guestlist />
          <Adresse />
          <Wishlist />
          <Dresscode />
          <Menu />

        </div>
        <div className={`${navigation === "Welcome" ? "show" : "hide"}`}>
          <Welcome />
        </div>
      </main>

      <nav>
        <div id="menu_one" className={`${active === "Menu" ? "active" : ""}`} onClick={() => { setNavigation("Menu"); setActive("Menu") }} >
          <IoMenu />
        </div>
        <div id="menu_two" className={`${active === "Adresse" ? "active" : ""}`} onClick={() => { setNavigation("Adresse"); setActive("Adresse") }} >
          <IoMenu />
        </div>
      </nav>
    </>
  )
}

export default App
