import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import { FcBusinessContact, FcBusinessman, FcBusiness } from "react-icons/fc";
import ShowValue from "./ShowValue";
import img from './images/3480b84a4c2309c13ca4bcd84622dfa1.jpg'
import SearchBox from "./Searchbox";

const App = () => {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(1001);
  useEffect(() => {
    axios
      .get(
        `https://5af3613e-8706-4638-b7a2-7ff4cfb29a75.mock.pstmn.io/users/${id}`
      )
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  }, [id]);
  const searchHandler = (val) =>{
    setId(val)
  }
  return (
    <article className="profile-card">
      <header className="profile-card-header">
      <SearchBox event={searchHandler}/>
        <img className="profile-img" src={img} alt="profile-img" />
        <h1 className="profile-name">
          <ShowValue
            icon={<FcBusinessman />}
            label="Name: "
            value={users.name}
            classes="getted-value-title"
          />
        </h1>
      </header>
      <article className="profile-card-body">
        <ul className="profile-inf">
          <li className="item-inf">
            <ShowValue
              icon={<FcBusinessContact />}
              label="Fullname: "
              value={users.name + " " + users.family} classes="value"
            />
          </li>
          <li className="item-inf">
            <ShowValue
              icon={<FcBusinessman />}
              label="Age: "
              value={users.age} classes="value"
            />
          </li>
          <li className="item-inf">
            <ShowValue icon={<FcBusiness />} label="Job: " value={users.job} classes="value" />
          </li>
        </ul>
      </article>
    </article>
  );
};
export default App;
