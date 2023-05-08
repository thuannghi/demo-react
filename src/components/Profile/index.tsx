import React from "react";
import { IProfile } from "./type";

function Profile(props: IProfile) {
  return (
    <div>
      <img src={props.src} alt="Katherine Johnson" />
      <p>{`${props.name}`}</p>
      <p>{props.age}</p>
      <p>{props.gender}</p>
      <button></button>
    </div>
  );
}

export default Profile;
