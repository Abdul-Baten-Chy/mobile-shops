import { NavLink } from "react-router-dom";

const Nav = () => {
const navLinks=<>
        <NavLink to="/"><li className="mr-3">Home</li></NavLink>   
        <NavLink to="/addProduct"><li className="mr-3">Add Product</li></NavLink>   
        <NavLink to="/myProduct"><li className="mr-3">My Cart</li></NavLink>   
        <NavLink to="/signIn"><li className="mr-3">Sign in</li></NavLink>   
</>

  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <img src="https://i.ibb.co/MZZWf8P/logo.png" alt="" className="w-28 -ml-3"/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
  );
};

export default Nav;
