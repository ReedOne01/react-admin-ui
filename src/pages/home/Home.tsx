import "./home.scss";
// import Image from "react-dom";

import { topDealUsers } from "../../data";
import Charts from "../../components/charts/Charts";

const Home = () => {
  return (
    <div className="homeContainer">
      <span className="box box1">
        {topDealUsers.map((user) => (
          <div className="cont" key={user.id}>
            <div className="left">
              <img src={user.img} alt="" className="photo" />
              <div className="userDetails">
                <span className="name">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <div className="right">${user.amount}</div>
          </div>
        ))}
      </span>
      <span className="box box2">
        <Charts />
      </span>
      <span className="box box3">
        <Charts />
      </span>
      <span className="box box4">box4</span>
      <span className="box box5">
        <Charts />
      </span>
      <span className="box box6">
        <Charts />
      </span>
      <span className="box box7">box7</span>
      <span className="box box8">box8</span>
      <span className="box box9">box9</span>
    </div>
  );
};

export default Home;
