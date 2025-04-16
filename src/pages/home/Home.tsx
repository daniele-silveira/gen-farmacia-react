import ListaCategorias from "../../components/categorias/listacategorias/ListaCategorias";

function Home() {
  return (
    <>
      <div className="bg-[#52525b] flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h1 className="text-5xl font-bold">Farma+</h1>
            <p className="text-xl">A melhor farmacia de São Paulo</p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://ik.imagekit.io/2zvbvzaqt/Acne%20treatment-amico.png?updatedAt=1744812483586"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>

      <section className="bg-[#f3f4f6] w-full px-8 py-10 ">
        <h3 className="text-3xl col font-bold mb-6 text-center text-[#3f3f46] ">
          Nossas Categorias
        </h3>
        <ListaCategorias />
      </section>
    </>
  );
}

export default Home;
