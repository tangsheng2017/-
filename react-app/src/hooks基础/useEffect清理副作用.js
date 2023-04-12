import { useEffect, useState } from "react";

// useEffect清理副作用
// 如果想要清理副作用 可以在副作用函数中的末尾return一个新的函数，在新的函数中编写清理副作用的逻辑
// 注意执行时机为：
// 1. 组件卸载时自动执行
// 2. 组件更新时，下一个useEffect副作用函数执行之前自动执行

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      // 用来清理副作用的事情
      clearInterval(timerId);
    };
  }, [count]);

  return <div className="App">{count}</div>;
}

export default App;
