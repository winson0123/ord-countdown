import React from "react";
import "./countdown.css"

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    const end_date = new Date(Date.parse(this.props.date));
    const remaining_time = Math.max(end_date - new Date(), 0);
    this.state = {
      end_date,
      remaining_time,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  componentDidUpdate(prevProps) {
    // Check if the date prop has changed
    if (this.props.date !== prevProps.date) {
      // Recalculate the remaining time
      const end_date = new Date(Date.parse(this.props.date));
      const remaining_time = Math.max(end_date - new Date(), 0);
      this.setState({ end_date, remaining_time });
    }
 }

 tick() {
  const remaining_time = Math.max(this.state.end_date - new Date(), 0); // Ensure remaining_time is not negative
  this.setState({ remaining_time });
}

  render() {
    const { remaining_time } = this.state;
    const days = Math.floor(remaining_time / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remaining_time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remaining_time % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remaining_time % (1000 * 60)) / 1000);

    return (
      <div class="countdown">
        <div class="countdown__num countdown__days">
          <span>{days}</span>
          <p class="countdown__label">Days</p>
        </div>

        <div class="countdown__num countdown__hours">
          <span>{hours}</span>
          <p class="countdown__label">Hours</p>
        </div>

        <div class="countdown__num countdown__minutes">
          <span>{minutes}</span>
          <p class="countdown__label">Minutes</p>
        </div>

        <div class="countdown__num countdown__seconds">
          <span>{seconds}</span>
          <p class="countdown__label">Seconds</p>
        </div>
      </div>
    );
  }
}

export default Countdown;
