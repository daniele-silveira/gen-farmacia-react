import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className='w-full bg-[#3f3f46] text-white
                flex justify-center py-4'>

                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">Farma+</Link>

                    <div className='flex gap-4'>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categorias</Link>    
                    </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
