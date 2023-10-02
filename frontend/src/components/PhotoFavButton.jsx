import React, { useState } from 'react';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';



const PhotoFavButton = function() {

  // A USESTATE HOOK TO HANDLE CLICKS ON THE FAVOURITE BUTTON
  const [isFavourite, setIsFavourite] = useState(false);


  // This click handler will respond to clicks on the `Favourite` button by
  // switching its status.
  const handleFavouriteButtonClick = function() {

    isFavourite === false ? setIsFavourite(true) : setIsFavourite(false);

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