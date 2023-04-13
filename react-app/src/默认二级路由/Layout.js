import { Link, Outlet } from "react-router-dom";

// 把原本的路径path属性去掉

const Layout = () => {
  return (
    <div>
      <div>layout</div>
      {/* 二级路由的path等于 一级path + 二级path  */}
      <Link to="/">board</Link>
      <Link to="/article">article</Link>
      {/* 二级路由出口 */}
      <Outlet />
    </div>
  );
};
export default Layout;
