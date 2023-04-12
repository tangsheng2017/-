import React from "react";

class InputComponent extends React.Component {
  // 声明组件状态
  state = {
    message: "this is message",
  };
  // 声明事件回调函数
  changeHandler = (e) => {
    this.setState({ message: e.target.value });
  };

  render() {
    return (
      <div>
        <input value={this.state.message} onChange={this.changeHandler} />
        <div>双向绑定数据：{this.state.message}</div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <InputComponent />
    </div>
  );
}

export default App;
