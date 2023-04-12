// 引入必要的内置组件
import { useNavigate } from "react-router-dom";

// 准备俩个路由组件
// const Home = () => <div>this is home</div>;
// const About = () => <div>this is about</div>;

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      {/* 按照规则配置路由 */}
      <button onClick={() => navigate("/")}>首页</button>
      <button onClick={() => navigate("/about")}>关于</button>
    </div>
  );
}

export default App;
