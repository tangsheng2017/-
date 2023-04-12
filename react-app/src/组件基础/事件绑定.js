import React from "react";

function Hello() {
  // 定义事件回调函数
  const clickHandler = (e) => {
    console.log(e);
    alert("事件被触发了");
  };
  return <button onClick={clickHandler}>hello</button>;
}

const TestComponent = () => {
  const list = [
    {
      id: 1001,
      name: "react",
    },
    {
      id: 1002,
      name: "vue",
    },
  ];
  const onDel = (e, id) => {
    console.log(e, id);
  };
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={(e) => onDel(e, item.id)}>x</button>
        </li>
      ))}
    </ul>
  );
};

function App() {
  return (
    <div className="App">
      <Hello />
      <TestComponent></TestComponent>
    </div>
  );
}

export default App;
