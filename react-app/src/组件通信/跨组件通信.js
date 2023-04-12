import React, { createContext } from "react";

// 1. 创建Context对象
const { Provider, Consumer } = createContext();

// 3. 消费数据
function ComC() {
  // 需要用到数据的组件使用Consumer包裹获取数据
  return <Consumer>{(value) => <div>{value}</div>}</Consumer>;
}

function ComA() {
  return <ComC />;
}

// 2. 提供数据
class App extends React.Component {
  state = {
    message: "this is message",
  };

  render() {
    return (
      // 使用Provider包裹上层组件提供数据
      <Provider value={this.state.message}>
        <div className="app">
          <ComA />
        </div>
      </Provider>
    );
  }
}

export default App;
