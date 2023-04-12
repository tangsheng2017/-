import React from "react";

// 函数式子组件
function FSon(props) {
  console.log(props);
  return (
    <div>
      子组件1
      {props.msg}
    </div>
  );
}

// 类子组件
class CSon extends React.Component {
  render() {
    return (
      <div>
        子组件2
        {this.props.msg}
      </div>
    );
  }
}

// 父组件
class App extends React.Component {
  state = {
    message: "this is message",
  };

  setCount = () => {
    console.log(this);
    this.setState({
      message: this.state.message + 1,
    });
  };

  render() {
    return (
      <div>
        <div>父组件</div>
        <button onClick={this.setCount}>{this.state.message}</button>
        <FSon msg={this.state.message} />
        <CSon msg={this.state.message} />
      </div>
    );
  }
}

export default App;
