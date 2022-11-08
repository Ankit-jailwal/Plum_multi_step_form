import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";

const userData = [
  { name: "I hereby declare that none of the proposed members are habitual consumers of alcohol, tobacco, gutka or any recreational drugs." },
  { name: "I hereby declare that all proposed members are in good health and entirely free from any mental pf physical impairements or deformities, disease/condition." },
  { name: "I have understood that there is 30 days waiting period for all diseases and 2 years on named ailments. (list of named ailements)" },
  { name: "I understand that this policy doesn't cover Pre-existing diseases." },
];

function Declaration() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      setUsers(userData);
    }, []);
  
    const handleChange = (e) => {
      const { name, checked } = e.target;
      if (name === "allSelect") {
        let tempUser = users.map((user) => {
          return { ...user, isChecked: checked };
        });
        setUsers(tempUser);
      } else {
        let tempUser = users.map((user) =>
          user.name === name ? { ...user, isChecked: checked } : user
        );
        setUsers(tempUser);
      }
    };
  
    return (
      <div className="container my-4" style={{ width: "500px" }}>
        <form className="form w-100">
          <h3>Select Users</h3>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="allSelect"
              // checked={
              //   users.filter((user) => user?.isChecked !== true).length < 1
              // }
              checked={!users.some((user) => user?.isChecked !== true)}
              onChange={handleChange}
            />
            <label className="form-check-label ms-2">All Select</label>
          </div>
          {users.map((user, index) => (
            <div className="form-check" key={index}>
              <input
                type="checkbox"
                className="form-check-input"
                name={user.name}
                checked={user?.isChecked || false}
                onChange={handleChange}
              />
              <label className="form-check-label ms-2">{user.name}</label>
            </div>
          ))}
        </form>
      </div>
    );
  }
  
  export default Declaration;
