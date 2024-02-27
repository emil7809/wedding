
import "./app.scss";
import { useState } from "react";
import Countdown from "./components/Countdown"
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
import { FaLocationDot } from "react-icons/fa6";
import { GiAmpleDress } from "react-icons/gi";
import { IoGift } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import { IoPartlySunny } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";

function App() {

  const [navigation, setNavigation] = useState("Menu")
  const [active, setActive] = useState("Menu")


  return (
    <>
      <Countdown />
      <main>
        <div id="menu" className={`${navigation === "Menu" ? "show" : "hide"}`} >

          <h2 className={`${active === "Adresse" ? "active" : ""}`} onClick={() => { setNavigation("Adresse"); setActive("Adresse") }} >Adresse</h2>
          <h2 className={`${active === "DressCode" ? "active" : ""}`} onClick={() => { setNavigation("DressCode"); setActive("DressCode") }}>DressCode</h2>
          <h2 className={`${active === "Wishlist" ? "active" : ""}`} onClick={() => { setNavigation("Wishlist"); setActive("Wishlist") }}>Ønskeliste</h2>
          <h2 className={`${active === "Guestlist" ? "active" : ""}`} onClick={() => { setNavigation("Guestlist"); setActive("Guestlist") }}>Gæsteliste</h2>
          <h2 className={`${active === "Eventplan" ? "active" : ""}`} onClick={() => { setNavigation("Eventplan"); setActive("Eventplan") }}>Eventplan</h2>
          <h2 className={`${active === "Foodmenu" ? "active" : ""}`} onClick={() => { setNavigation("Foodmenu"); setActive("Foodmenu") }}>Menu</h2>
          <h2 className={`${active === "Weather" ? "active" : ""}`} onClick={() => { setNavigation("Weather"); setActive("Weather") }}>Vejrudsigt</h2>
          <h2 className={`${active === "Photoes" ? "active" : ""}`} onClick={() => { setNavigation("Photoes"); setActive("Photoes") }}>Post Billeder</h2>
          <h2 className={`${active === "Qa" ? "active" : ""}`} onClick={() => { setNavigation("Qa"); setActive("Qa") }}>Q&A</h2>

        </div>
        <div className={`${navigation === "Adresse" ? "show" : "hide"}`} >
          <Adresse />
        </div>
        <div className={`${navigation === "DressCode" ? "show" : "hide"}`} >
          <Dresscode />
        </div>
        <div className={`${navigation === "Wishlist" ? "show" : "hide"}`} >
          <Wishlist />
        </div>
        <div className={`${navigation === "Guestlist" ? "show" : "hide"}`} >
          <Guestlist />
        </div>
        <div className={`${navigation === "Eventplan" ? "show" : "hide"}`} >
          <Eventplan />
        </div>
        <div className={`${navigation === "Foodmenu" ? "show" : "hide"}`} >
          <Foodmenu />
        </div>
        <div className={`${navigation === "Weather" ? "show" : "hide"}`} >
          <Weather />
        </div>
        <div className={`${navigation === "Photoes" ? "show" : "hide"}`} >
          <Photoes />
        </div>
        <div className={`${navigation === "Qa" ? "show" : "hide"}`} >
          <Qa />
        </div>

      </main>

      <nav>
        <div className={`${active === "Menu" ? "active" : ""}`} onClick={() => { setNavigation("Menu"); setActive("Menu") }} >
          <IoMenu />
        </div>
        <div className={`${active === "Adresse" ? "active" : ""}`} onClick={() => { setNavigation("Adresse"); setActive("Adresse") }} >
          <FaLocationDot />
        </div>
        <div className={`${active === "DressCode" ? "active" : ""}`} onClick={() => { setNavigation("DressCode"); setActive("DressCode") }} >
          <GiAmpleDress />
        </div>
        <div className={`${active === "Wishlist" ? "active" : ""}`} onClick={() => { setNavigation("Wishlist"); setActive("Wishlist") }} >
          <IoGift />
        </div>
        <div className={`${active === "Guestlist" ? "active" : ""}`} onClick={() => { setNavigation("Guestlist"); setActive("Guestlist") }} >
          <FaUsers />
        </div>
        <div className={`${active === "Eventplan" ? "active" : ""}`} onClick={() => { setNavigation("Eventplan"); setActive("Eventplan") }} >
          <MdAccessTimeFilled />
        </div>
        <div className={`${active === "Foodmenu" ? "active" : ""}`} onClick={() => { setNavigation("Foodmenu"); setActive("Foodmenu") }} >
          <GiKnifeFork />
        </div>
        <div className={`${active === "Weather" ? "active" : ""}`} onClick={() => { setNavigation("Weather"); setActive("Weather") }} >
          <IoPartlySunny />
        </div>
        <div className={`${active === "Photoes" ? "active" : ""}`} onClick={() => { setNavigation("Photoes"); setActive("Photoes") }} >
          <FaCamera />
        </div>
        <div className={`${active === "Qa" ? "active" : ""}`} onClick={() => { setNavigation("Qa"); setActive("Qa") }} >
          <FaQuestion />
        </div>
      </nav>
    </>
  )
}

export default App
