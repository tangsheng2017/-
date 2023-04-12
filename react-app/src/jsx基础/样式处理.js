import "../App.css";
import React from "react";

const showTitle = true;
// 行内样式 - style
const styleObj = {
  color: "red",
};

function App() {
  return (
    <div className="App">
      <div style={{ color: "red" }}>行内样式</div>
      <div style={styleObj}>行内样式</div>
      <div className={showTitle ? "title" : ""}>类名 - className（推荐）</div>
    </div>
  );
}

export default App;
