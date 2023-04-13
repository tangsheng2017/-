import { Link, Outlet } from "react-router-dom";

// Layout组件内部通过 <Outlet/> 指定二级路由出口

const Layout = () => {
  return (
    <div>
      <div>layout</div>
      {/* 二级路由的path等于 一级path + 二级path  */}
      <Link to="/board">board</Link>
      <Link to="/article">article</Link>
      {/* 二级路由出口 */}
      <Outlet />
    </div>
  );
};
export default Layout;
