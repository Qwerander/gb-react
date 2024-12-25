import cls from './layout.module.scss';

export const Layout = ({ children }) => {
  return <div className={cls.layout}>{children}</div>;
};
