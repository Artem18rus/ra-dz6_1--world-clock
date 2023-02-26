import React from "react";

class ClockScript extends React.Component {
  constructor(props) {
    super(props);
    this.iconCancel = require("./icon-cancel.png");
    this.dataZoneHours = this.props.fieldItem.zone.split(".");

    this.date = new Date();
    this.date.setHours(this.date.getHours() + Number(this.dataZoneHours[0]));

    if (this.dataZoneHours[1] && this.dataZoneHours[0].includes("-")) {
      this.date.setMinutes(
        this.date.getMinutes() - Number(this.dataZoneHours[1])
      );
    } else if (this.dataZoneHours[1]) {
      this.date.setMinutes(
        this.date.getMinutes() + Number(this.dataZoneHours[1])
      );
    }

    this.state = { time: this.date };
  }
  componentDidMount() {
    this.update = setInterval(() => {
      this.setState({ time: this.date });
    }, 1 * 1000);
  }
  componentWillUnmount() {
    clearInterval(this.update);
  }
  handlerClick(e) {
    e.target.parentElement.remove();
  }
  render() {
    const { time } = this.state;

    return (
      <>
        <p className="headerClock">{this.props.fieldItem.name}</p>
        <div className="clock">{time.toLocaleTimeString()}</div>

        <img
          className="icon-cancel"
          src={this.iconCancel}
          alt="icon-cancel"
          onClick={this.handlerClick}
        />
      </>
    );
  }
}

export default ClockScript;
