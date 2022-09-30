import { NavLink, Outlet } from "react-router-dom";
import { Header } from "./Header";

const Layout = () => {
  const setActive = ({ isActive }) =>
    isActive ? "nav-link active-link" : "nav-link";
  return (
    <>
      <Header>
        <li className="nav-item">
          <NavLink className={setActive} to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={setActive} to="about">
            Aboute
          </NavLink>
        </li>
        <li className={setActive}>
          <NavLink className="nav-link" to="posts">
            Post
          </NavLink>
        </li>
      </Header>
      <main>
        <div className="container-fluid">
          <Outlet />
          Main
        </div>
      </main>
      <footer>2021</footer>
    </>
  );
};
export { Layout };
