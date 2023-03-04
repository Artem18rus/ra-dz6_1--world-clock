import React from "react";

class ClockScript extends React.Component {
  constructor(props) {
    super(props);
    this.iconCancel = require("./icon-cancel.png");
    this.dataZoneHours = this.props.fieldItem.zone.split(".");

    this.hoursGrin = new Date().getHours() + new Date().getTimezoneOffset() / 60; // 0 часовой пояс
    this.minutesGrin =
      new Date().getMinutes() + new Date().getTimezoneOffset() / 60 + 4;

    this.newHours = this.hoursGrin + Number(this.dataZoneHours[0]); // изменить на нужный часовой пояс
    
    if (this.dataZoneHours[1] && this.dataZoneHours[0].includes("-")) {
      this.newMinutes = this.minutesGrin - Number(this.dataZoneHours[1]);
    } else if (this.dataZoneHours[1]) {
      this.newMinutes = this.minutesGrin + Number(this.dataZoneHours[1]);
    } else if (!this.dataZoneHours[1]) {
      this.newMinutes = new Date().getMinutes();
    }

    this.state = {
      time: new Date(new Date().setHours(this.newHours, this.newMinutes))
    };
  }
  componentDidMount() {
    this.update = setInterval(() => {
      this.setState({
        time: new Date(new Date().setHours(this.newHours, this.newMinutes))
      });
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
