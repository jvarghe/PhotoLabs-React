import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


// Returns a `PhotoListItem`.
const PhotoListItem = (props) => {

  // Extract photo data from props.
  const { urls, user, location } = props.photoData;
  const key = props.key;


  return (

    <section className="photo-list__item" key={key}>

      <PhotoFavButton />

      <img className="photo-list__image" src={urls.regular} />


      <div className="photo-list__user-details">

        <img className="photo-list__user-profile" src={user.profile} />


        <div className="photo-list__user-info">
          <p className="photo-list__user-name">{user.username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>

      </div>

    </section>

  );

};


export default PhotoListItem;
