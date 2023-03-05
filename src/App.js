import { useState, useEffect } from "react";
import "./App.css";
import email from "./assets/email.svg";
import location from "./assets/location.svg";
import phone from "./assets/phone.svg";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState([]);

  const fetchUserData = async () => {
    const url = "https://randomuser.me/api/";
    const res = await axios.get(url);
    setUserData(res?.data?.results[0]);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="App">
      <div className="containerCardButton">
        <div className="randomContainer">
          <div className="userHeader">
            <img
              src={userData?.picture?.thumbnail}
              alt={userData?.name?.first}
              className="picture"
            />
            <h2>
              {userData?.name?.title}. {userData?.name?.first}{" "}
              {userData?.name?.last}
            </h2>
          </div>
          <div className="userDetails">
            <div className="detail">
              <img className="icon" src={email} alt="details" />
              <p> {userData?.email}</p>
            </div>
            <div className="detail">
              <img className="icon" src={phone} />
              <p>{userData?.phone}</p>
            </div>
            <div className="detail">
              <img className="icon" src={location} />
              <p>
                {userData?.location?.city} - {userData?.location?.country}
              </p>
            </div>
          </div>
          <div className="bottom">
            <p>Age: {userData?.dob?.age}</p>
            <p>Register Date: {userData?.registered?.date.slice(0, 10)}</p>
          </div>
        </div>
        <button onClick={fetchUserData}>Random User</button>
      </div>
    </div>
  );
}

export default App;
