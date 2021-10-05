import React from "react";
import "./styles.css";

import imagem from "../assets/javascript.png";
import Menu from "../components/navbar";

export default function Home() {
  return (
    <>
      <Menu></Menu>
      <h1 align="center">Home</h1>
      <img src={imagem} alt="JS"></img>
      <p>Esta é minha primeira página em JavaScript!</p>
      <br />
      <p>Meu primeiro projeto em JavaScript.</p>
    </>
  );
}
