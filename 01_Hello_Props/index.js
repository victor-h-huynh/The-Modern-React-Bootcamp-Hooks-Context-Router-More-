class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to="Ringo"
          from="Paul"
          bangs={4}
          img="https://media2.giphy.com/media/KztT2c4u8mYYUiMKdJ/giphy.gif"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
