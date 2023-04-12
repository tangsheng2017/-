import { useState } from "react";

function App() {
  // 参数：状态初始值比如,传入 0 表示该状态的初始值为 0
  // 返回值：数组,包含两个值：1 状态值（state） 2 修改该状态的函数（setState）
  const [state, setState] = useState(0);
  // 修改状态会重新渲染组件，在这里可以进行打印测试
  console.log(state);
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
