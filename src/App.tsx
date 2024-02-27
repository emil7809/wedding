
import "./app.scss";
import { useState } from "react";
import Countdown from "./components/Countdown"
import Menu from "./components/Menu"
import Welcome from "./components/Welcome"



function App() {

  const [navigation, setNavigation] = useState("Menu")
  const [active, setActive] = useState("")


  return (
    <>
      <Countdown />
      <main>
        <div className={`${navigation === "Menu" ? "show" : "hide"}`} onClick={() => setNavigation("Welcome")}>
          <Menu />
        </div>
        <div className={`${navigation === "Welcome" ? "show" : "hide"}`}>
          <Welcome />
        </div>
      </main>
      {/*  <nav>
        <div id="menu_one" className={`${active === "cards" ? "active_card_nav" : ""}`} onClick={() => { setNavigation("Cards Library"); setActive("cards") }} ></div>
      </nav> */}
    </>
  )
}

export default App
