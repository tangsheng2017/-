import Layout from "./默认二级路由/Layout";
import NotFound from "./404路由配置/NotFound";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// 准备俩个路由组件
const Board = () => <div>this is board</div>;
const Article = () => <div>this is article</div>;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Board />} />
            <Route path="article" element={<Article />} />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
          {/* 省略部分  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
