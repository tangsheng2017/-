// 引入必要的内置组件
import { BrowserRouter, useNavigate } from "react-router-dom";

function Register() {
  // 如果在跳转时不想添加历史记录，可以添加额外参数replace 为true
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>首页</button>
      <button onClick={() => navigate("/about", { replace: true })}>
        关于
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Register></Register>
      </BrowserRouter>
    </div>
  );
}

export default App;
