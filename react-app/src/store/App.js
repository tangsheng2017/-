import { observer } from "mobx-react-lite";
// 导入方法
import { useStore } from "./store";

function App() {
  // 得到store
  const store = useStore();
  return (
    <div className="App">
      <button onClick={() => store.counterStore.addCount()}>
        {store.counterStore.count}
      </button>
    </div>
  );
}

export default observer(App);
