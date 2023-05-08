import React, { Fragment } from "react";
import Profile from "../Profile/index";
import { IProfile } from "../Profile/type";

export default function Gallery() {
  const getData = (): Array<IProfile> => [
    {
      src: "https://i.imgur.com/MK3eW3As.jpg",
      name: "Cyan",
      age: 19,
      gender: "female",
    },
    {
      src: "https://i.imgur.com/MK3eW3As.jpg",
      name: "Blue",
      age: 20,
      gender: "male",
    },
    {
      src: "https://i.imgur.com/MK3eW3As.jpg",
      name: "Red",
      age: 30,
      gender: "male",
    },
  ];
  const data = getData();

  const renderProfiles = (user: IProfile, index: number) => (
    <Profile
      key={index}
      src={user.src}
      name={user.name}
      age={user.age}
      gender={user.gender}
    />
  );

  return (
    <div>
      Gallery
      <br />
    
      {data.map(renderProfiles)}
    </div>
  );
}
