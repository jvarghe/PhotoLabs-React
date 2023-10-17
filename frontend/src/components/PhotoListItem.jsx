import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


// Returns a `PhotoListItem`.
const PhotoListItem = (props) => {

  // EXTRACT VALUES FROM PROPS
  const { id, urls, user, location, } = props.photo;

 
  // On line 10, we destructured some useful information, but when the image
  // is clicked, we need to send all the data to the modal, so a new variable
  // is being created.
  const photoData = props.photo;

  const updateGlobalFavouritesList = props.updateGlobalFavouritesList;
  const handlePhotoClick = props.handlePhotoClick;


  // You can use log statements in React, but NOT inside the `return` statement.
  // console.log(`PhotoListItem: ${id}`);
  // console.log(photoData);


  return (

    <section className="photo-list__item">

      <PhotoFavButton
        photoId={id}
        updateGlobalFavouritesList={updateGlobalFavouritesList}
      />

      <img className="photo-list__image"
        src={urls.regular}
        onClick={() => handlePhotoClick(photoData)}
      />


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
