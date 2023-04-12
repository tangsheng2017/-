import { useEffect, useState } from "react";

// useEffect的三种情况

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("zs");

  // 一. 不添加依赖项
  // 组件首次渲染执行一次，以及不管是哪个状态更改引起组件更新时都会重新执行
  // 1. 组件初始渲染
  // 2. 组件更新 （不管是哪个状态引起的更新）
  useEffect(() => {
    console.log("副作用执行了");
  });

  // 二.添加空数组
  // 组件只在首次渲染时执行一次
  useEffect(() => {
    console.log("空数组副作用执行了");
  }, []);

  // 三. 添加特定依赖项
  // 副作用函数在首次渲染时执行，在依赖项发生变化时重新执行
  useEffect(() => {
    console.log("count副作用执行了");
  }, [count]);

  return (
    <div className="App">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <button
        onClick={() => {
          setName("cp");
        }}
      >
        {name}
      </button>
    </div>
  );
}

export default App;
