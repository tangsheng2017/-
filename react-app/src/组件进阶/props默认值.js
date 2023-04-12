import React, { Component } from "react";

// 函数组件
function List1({ pageSize = 10 }) {
  return <div>此处展示props的默认值：{pageSize}</div>;
}

// 类组件
class List2 extends Component {
  static defaultProps = {
    pageSize: 20,
  };

  render() {
    return <div>此处展示props的默认值：{this.props.pageSize}</div>;
  }
}

function App() {
  return (
    <div className="App">
      <List1 />
      <List2 />
    </div>
  );
}

export default App;
