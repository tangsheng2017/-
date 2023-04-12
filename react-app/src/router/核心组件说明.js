// 引入必要的内置组件
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// BrowerRouter：包裹整个应用，一个React应用只需要使用一次
// 模式：
// HashRouter：监听url hash值实现，路由表现http://localhost:3000/#/about
// BrowerRouter：h5的 history.pushState API实现，路由表现http://localhost:3000/about

// Link：用于指定导航链接，完成声明式的路由跳转  类似于 <router-link/>

// Routes：提供一个路由出口，组件内部会存在多个内置的Route组件，满足条件的路由会被渲染到组件内部，类比router-view

// Route：用于定义路由路径和渲染组件的对应关系  [element：因为react体系内 把组件叫做react element]

// 准备俩个路由组件
const Home = () => <div>this is home</div>;
const About = () => <div>this is about</div>;

function App() {
  return (
    <div className="App">
      {/* 按照规则配置路由 */}
      <BrowserRouter>
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
