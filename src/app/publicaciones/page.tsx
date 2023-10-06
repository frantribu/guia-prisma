export async function obtenerPublicacion() {
  const respuesta = await fetch("http://localhost:3000/api/publicaciones", {cache:"no-store"})
  const datos = await respuesta.json();
  return datos;
}

type Publicacion = {
  id: string;
  titulo: string;
  contenido: string;
  autorId: string;
}

export default async function Pagina() {
  const publicaciones = await obtenerPublicacion();

  return (
  <section>
      <h2>Publicaciones</h2>

      <ul></ul>
      {
          publicaciones.map((publicaciones: Publicacion) => {
              <li key={publicaciones.id}>{publicaciones.titulo} - {publicaciones.contenido}</li>
          })
      }

  </section>
  );
}