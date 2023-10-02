import React, { useState } from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';


const HomeRoute = () => {

  // GLOBAL FAVOURITES STATE ARRAY
  // This hook basically mutates an array called `globalFavouritePhotosList`
  // (This array does not have a direct handle. It is mutated using the hook's
  // getters and setters). All favourited photos are tracked here.
  const [favourites, setFavourites] = useState([]);


  // This function checks if any favourites exist in the Global Favourites State
  // Array. If it does, it returns `true`, otherwise `false`;
  const hasFavourites = () => (favourites.length > 0) ? true : false;


  // `Console.log()` STATEMENTS MAY NOT PROPERLY SHOW HOOK DATA UNTIL AFTER RE-RENDER (???)
  //
  // Note: React is counter intuitive in some ways. If you change the state in
  // a function and IMMEDIATELY try to print out the array, that (probably)
  // won't work. The state is NOT immediately changed. Neither does it seem to
  // work at the bottom of the function. So, it's better to put the
  // `console.log()` statement outside the function where it will get
  // triggered on re-render (and towards the top of the page ???).
  // console.log(favourites);
  // console.log(hasFavourites());


  // UPDATE THE GLOBAL FAVOURITES STATE ARRAY
  //
  // This function gets triggered when a photo is favourited or unfavourited.
  // It takes in a `photoId` value. If the photo id found in the Global
  // Favourites State Array, it gets deleted. If it is NOT found, it gets added.
  const updateGlobalFavouritesList = function(photoId) {

    // Check if the Favourites State Array contains the given photo...
    if (!favourites.includes(photoId)) {

      // CORRECTLY MUTATING A STATE ARRAY
      //
      // A state array cannot be directly mutated because that could lead to
      // data loss or corruption. So you cannot do `setFavourites(favourites)`
      // That will not work in React. Instead, you have to first create a copy
      // of the array, mutate that and use `setFavourites(favouritesCopy)` to
      // point to the new array.
      //
      // If the state array does not contain a photo ID, create a copy of the
      // array, add `favourites` to the new array via the spread (...) operator,
      // as well as the photo ID you want to add. Then update the state Array
      // with `setFavourites()`.
      const favouritesCopy = [...favourites, photoId];
      setFavourites(favouritesCopy);

    } else {

      // If the Photo Id is found in the State Array, it must be removed. Create
      // a copy of the array, and filter out the `photoId` value. This should
      // leave an array with all values but the `photoId` value. Be aware that
      // `filter` mutates the array. You will need store the results in another
      // variable name (or the same one as done below).
      let favouritesCopy = [...favourites];
      favouritesCopy = favouritesCopy.filter(photoKey => photoKey !== photoId);
      setFavourites(favouritesCopy);

      // Do NOT put `console.log()` statements within the function; put them
      // outside it. See the note before this function.
      // console.log(favourites);

    }

  };


  return (

    <div className="home-route">
      <TopNavigationBar hasFavourites={hasFavourites} />
      <PhotoList updateGlobalFavouritesList={updateGlobalFavouritesList} />
    </div>

  );

};



export default HomeRoute;
