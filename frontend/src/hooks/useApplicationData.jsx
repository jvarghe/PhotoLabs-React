// IMPORTS
import { useEffect, useReducer } from "react";

// `useApplicationData()`: A CUSTOM HOOK FOR MANAGING STATE DATA

// The core logic for the application Has been moved from `App.jsx` to this
// file. `App.jsx` was starting to get too big. This is a custom hook that
// contains much of the logic for the application. It exports an object
// containing references to both state variables and functions. `App.jsx`
// imports and uses this object within, greatly cleaning up that file. This
// allows you to put all your state management in a single file.
const useApplicationData = function() {


  // USESTATE HOOK FOR HOLDING PHOTO DATA
  // (Passed in from `PhotoListItem` when the user clicks an image.)
  // const [selectedPhoto, setSelectedPhoto] = useState(null);


  // USESTATE HOOK FOR `PHOTO DETAILS MODAL`
  // (Passed in from `PhotoListItem` when the user clicks an image.)
  // const [isModalOpen, setIsModalOpen] = useState(false);


  // GLOBAL FAVOURITES STATE ARRAY
  // This hook basically mutates an array called `globalFavouritePhotosList`
  // (This array does not have a direct handle. It is mutated using the hook's
  // getters and setters). All favourited photos are tracked here.
  // const [favouritePhotos, setFavouritePhotos] = useState([]);



  // USEREDUCER SECTION

  // This is an `ACTIONS` object that lists all the legal operations that
  // `reducer` function will take.
  const ACTIONS = {

    GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
    HANDLE_PHOTO_CLICK: "HANDLE_PHOTO_CLICK",
    HANDLE_MODAL_CLOSE: "HANDLE_MODAL_CLOSE",
    UPDATE_GLOBAL_FAVOURITES_LIST: "UPDATE_GLOBAL_FAVOURITES_LIST",
    SET_PHOTOS: "SET_PHOTOS",
    SET_TOPICS: "SET_TOPICS"

  };


  // This `reducer` function takes two variables declared in the `useReducer`
  // function, `state` and `action`. It checks the `action` object to see which
  // action to undertake, and will accordingly update the `state` object.
  const reducer = function(state, action) {

    // Fixing state BEFORE changes to state.
    // console.log("reducer() method triggered!:", action.type);

    // The `reducer` function will fall through cases, until it reaches the
    // appropriate one, then execute all defined actions.
    switch (action.type) {


    // When the user clicks on a topic in the navigation bar, this case will
    // set the current `topicId` to selected topic.
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        topicId: action.payload.topicId
      };


      // If the photo is clicked, copy the `state` variable into the `return`
      // object. Then, modify the `state` object's values.
      //
      // In this case, the selected photo's data is being loaded into the
      // property, and modal's status is being set to `true`.
    case ACTIONS.HANDLE_PHOTO_CLICK:
      return {
        ...state,
        selectedPhoto: action.payload.selectedPhoto,
        isModalOpen: action.payload.isModalOpen,
      };


      // When the Photo Details Modal is closed, the `selectedPhoto` is being
      // set to `null` and `isModalOpen` set to `false`.
    case ACTIONS.HANDLE_MODAL_CLOSE:
      return {
        ...state,
        selectedPhoto: action.payload.selectedPhoto,
        isModalOpen: action.payload.setIsModalOpen
      };


      // When the user clicks on the favourites button, it toggles back-and-forth
      // between favouriting and unfavouriting the photo.
    case ACTIONS.UPDATE_GLOBAL_FAVOURITES_LIST:

      // If the `favouritePhotos` array does NOT contain the clicked photo's Id,
      // (meaning that it is NOT a current favourite), add it to the favourites
      // list.
      //
      // Note: The if-statement logic is running outside the `return` block. You
      // tried to run it within and ran into so many problems.
      if (!state.favouritePhotos.includes(action.payload.photoId)) {

        // As the state is immutable and cannot be directly changed, create a
        // copy of the property you want to change (an array of ID values
        // denoting favourited photos). Then, push changes (the newly added
        // photo ID) to the array copy.
        const newFavourites = [...state.favouritePhotos];
        newFavourites.push(action.payload.photoId);

        // Finally, return an object with the state and set the `favouritePhotos`
        // property to the array copy.
        return {
          ...state,
          favouritePhotos: newFavourites
        };


        // If the photo ID DOES EXIST in the `favouritePhotos` array, filter it
        // out in the copied array and return the object.
      } else {

        const newFavourites = state.favouritePhotos.filter(photoKey => photoKey !== action.payload.photoId);

        return {
          ...state,
          favouritePhotos: newFavourites
        };

      }


      // This case handles the loading of the photo catalogue from the backend.
      // Note that `const photosCopy = [...state.photos];` is NOT being done here,
      // because it creates an array of arrays. The first sub-array is empty and
      // second contains the photo set. This broke the whole program. That took
      // me an hour to debug!
      //
      // Note: If you need to declare variables within a `case`, this is NOT
      // allowed by ESLint unless you wrap the whole contents in braces as shown
      // below. The error message: Unexpected lexical declaration in case block.
    case ACTIONS.SET_PHOTOS: {

      const photosCopy = action.payload.photos;

      return {
        ...state,
        photos: photosCopy
      };

    }


    // This case loads values into the `topics` state variable. If you want an
    // easier way of doing the same thing as `ACTIONS.SET_PHOTOS`, this is it.
    // (Load data into an immutable state variable.)
    case ACTIONS.SET_TOPICS: {

      return {
        ...state,
        topics: action.payload.topics
      };

    }


    // This is the default case and it will handle errors.
    default:
      throw new Error(
        `Tried to invoke unsupported action type: ${action.type}`
      );

    }

  };


  // `useReducer` REPLACES THE THREE `useState` HOOKS

  // This is the `useReducer()` state management hook. It returns `state` (the
  // variable on which you hang all the state variables) and `dispatch` (which
  // is a reference to the function that gets invoked in a component). The
  // default `state` variables and their initial values are declared below.
  //
  // Note: The `reducer` object must be passed in as a parameter first, followed
  // by the `state` object. This is sort of the reverse of the way the values
  // are destructured into an array.
  const [state, dispatch] = useReducer(reducer, {
    selectedPhoto: null,
    isModalOpen: false,
    favouritePhotos: [],

    // Photo and Topics feed being pulled from the app's backend.
    photos: [],
    topics: [],

    topicId: null

  });



  // USE REDUCER FUNCTIONS

  // This is a `reducer` function that responds to the clicks on photos.
  const handlePhotoClick = function(photoData) {

    // Photos can be clicked in the main page or within the `PhotoDetailsModal`.
    // If the click happens within the main page, this method will open the
    // modal. However, if photos are clicked within the modal, those clicks
    // should be ignored; that is what this conditional statement is checking
    // for.
    if (state.isModalOpen !== true) {

      dispatch({
        type: ACTIONS.HANDLE_PHOTO_CLICK,

        payload: {
          selectedPhoto: photoData,
          isModalOpen: true
        }

      });

    }

  };


  // This is a `reducer` function that responds to clicks on the `X` button that
  // closes `PhotoDetailsModal`.
  const handleModalClose = function() {

    dispatch({
      type: ACTIONS.HANDLE_MODAL_CLOSE,

      payload: {
        selectedPhoto: null,
        isModalOpen: false
      }

    });

  };


  // This function responds to clicks on the Topics List on `TopNavigationBar`.
  const handleTopicSelection = function(topicId) {

    dispatch({
      type: ACTIONS.GET_PHOTOS_BY_TOPICS,
      payload: {
        topicId: topicId
      }
    });

  };


  // This is a `reducer` function that toggles favourites. If the photo is
  // already favourited, it will be unfavourited and vice versa.
  const updateGlobalFavouritesList = function(photoId) {

    dispatch({
      type: ACTIONS.UPDATE_GLOBAL_FAVOURITES_LIST,

      payload: {
        favouritePhotos: photoId
      }

    });

  };


  // USEEFFECT FUNCTIONS
  // These functions are intended to control side effects in components.

  // This function fetches photos from `api/photos`.
  useEffect(() => {

    fetch("api/photos")
      .then(res => res.json())
      .then(data => {

        dispatch({
          type: ACTIONS.SET_PHOTOS,
          payload: {
            photos: data
          }
        });

      })
      .catch((error) => {
        console.error(" `api/photos` useEffect Error:", error);
      });

  }, []);


  // This function fetches topics from `api/topics`.
  useEffect(() => {

    fetch("api/topics")
      .then(res => res.json())
      .then(data => {

        dispatch({
          type: ACTIONS.SET_TOPICS,
          payload: {
            topics: data
          }
        });

      })
      .catch((error) => {
        console.error(" `api/topics` useEffect Error:", error);
      });

  }, []);


  // This function monitors `state.topicId` for changes. When it changes (when
  // a user clicks on a topic in the nav bar), the function queries the backend
  // for other photos in the same category. It returns an array of objects,
  // each object containing data on a photo. This is set to be the current
  // photo set, which should load all these photos in the App.
  useEffect(() => {

    if (state.topicId) {

      fetch(`api/topics/photos/${state.topicId}`)
        .then(res => res.json())
        .then(data => {


          dispatch({
            type: ACTIONS.SET_PHOTOS,
            payload: {
              photos: data
            }
          });

        })
        .catch((error) => {
          console.error(" `api/topics/photos/:topic_id` useEffect Error:", error);
        });

    }

  }, [state.topicId]);



  // USESTATE FUNCTIONS
  // (Deprecated in favour of `useReducer()` functions but left for reference.)


  // PHOTO DETAILS MODAL FUNCTIONS:

  // This function closes the `PhotoDetailsModal` when the `X` is clicked.
  // const handleModalClose = function() {

  //   // When the modal is closed, get rid of the existing photo data.
  //   setSelectedPhoto(null);

  //   // Set the modal status to closed.
  //   setIsModalOpen(false);

  // };



  // PHOTO LIST ITEM FUNCTIONS:

  // This function opens `PhotoDetailsModal` when an image is clicked.
  // const handlePhotoClick = function(photoData) {

  //   // Take data about the photo which was clicked and store it in the
  //   // `useState()` hook called `photoData`.
  //   setSelectedPhoto(photoData);

  //   // Then, set the state of `PhotoDataModal` open/close status to `true`.
  //   // When the page re-renders, this will open the sidepeek modal.


  //   setIsModalOpen(true); // UNDO THIS!!!

  // };



  // GLOBAL FAVOURITES STATE ARRAY FUNCTIONS:

  // This function checks if any favourites exist in the Global Favourites State
  // Array. If it does, it returns `true`, otherwise `false`;
  // const hasFavouritePhotos = () => (state.favouritePhotos.length > 0) ? true : false;


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


  // // UPDATE THE GLOBAL FAVOURITES STATE ARRAY
  // //
  // // This function gets triggered when a photo is favourited or unfavourited.
  // // It takes in a `photoId` value. If the photo id found in the Global
  // // Favourites State Array, it gets deleted. If it is NOT found, it gets added.

  // const updateGlobalFavouritesList = function(photoId) {

  //   // Check if the Favourites State Array contains the given photo...
  //   if (!favouritePhotos.includes(photoId)) {

  //     /* CORRECTLY MUTATING A STATE ARRAY/OBJECT
  //     *
  //     * A state array/object cannot be directly mutated because React only
  //     * monitors the reference—it won't notice its internals changing! And
  //     * because React only re-renders a component when it notices changes to
  //     * its state/props, the page's state will NOT be updated.
  //     *
  //     * So, while you can use `setFavourites(favourites)` to update the
  //     * `favourites` array, React will not be aware of the change or refresh
  //     * the page with the new information.
  //     *
  //     * Instead, the recommended way of updating a state array/object is to
  //     * first create a copy of the object and mutate it as you wish. Then,
  //     * you can point state object handle to the new object. This should
  //     * update the state object AND trigger a refresh of component/web page.
  //     *
  //     * In this situation, I will create a copy of the favourites array,
  //     * mutate that and use `setFavourites(favouritesCopy)` to point to the
  //     * new array.
  //     */

  //     // If the state array does not contain a photo ID, create a copy of the
  //     // array, add `favourites` to the new array via the spread (...) operator,
  //     // as well as the photo ID you want to add. Then update the state Array
  //     // with `setFavourites()`.
  //     const favouritesCopy = [...favouritePhotos, photoId];
  //     setFavouritePhotos(favouritesCopy);

  //   } else {

  //     // If the Photo Id is found in the State Array, it must be removed. Create
  //     // a copy of the array, and filter out the `photoId` value. This should
  //     // leave an array with all values but the `photoId` value. Be aware that
  //     // `filter` mutates the array. You will need store the results in another
  //     // variable name (or the same one as done below).
  //     let favouritesCopy = [...favouritePhotos];
  //     favouritesCopy = favouritesCopy.filter(photoKey => photoKey !== photoId);
  //     setFavouritePhotos(favouritesCopy);

  //     // Do NOT put `console.log()` statements within the function; put them
  //     // outside it. See the note before this function.
  //     // console.log(favourites);

  //   }

  // };


  // Tracking state AFTER changes to state.
  // console.log("state after update: ", state);

  // Return an object containing references to state values and function
  // references.
  return {

    // Don't return the `reducer` function, because you don't want to expose
    // it to the rest of the code. It should be encapsulated and only the state
    // should be exposed.
    // reducer,
    state,

    // USESTATE EXPORTS:

    // UseState State Values

    // Are deprecated. You don't want to pass state variables through out your
    // code. The whole point of using `useReducer` is to concentrate state
    // management in this custom hook (`useApplicationDAta.jsx`).
    // selectedPhoto,
    // isModalOpen,
    // favouritePhotos,

    // Function References
    handleModalClose,
    handlePhotoClick,
    handleTopicSelection,
    // Is unnecessary, because `hasFavouritePhotos` is being set to
    // `{state.favouritePhotos.length > 0} in `App.jsx`.
    // hasFavouritePhotos,
    updateGlobalFavouritesList

  };

};



export default useApplicationData;