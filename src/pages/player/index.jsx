import Banner from "../../componentes/Banner";
import Titulo from "../../componentes/Titulo";
import imagem from "../../componentes/Banner/banner-player.png";
import style from "./Player.module.css";
import { useParams } from "react-router-dom";
import NaoEncontrada from "../naoEncontrada";
import { useEffect, useState } from "react";

export default function Player() {
  const [filme, setFilme] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      const url = await fetch(
        `https://my-json-server.typicode.com/balicoelho/cinetag-api/videos?id=${id}`
      );
      const filme = await url.json();
      setFilme(...filme);
    }
    fetchData();
  });

  if (!filme) {
    return <NaoEncontrada />;
  }

  return (
    <>
      <Banner imagem={imagem} />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section>
        <iframe
          width="853"
          height="480"
          src={filme.link}
          title={filme.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}
