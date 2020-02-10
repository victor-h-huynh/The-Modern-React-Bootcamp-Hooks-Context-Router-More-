class Machine extends React.Component {
  render() {
    console.log(this.props);
    const { s1, s2, s3 } = this.props;
    let winner = s1 === s2 && s2 === s3;
    console.log(winner);
    return (
      <div>
        <h2>
          {s1}
          {s2}
          {s3}
        </h2>
        <p>{winner ? "You win" : "You lose"}</p>
      </div>
    );
  }
}
