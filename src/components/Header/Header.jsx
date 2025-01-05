import { NavLink } from "react-router-dom";
import cls from "./header.module.scss";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

export const Header = () => {
  return (
    <header className={cls.header}>
      <nav className={cls.headerNav}>
        <NavLink to="/" activeclassname="active">Главная</NavLink>
        <NavLink to="/about" activeclassname="active">О нас</NavLink>
        <NavLink to="/tasks" activeclassname="active">Первые три урока</NavLink>
        <NavLink to="/products" activeclassname="active">Продукты</NavLink>
      </nav>
      <ThemeSwitcher />
    </header>
  );
};
