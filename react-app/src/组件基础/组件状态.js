import React from "react";

// 修改状态时更新视图
class Counter extends React.Component {
  // 定义数据
  state = {
    count: 0,
  };
  // 定义修改数据的方法
  setCount = () => {
    console.log(this);
    this.setState({
      count: this.state.count + 1,
    });
  };

  // 使用数据 并绑定事件
  render() {
    return <button onClick={this.setCount}>{this.state.count}</button>;
  }
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
