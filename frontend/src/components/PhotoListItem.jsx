import React from "react";
import "../styles/PhotoListItem.scss";


// Returns a `PhotoListItem`.
const PhotoListItem = (props) => {

  // Extract photo data from props.
  const photoData = props.photoData;
  let key = props.key;

  return (


    <section className="photo-list__item">

      <img className="photo-list__image" src={photoData.imageSource} />


      <div className="photo-list__user-details">

        <img className="photo-list__user-profile" src={photoData.profile} />


        <div className="photo-list__user-info">
          <p className="photo-list__user-name">{photoData.username}</p>
          <p className="photo-list__user-location">{photoData.location.city}, {photoData.location.country}</p>
        </div>

      </div>


    </section>



  );

};

export default PhotoListItem;
