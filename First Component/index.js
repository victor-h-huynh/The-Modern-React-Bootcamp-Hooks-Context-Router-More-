class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My Image!</h1>
        <img src="https://images.unsplash.com/photo-1538287816585-a55721195734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1601&q=80"></img>
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
