import React from "react";
import { Link } from "react-router-dom";
import { UserItem } from "./UserItem";
import usersFile from "./../json/userCopy.json";

export class UsersTable extends React.Component {
  constructor(props) {
    super(props);

    this.users = usersFile;
  }

  render() {
    return (
      <>
        <h1>Lista de Usuários</h1>
        <table>
          <thead>
            <tr>
              <td>Nome</td>
              <td>Email</td>
              <td>Idade</td>
              <td>Remover</td>
            </tr>
          </thead>
          <tbody>
            {this.users.map(element => {
              return (
                <tr key={element.name}>
                  <td>
                    <Link to={`/user/${element.name}`}>{element.name}</Link>
                  </td>
                  <td>{element.email}</td>
                  <td>{element.age}</td>
                  <td>
                    <UserItem name={element.name} list={this}></UserItem>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
