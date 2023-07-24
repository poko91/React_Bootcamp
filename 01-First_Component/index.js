class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello there!</h1>
        <h2>Hi there!</h2>
      </div>
    );
  }
}

// function Hello() {
//   return (
//     <div>
//       <h1>Hello there!</h1>
//       <h2>Bye there!</h2>
//     </div>
//   );
// }

ReactDOM.render(<Hello />, document.getElementById("root"));
