import { useState } from "react";

function Counter(props) {
  // 会在组件初始化的时候执行一次
  const [count, setCount] = useState(() => {
    return props.count;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Counter count={10} />
      <Counter count={20} />
    </div>
  );
}

export default App;
