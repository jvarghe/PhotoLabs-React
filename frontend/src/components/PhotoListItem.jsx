import React from "react";
import "../styles/PhotoListItem.scss";


// Returns a `PhotoListItem`.
const PhotoListItem = (props) => {

  // Extract photo data from props.
  const photoData = props.photoData;
  let key = props.key;

  return (


    <section className="photo-list__item">

      <img src={photoData.imageSource} />
      <img src={photoData.profile} />

      <p> {photoData.username} </p>
      <p> {photoData.location.city}, {photoData.location.country} </p>

    </section>



  );

};

export default PhotoListItem;
