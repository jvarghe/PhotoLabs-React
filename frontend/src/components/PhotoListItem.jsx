import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


// Returns a `PhotoListItem`.
const PhotoListItem = (props) => {

  // Extract photo data from props.
  const photoData = props.photoData;
  const key = props.key;


  return (

    <section className="photo-list__item">

      <PhotoFavButton />

      <img className="photo-list__image" src={photoData.urls.regular} />


      <div className="photo-list__user-details">

        <img className="photo-list__user-profile" src={photoData.user.profile} />


        <div className="photo-list__user-info">
          <p className="photo-list__user-name">{photoData.user.username}</p>
          <p className="photo-list__user-location">{photoData.location.city}, {photoData.location.country}</p>
        </div>

      </div>

    </section>

  );

};


export default PhotoListItem;
