import Layout from "./Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// App.js中定义嵌套路由声明

// 准备俩个路由组件
const Board = () => <div>this is board</div>;
const Article = () => <div>this is article</div>;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="board" element={<Board />} />
            <Route path="article" element={<Article />} />
          </Route>
          {/* 省略部分  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
