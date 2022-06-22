import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar sm:w-full">
      <div className="relative w-full text-yellow-400 bg-gray-900 text-center text-bold mx-0 p-6 xl:text-6xl md:text-5xl sm:text-3xl">
        Yellow Umbrella ☂
      </div>
      <div className="links flex  justify-center m-auto md:w-full sm:w-2/12">
        <button className=" rounded-full m-5 p-3 px-6 sm:p-2  xl:m-5 sm:m-1 sm:text-sm md:text-base lg:text-lg baseline hover:bg-yellow-100 hover:duration-300 ">
          <Link to="/">Home</Link>
        </button>
        <button className=" rounded-full m-5 p-3 px-6 sm:p-2  xl:m-5 sm:m-1 sm:text-sm md:text-base lg:text-lg baseline hover:bg-lime-1000 hover:duration-300 ">
          <Link to="/ancestry">Ancestry</Link>
        </button>
        <button className=" rounded-full m-5 p-3 px-6 sm:p-2  xl:m-5 sm:m-1 sm:text-sm md:text-base lg:text-lg baseline hover:bg-gray-1000 hover:duration-300">
          <Link to="/23andme">23andMe</Link>
        </button>
        <button className=" rounded-full m-5 p-3 px-6 sm:p-2  xl:m-5 sm:m-1 sm:text-sm md:text-base lg:text-lg baseline hover:bg-pink-1000 hover:duration-300 ">
          <Link to="/myheritage">MyHeritage</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
