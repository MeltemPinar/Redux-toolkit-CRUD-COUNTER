import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../redux/slices/counterSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="d-flex justify-content-between mb-3 p-4">
      <h2 className="d-flex gap-2">
        Redux <span className="text-danger">Toolkit</span>
      </h2>
      <nav className="d-flex gap-4 ">
        <NavLink className="text-danger text-decoration-none fs-5" to={"/"}>
          SAYAÇ
        </NavLink>
        <NavLink className="text-danger text-decoration-none fs-5" to={"/crud"}>
          CRUD
        </NavLink>
        <button
          className="btn btn-danger w-50 h-75 p-1 my-0"
          onClick={() => dispatch(toggleTheme())}
        >
          Tema Değiş
        </button>
      </nav>
    </header>
  );
};

export default Header;
