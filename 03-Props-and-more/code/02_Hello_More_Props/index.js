class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Ringo" from="Paul" bangs={4} img="https://images.unsplash.com/photo-1685209342301-9d9bf0c5ba4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
