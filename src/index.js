import React from "react";
import ReactDOM from "react-dom";

class Box extends React.Component {

  getType = () => {
    switch (this.props.type) {
      case "red":
        return "danger";
      case "orange":
        return "warning";
      default:
        return "primary";
    }
  }

  render() {
    console.log(this.props);

    if (this.props.hide === true) {
      return null;
    }

    const type = this.getType();
    
    return (
      <div className={`alert alert-${type}`} role="alert">
        {this.props.message}
      </div>
    );
  }
};

// Do not edit below this line
const myApplication = <React.Fragment>
  <Box type="blue" message="Blue box" />
  <Box type="red" message="Red box" />
  <Box type="orange" message="Orange box" />
  <Box hide type="red" message="Hidden box" />
</React.Fragment>;
const element = document.getElementById("target");

ReactDOM.render(myApplication, element);
