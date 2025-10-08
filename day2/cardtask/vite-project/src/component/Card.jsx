import React from "react";

function Card() {
  const user = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",

      name: "Sarah Williams",
      role: "Backend Developer",
      place: "New York ",
    },

    {
      id: 2,
      img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      name: "Jane Smith",
      role: "Market Analyst",
      place: "San Francisco",
    },
    {
      id: 3,
      img: "https://t4.ftcdn.net/jpg/03/66/43/96/360_F_366439688_Lk7z6kYpX9b2mW0b0Kc0g5vYk1pX8e2W.jpg",
      name: "Emily Johnson",
      role: "Product Manager",
      place: "Chicago",
    },
  ];

  return (
    <>
      <div className="container">
        {user.map((item) => {
          return (
            <div key={item.id} className="card">
              <img className="img" src={item.img} alt="" />
              <h2> {item.name}</h2>
              <p> {item.role}</p>
              <p> {item.place}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
