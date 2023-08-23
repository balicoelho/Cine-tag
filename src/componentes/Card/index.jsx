import style from "./Card.module.css";
import favoritar from "./favoritar.png";
import desfavoritar from "./desfavoritar.png";
import { useFavoritoContext } from "../contexts/Favoritos";
import { useNavigate } from "react-router-dom";

export default function Card({ id, capa, titulo }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  let ehFavorito = favorito.some((fav) => fav.id === id);
  let icone = ehFavorito ? desfavoritar : favoritar;
  const navigate = useNavigate();

  return (
    <div className={style.card}>
      <img
        src={capa}
        alt={titulo}
        className={style.capa}
        onClick={() => navigate(`/${id}`)}
      />

      <h2>{titulo}</h2>
      <img
        onClick={() => adicionarFavorito({ id, capa, titulo })}
        className={style.favoritar}
        src={icone}
        alt="Favoritar"
      />
    </div>
  );
}
