import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


// Returns a `PhotoListItem`.
const PhotoListItem = (props) => {

  // EXTRACT VALUES FROM PROPS
  const { id, urls, user, location } = props.photo;
  const updateGlobalFavouritesList = props.updateGlobalFavouritesList;


  // You can use log statements in React, but NOT inside the `return` statement.
  // console.log(`PhotoListItem: ${id}`);


  return (

    <section className="photo-list__item">

      <PhotoFavButton
        key={id}
        photoId={id}
        updateGlobalFavouritesList={updateGlobalFavouritesList}
      />

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
