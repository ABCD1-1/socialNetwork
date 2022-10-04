import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import LeftNav from "../components/LeftNav";
import NewPostForm from "../components/Post/NewPostForm";
import Thread from "../components/Thread";
import Login from "../components/Login";
import Trends from "../components/Trends";
// import Trends from "../components/Trends";
// import FriendsHint from "../components/Profil/FriendsHint";

const Home = () => {
  const uid = useContext(UidContext);

  return (
    <div className="home">
      <LeftNav />
      <div className="main">
        <div className="home-header">
        {/* <Login signin={true} signup={false} /> */}
        {uid ? <NewPostForm /> : <Login signin={true} signup={false} />}
        </div>
        <Thread />
      </div>
      <div className="right-side">
        <div className="right-side-container">
          <div className="wrapper">
            <Trends />
            {/* {uid && <FriendsHint />} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
