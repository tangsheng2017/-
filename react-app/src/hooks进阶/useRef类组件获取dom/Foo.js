import React from "react";

class Foo extends React.Component {
  sayHi = () => {
    console.log("say hi");
  };

  render() {
    return <div>Foo</div>;
  }
}

export default Foo;
