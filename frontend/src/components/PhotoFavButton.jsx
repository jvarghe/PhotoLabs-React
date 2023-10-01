import React, { useCallback, useState } from 'react';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';



const PhotoFavButton = function() {

  // A USESTATE HOOK TO HANDLE CLICKS ON THE FAVOURITE BUTTON
  const [favStatus, setFavStatus] = useState("off");


  // This click handler will respond to clicks on the `Favourite` button by
  // switching its status.
  const handleFavClick = function() {

    favStatus === "off" ? setFavStatus("on") : setFavStatus("off");

  };


  return (

    // Favourite Button
    <div onClick={() => handleFavClick(console.log("Clicked!"))} className="photo-list__fav-icon">

      {/* Styling for the Heart Icon. */}
      <div className="photo-list__fav-icon-svg">


        {/* If the Photo has NOT been Favourited, AND the button is clicked... */}
        {favStatus === "off" && <FavIcon selected={false} />}

        {/* If the Photo HAS been Favourited, AND the button is clicked... */}
        {favStatus === "on" && <FavIcon selected={true} />}


      </div>

    </div>
  );

};


export default PhotoFavButton;