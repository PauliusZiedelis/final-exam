import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  useEffect(() => {
    axios.get("http://localhost:3003/users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, [lastUpdate]);

  const editUser = (id) => {
    let ed;
    if (edit.includes(id)) {

      ed = [];
    } else {
      ed = [id];
    }

    setEdit(ed);
  };
  const deleteUser = () => {};
  return (
    <div className="">
      <h2>Users</h2>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">role</th>
            <th scope="col">session</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <th scope="row">
                {user.id}
              </th>
              <th scope="row">
                {edit.includes(user.id) ? (
                  <input placeholder={user.name}></input>
                ) : (
                  user.name
                )}
              </th>
              <th scope="row">
                {edit.includes(user.id) ? (
                  <input placeholder={user.role}></input>
                ) : (
                  user.role
                )}
              </th>
              <th scope="row">
                {edit.includes(user.id) ? (
                  <input placeholder={user.session}></input>
                ) : (
                  user.session
                )}
              </th>
              <th scope="row">
                {edit.includes(user.id) ? (
                  <input placeholder={user.session}></input>
                ) : (
                  user.session
                )}
              </th>
              <td>
                <div>
                  <button
                    onClick={() => editUser(user.id)}
                    type="button"
                    className={
                      edit.includes(user.id)
                        ? "btn btn-success"
                        : "btn btn-warning mr-2"
                    }
                  >
                    {edit.includes(user.id) ? "Save" : "Edit"}
                  </button>
                  <button
                    onClick={() => deleteUser(user.id)}
                    type="button"
                    className="btn btn-danger mr-2"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
