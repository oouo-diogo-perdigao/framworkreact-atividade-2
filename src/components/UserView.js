import React from "react";

export class UserView extends React.Component {
  componentDidMount() {
    document.title = this.props.match.params.name;
  }
  render() {
    return <>{<h1>User {this.props.match.params.name}</h1>}</>;
  }
}

// export const UserView = props => {
//   document.title = props.match.params.name;
//   return (
// 	<>
// 	  <h1>User {props.match.params.name}</h1>
// 	</>
//   );
// };
