import React from "react";

// 子组件A
function SonA(props) {
  return (
    <div>
      SonA
      {props.msg}
    </div>
  );
}

// 子组件B
function SonB(props) {
  return (
    <div>
      SonB
      <button onClick={() => props.changeMsg("new message")}>changeMsg</button>
    </div>
  );
}

// 父组件
class App extends React.Component {
  // 父组件提供状态数据
  state = {
    message: "this is message",
  };
  // 父组件提供修改数据的方法
  changeMsg = (newMsg) => {
    this.setState({
      message: newMsg,
    });
  };

  render() {
    return (
      <>
        {/* 接收数据的组件 */}
        <SonA msg={this.state.message} />
        {/* 修改数据的组件 */}
        <SonB changeMsg={this.changeMsg} />
      </>
    );
  }
}

export default App;
