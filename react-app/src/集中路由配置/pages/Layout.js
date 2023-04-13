import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>layout</div>
      <Outlet />
    </div>
  );
};
export default Layout;
