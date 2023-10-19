import React from 'react';
import PhotoFavButton from './PhotoFavButton';


// This component was created instead of re-using `PhotoList` or `PhotoListItem`
// again in `PhotoDetailsModal` because it is subtly different from
// `PhotoListItem`. I spent all night trying to modify the latter but ran into
// too many unexpected problems, so I created this component instead.
export default function ModalMainImage(props) {

  // EXTRACT VALUES FROM PROPS
  const photoData = props.photoData;
  const updateGlobalFavouritesList = props.updateGlobalFavouritesList;

  // console.log("ModalMainImage: ", photoData);


  return (

    <section className="photo-list__item">

      {/* THE FAVOURITE ICON  */}
      <PhotoFavButton
        photoId={photoData.id}
        updateGlobalFavouritesList={updateGlobalFavouritesList}
      />


      {/* THE PRIMARY IMAGE */}
      <img
        className="photo-details-modal__image"
        src={photoData.urls.full}
      />


      {/* THE CONTAINER FOR THE PHOTOGRAPHER'S DETAILS */}
      <div className="photo-details-modal__photographer-details">

        {/* Photographer profile image. */}
        <img
          className="photo-details-modal__photographer-profile"
          src={photoData.user.profile}
        />

        {/* Photographer Name & Location. */}
        <div className="photo-details-modal__photographer-info">

          <p className="photo-details-modal__photographer-info">
            {photoData.user.username}
          </p>

          <p className="photo-details-modal__photographer-location">
            {photoData.location.city}, {photoData.location.country}
          </p>

        </div>

      </div>

    </section>

  );
}
