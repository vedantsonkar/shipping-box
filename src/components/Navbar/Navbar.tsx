import { FC } from "react";
import { ROUTES } from "../../constants";
import { NavLink } from "react-router";

const Navbar: FC = () => {
  return (
    <header className="backdrop-blur-md text-white p-4 rounded-b-2xl shadow-md w-full fixed top-0 z-10 bg-[rgba(255,255,255,0.7)]">
      <nav className="container py-4 text-black">
        <ul className="flex space-x-4 font-bold text-xl">
          <li className="">
            <NavLink
              to={ROUTES.home}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-500"
                  : "text-black hover:text-purple-500 hover:underline"
              }
            >
              Add Shipment
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.shipments}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-500"
                  : "text-black hover:text-purple-500 hover:underline"
              }
            >
              Shipments
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
