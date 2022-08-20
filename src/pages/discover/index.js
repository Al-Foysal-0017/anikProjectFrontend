import React from "react";
import Container from "../../components/container/Container";
import "./discover.css";
import img1 from "../../images/16.jpg";
import img2 from "../../images/12.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const data = [
  {
    img: img1,
    name: "Coxs Bazer",
    desc: "This is a good place. Everyone should visit this place. This is a good place. Everyone should visit this place.",
  },
  {
    img: img2,
    name: "National Museum",
    desc: "This is a good place. Everyone should visit this place. This is a good place. Everyone should visit this place.",
  },
  {
    img: "",
    name: "Kuakata",
    desc: "This is a good place. Everyone should visit this place. This is a good place. Everyone should visit this place.",
  },
  {
    img: "",
    name: "MujibNagar",
    desc: "This is a good place. Everyone should visit this place. This is a good place. Everyone should visit this place.",
  },
  {
    img: "",
    name: "Sajek",
    desc: "This is a good place. Everyone should visit this place. This is a good place. Everyone should visit this place.",
  },
  {
    img: img2,
    name: "Bogalake",
    desc: "This is a good place. Everyone should visit this place. This is a good place. Everyone should visit this place.",
  },
  {
    img: "",
    name: "Sunamganj",
    desc: "This is a good place. Everyone should visit this place. This is a good place. Everyone should visit this place.",
  },
  {
    img: "",
    name: "Sunamganj",
    desc: "This is a good place. Everyone should visit this place. This is a good place. Everyone should visit this place.",
  },
];

const Discover = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <Container>
      <div className="cardContainer">
        {data.map((item, index) => (
          <div key={index} className="card">
            <div className="card_left">
              <img className="cardImg" src={item?.img} alt="" />
            </div>
            <div className="card_right">
              <div className="cardTitle">{item.name}</div>
              <div className="cardSubitle">{item.desc}</div>
              <div style={{ display: "flex" }}>
                <div>
                  <button className="cardBtn">Details</button>
                </div>
                <div>
                  {user ? (
                    <button className="cardBtn">
                      <Link style={{ color: "#fff" }} to="/booking">
                        Booking
                      </Link>
                    </button>
                  ) : (
                    <button className="cardBtn">
                      <Link style={{ color: "#fff" }} to="/login">
                        Booking
                      </Link>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Discover;
