import React from "react";
import ReactDOM from "react-dom";

export class UserItem extends React.Component {
  dismiss(name) {
    this.props.list.users = this.props.list.users.filter(element => {
      return element.name !== this.props.name;
    });
    this.props.list.forceUpdate();
    console.log(this.props.list);
  }
  render() {
    return (
      <>
        <button onClick={() => this.dismiss()}>Remove {this.props.name}</button>
      </>
    );
  }
}
