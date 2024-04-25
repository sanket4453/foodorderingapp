import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-slate-100 shadow-lg">
      <div className="logo-container">
        <img
          alt="logo"
          className="w-28 xl:bg-transparent md:bg-transparent"
          src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex justify-between p-5 m-4">
          <Link to={"/"}>
            <li className="px-4">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="px-4">About us</li>
          </Link>
          <Link to={"/contact"}>
            <li className="px-4">Contact us</li>
          </Link>
          <Link to={"/cart"}>
            <li className="px-4 font-bold text-xl">
              Cart ({cartItems?.length})
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
