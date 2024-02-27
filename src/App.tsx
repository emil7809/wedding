
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
      <nav>
        <div id="menu_one" className={`${active === "Menu" ? "active" : ""}`} onClick={() => { setNavigation("Menu"); setActive("Menu") }} >
          <svg width='24' height='24' viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
            <rect width='24' height='24' stroke='none' fill='#000000' opacity='0' />


            <g transform="matrix(1 0 0 1 12 12)">
              <path
                /*  style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4;  fill-rule: nonzero; opacity: 1;" */
                transform=" translate(-12, -12)"
                d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"
                stroke-linecap="round" />
            </g>
          </svg>
        </div>
      </nav>
    </>
  )
}

export default App
