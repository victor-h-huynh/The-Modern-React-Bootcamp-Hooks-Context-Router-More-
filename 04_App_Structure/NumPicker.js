function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    let msg;
    if (num === 7) {
      msg = (
        <div>
          <h2>Congrats you Win!</h2>
          <img src="https://media2.giphy.com/media/KztT2c4u8mYYUiMKdJ/giphy.gif" />
        </div>
      );
    } else {
      msg = <h2>Sorry, try again!</h2>;
    }
    return (
      <div>
        <h1>Your number is: {num}</h1>
        {msg}
      </div>
    );
  }
}
