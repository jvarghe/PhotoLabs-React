import React, { useState } from 'react';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';



const PhotoFavButton = function(props) {

  // EXTRACT VALUES FROM PROPS
  const { photoId } = props;

  // A reference to a function in `HomeRoute.jsx` that will manage a list of
  // global favourite photos.
  const updateGlobalFavouritesList = props.updateGlobalFavouritesList;


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
  const [isFavourite, setIsFavourite] = useState(false);


  // FAVOURITE BUTTON CLICK EVENT HANDLER
  //
  // This click handler will respond to clicks on the `Favourite` button in an
  // image by switching its status.
  const handleFavouriteButtonClick = function() {

    // Update local favourite state; this will let you set change the status
    // of the favourite icon (`FavIcon`: full or empty).
    isFavourite === false ? setIsFavourite(true) : setIsFavourite(false);
    // Alternate: setIsFavourite(!setIsFavourite);


    // Once that's done, you should update the global favourites list so that
    // this information can be used site-wide.
    updateGlobalFavouritesList(photoId);

  };


  return (

    // Favourite Button
    <div onClick={() => handleFavouriteButtonClick()} className="photo-list__fav-icon">

      {/* Styling for the Heart Icon. */}
      <div className="photo-list__fav-icon-svg">


        {/* If the Photo has NOT been Favourited, AND the button is clicked... */}
        {isFavourite === false && <FavIcon selected={false} />}

        {/* If the Photo HAS been Favourited, AND the button is clicked... */}
        {isFavourite === true && <FavIcon selected={true} />}


      </div>

    </div>
  );

};


export default PhotoFavButton;