class App extends React.Component {
  render() {
    return (
      <div>
        <Friend name="Elton" hobbies={["Piano", "Singing", "Dancing"]} />
        <Friend name="Jane" hobbies={["Swimming", "Running"]} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
