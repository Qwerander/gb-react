import { NavLink } from "react-router-dom";
import cls from "./header.module.scss";

export const Header = () => {
  return (
    <header className={cls.header}>
      <nav className={cls.headerNav}>
        <NavLink to="/" activeClassName="active">Главная</NavLink>
        <NavLink to="/about" activeClassName="active">О нас</NavLink>
        <NavLink to="/tasks" activeClassName="active">Первые три урока</NavLink>
      </nav>
    </header>
  );
};
