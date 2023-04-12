import { useEffect, useRef } from "react";
import Foo from "./Foo";

function App() {
  const h1Foo = useRef(null);
  useEffect(() => {
    console.log(h1Foo);
  }, []);
  return (
    <div className="App">
      <Foo ref={h1Foo} />
    </div>
  );
}

export default App;
