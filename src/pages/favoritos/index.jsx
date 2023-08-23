import Banner from "../../componentes/Banner";
import Titulo from "../../componentes/Titulo";
import imagem from "../../componentes/Banner/banner-favoritos.png";
import Card from "../../componentes/Card";
import style from "./Favoritos.module.css";
import { useFavoritoContext } from "../../componentes/contexts/Favoritos";

export default function Favoritos() {
  const { favorito } = useFavoritoContext();
  return (
    <>
      <Banner imagem={imagem} />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={style.filmes}>
        {favorito.map((filme) => (
          <Card key={filme.id} {...filme} />
        ))}
      </section>
    </>
  );
}
