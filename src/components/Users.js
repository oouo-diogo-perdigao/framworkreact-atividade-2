import React from "react";
import { Link } from "react-router-dom";

export class Users extends React.Component {
  constructor(props) {
    super(props);
    this.users = [
      {
        name: "Diogo",
        email: "diogoEmail",
        age: "26"
      },
      {
        name: "Gabriel",
        email: "GabrielEmail",
        age: "16"
      },
      {
        name: "Fabiana",
        email: "FabianaEmail",
        age: "19"
      }
    ];
  }
  render() {
    return (
      <>
        Lista de Usuários
        {this.users.map(element => {
          return (
            <div>
              <Link to={`/user/${element.name}`}>{element.name}</Link>
            </div>
          );
        })}
      </>
    );
  }
}
