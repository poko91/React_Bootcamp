function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    let msg;
    if (num === 7) {
      msg = "Good!";
    }
    return (
      <div>
        <h1>Your number is: {num}</h1>
        <p>{num === 7 ? "Congrats!" : "Unlucky!"}</p>
        {num === 7 && <img src="https://images.unsplash.com/photo-1499306215218-42e51ae058b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />}
      </div>
    );
  }
}

ReactDOM.render(<NumPicker />, document.getElementById("root"));
