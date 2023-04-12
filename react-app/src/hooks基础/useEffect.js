import { useEffect, useState } from "react";

// useEffect函数的作用就是为react函数组件提供副作用处理的

// 副作用是相对于主作用来说的，一个函数除了主作用，其他的作用就是副作用。对于 React 组件来说，主作用就是根据数据（state/props）渲染 UI，除此之外都是副作用（比如，手动修改 DOM）

// 常见的副作用
// 1. 数据请求 ajax发送
// 2. 手动修改dom
// 3. localstorage操作

function App() {
  const [state, setState] = useState(0);

  useEffect(() => {
    // dom操作
    document.title = `当前已点击了${state}次`;
  });
  return (
    <div className="App">
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        {state}
      </button>
    </div>
  );
}

export default App;
