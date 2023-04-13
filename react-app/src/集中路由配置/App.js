import Layout from "./pages/Layout";
import Board from "./pages/Board";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import { BrowserRouter, useRoutes } from "react-router-dom";

const routesList = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Board />,
        index: true, // index设置为true 变成默认的二级路由
      },
      {
        path: "article",
        element: <Article />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

// 2. 使用useRoutes方法传入routesList生成Routes组件
function WrapperRoutes() {
  return useRoutes(routesList);
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* 3. 替换之前的Routes组件 */}
        <WrapperRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
