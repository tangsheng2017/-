import Layout from "./Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// 给默认二级路由标记index属性

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
          {/* 省略部分  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
