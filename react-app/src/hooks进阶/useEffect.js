import { useEffect } from "react";

// 发送网络请求

function App() {
  // 错误写法：不可以直接在useEffect的回调函数外层直接包裹 await ，因为异步会导致清理函数无法立即返回
  useEffect(async () => {
    const res = await axios.get("http://geek.itheima.net/v1_0/channels");
    console.log(res);
  }, []);

  // 正确写法：在内部单独定义一个函数，然后把这个函数包装成同步
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://geek.itheima.net/v1_0/channels");
      console.log(res);
    }
  }, []);
  return <div className="App"></div>;
}

export default App;
