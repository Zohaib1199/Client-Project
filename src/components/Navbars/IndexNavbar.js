export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-nav-colour shadow-xl">
        <div className="navBar-wrapper flex justify-between w-full	">
          <a className="underline mt-6 ml-6 text-sm	 " href="">
            Login
          </a>

          <p className="text-black mt-3 ml-28	 text-4xl text-main">
            There
            <span className="text-red-400 text-4xl ">you</span>
            go
            <span className="text-xs font-bold  mt-5  text-red-400">o</span>
          </p>
          <button className="mt-4 my-4  bg-red-500  text-white text-sm mr-16	font-bold px-3 py-2 btn-wrapper">
            <i class="fab fa-linkedin-in bg-white mr-2 text-xs text-red-400 px-1 py-0 "></i>
            Register
            <i class="fas text-xs fa-arrow-right  ml-3"></i>
          </button>
        </div>
      </nav>
    </>
  );
}
