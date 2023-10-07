// IMPORTS
import { useState } from "react";


const useApplicationData = function() {


  // USESTATE HOOK FOR HOLDING PHOTO DATA
  // (Passed in from `PhotoListItem` when the user clicks an image.)
  const [selectedPhoto, setSelectedPhoto] = useState(null);


  // USESTATE HOOK FOR `PHOTO DETAILS MODAL`
  // (Passed in from `PhotoListItem` when the user clicks an image.)
  const [isModalOpen, setIsModalOpen] = useState(false);


  // GLOBAL FAVOURITES STATE ARRAY
  // This hook basically mutates an array called `globalFavouritePhotosList`
  // (This array does not have a direct handle. It is mutated using the hook's
  // getters and setters). All favourited photos are tracked here.
  const [favouritePhotos, setFavouritePhotos] = useState([]);



  // PHOTO DETAILS MODAL FUNCTIONS:

  // This function closes the `PhotoDetailsModal` when the `X` is clicked.
  const handleModalClose = function() {

    // When the modal is closed, get rid of the existing photo data.
    setSelectedPhoto(null);

    // Set the modal status to closed.
    setIsModalOpen(false);

  };



  // PHOTO LIST ITEM FUNCTIONS:

  // This function opens `PhotoDetailsModal` when an image is clicked.
  const handlePhotoClick = function(photoData) {

    // Take data about the photo which was clicked and store it in the
    // `useState()` hook called `photoData`.
    setSelectedPhoto(photoData);

    // Then, set the state of `PhotoDataModal` open/close status to `true`.
    // When the page re-renders, this will open the sidepeek modal.
    setIsModalOpen(true);

  };



  // GLOBAL FAVOURITES STATE ARRAY FUNCTIONS:

  // This function checks if any favourites exist in the Global Favourites State
  // Array. If it does, it returns `true`, otherwise `false`;
  const hasFavouritePhotos = () => (favouritePhotos.length > 0) ? true : false;


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
    if (!favouritePhotos.includes(photoId)) {

      /* CORRECTLY MUTATING A STATE ARRAY/OBJECT
      *
      * A state array/object cannot be directly mutated because React only
      * monitors the reference—it won't notice its internals changing! And
      * because React only re-renders a component when it notices changes to
      * its state/props, the page's state will NOT be updated.
      *
      * So, while you can use `setFavourites(favourites)` to update the
      * `favourites` array, React will not be aware of the change or refresh
      * the page with the new information.
      *
      * Instead, the recommended way of updating a state array/object is to
      * first create a copy of the object and mutate it as you wish. Then,
      * you can point state object handle to the new object. This should
      * update the state object AND trigger a refresh of component/web page.
      *
      * In this situation, I will create a copy of the favourites array,
      * mutate that and use `setFavourites(favouritesCopy)` to point to the
      * new array.
      */

      // If the state array does not contain a photo ID, create a copy of the
      // array, add `favourites` to the new array via the spread (...) operator,
      // as well as the photo ID you want to add. Then update the state Array
      // with `setFavourites()`.
      const favouritesCopy = [...favouritePhotos, photoId];
      setFavouritePhotos(favouritesCopy);

    } else {

      // If the Photo Id is found in the State Array, it must be removed. Create
      // a copy of the array, and filter out the `photoId` value. This should
      // leave an array with all values but the `photoId` value. Be aware that
      // `filter` mutates the array. You will need store the results in another
      // variable name (or the same one as done below).
      let favouritesCopy = [...favouritePhotos];
      favouritesCopy = favouritesCopy.filter(photoKey => photoKey !== photoId);
      setFavouritePhotos(favouritesCopy);

      // Do NOT put `console.log()` statements within the function; put them
      // outside it. See the note before this function.
      // console.log(favourites);

    }

  };


  // Return an object containing references to state values and function
  // references.
  return {

    // State Values
    selectedPhoto,
    isModalOpen,
    favouritePhotos,

    // Function References
    handleModalClose,
    handlePhotoClick,
    hasFavouritePhotos,
    updateGlobalFavouritesList

  };

};







export default useApplicationData;