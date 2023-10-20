import React, { useEffect, useState } from 'react';
import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';



const PhotoFavButton = function(props) {

  // EXTRACT VALUES FROM PROPS
  const {
    favouritePhotosList,
    photoId,
    updateGlobalFavouritesList
  } = props;

  // console.log(favouritePhotosList);


  // PRE-`useApplicationData` WAY OF MANAGING FAVOURITES

  // LESSON LEARNED: THE KEY IS NOT A PROP AND CANNOT BE USED IN YOUR CODE
  //
  // const key = props.key;
  //
  // Note: If you try to obtain the `key` value as shown above and use it in
  // your code, you will get this error:
  //
  //     Warning: FileName: `key` is not a prop. Trying to access it will
  //     result in `undefined` being returned. If you need to access the same
  //     value within the child component, you should pass it as a different
  //     prop.
  //
  // The `key` is used internally by React to keep track of the elements in a
  // data source. If you try to access its value and use it in your code, you
  // will get a value of `undefined`. I tried to use the `key` (photoId) value
  // in a component chain that passed through 4-5 components. It took hours and
  // a mentor call to figure out why the `photoId` value was `undefined`.


  // A USESTATE HOOK TO HANDLE CLICKS ON THE FAVOURITE BUTTON
  const [isFavouritedPhoto, setIsFavouritedPhoto] = useState(false);


  // Whenever the user favourites a photo, it updates the Global Favourites
  // List. This should affect the status of `isFavouritedPhoto`, so that we
  // can control the appearance of Favourite button. So, we'll use this
  // `useEffect()` hook to update `isFavouritedPhoto` whenever the Global
  // Favourites List is updated.
  useEffect(() => {

    // For each image, query the Global Favourites List and check if it is on
    // the list. If so, set `isFavouritedPhoto` to `true`, else `false`.
    setIsFavouritedPhoto(favouritePhotosList.includes(photoId) ? true : false);

  }, [favouritePhotosList]);


  // FAVOURITE BUTTON CLICK EVENT HANDLER
  //
  // This click handler will respond to clicks on the `Favourite` button in an
  // image by switching its status.
  const handleFavouriteButtonClick = function() {

    // Call the function that updates the global favourites list so that
    // this information can be used app-wide. If the photo is NOT on the list,
    // it will be added to it, and if it is on the list, it will be removed.
    updateGlobalFavouritesList(photoId);

  };


  return (

    // THE FAVOURITE BUTTON
    <div className="photo-list__fav-icon" onClick={handleFavouriteButtonClick}>

      {/* Styling for the Heart Icon. */}
      <div className="photo-list__fav-icon-svg">

        <FavBadge
          // NOT IMPLEMENTED
          // displayAlert={}
          selected={isFavouritedPhoto}
        />

      </div>

    </div>
  );

};


export default PhotoFavButton;