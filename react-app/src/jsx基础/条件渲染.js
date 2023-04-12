// JSX条件渲染
const flag = true;

function App() {
  return (
    <div className="App">
      <div>{flag ? "react真有趣" : "vue真有趣"}</div>
    </div>
  );
}

export default App;
