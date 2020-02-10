class Hello extends React.Component {
  render() {
    const props = this.props;
    console.log(this.props);
    return (
      <p>
        Hi {props.to} from {props.from}
      </p>
    );
  }
}
