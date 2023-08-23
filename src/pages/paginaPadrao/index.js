import { Outlet } from "react-router-dom";
import Cabecalho from "../../componentes/Cabecalho";
import Container from "../../componentes/Container";
import Rodape from "../../componentes/Rodape";
import FavoritosProvider from "../../componentes/contexts/Favoritos";

export default function PaginaPadrao() {
  return (
    <>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Outlet />
        </FavoritosProvider>
      </Container>
      <Rodape />
    </>
  );
}
