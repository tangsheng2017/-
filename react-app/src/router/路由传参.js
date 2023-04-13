// 引入必要的内置组件
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

function Register() {
  // 如果在跳转时不想添加历史记录，可以添加额外参数replace 为true
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>首页</button>
      <button onClick={() => navigate("/about?id=123")}>
        关于searchParams
      </button>
      <button onClick={() => navigate("/about/123")}>关于params</button>
    </div>
  );
}

// 准备俩个路由组件
const Home = () => <div>this is home</div>;
const About = () => {
  const [searchParams] = useSearchParams(); // 获取?形式的传参
  const params = useParams();
  return (
    <div>
      <div>this is about searchParams：{searchParams.get("id")}</div>
      <div>this is about params：{params.id}</div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Register></Register>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/about/:id" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
