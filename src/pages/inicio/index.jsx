import Banner from "../../componentes/Banner";
import imagem from "../../componentes/Banner/banner-home.png";
import Titulo from "../../componentes/Titulo";
import Card from "../../componentes/Card";
import style from "./inicio.module.css";
import { useEffect, useState } from "react";

export default function Inicio() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = await fetch(
        "https://my-json-server.typicode.com/balicoelho/cinetag-api/videos"
      );
      const filmes = await url.json();
      setFilmes(filmes);
    }
    fetchData();
  }, []);

  return (
    <>
      <Banner imagem={imagem} />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={style.filmes}>
        {filmes.map((filme) => (
          <Card key={filme.id} {...filme} />
        ))}
      </section>
    </>
  );
}
