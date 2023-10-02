import React from 'react';


/** THE FAVICON COLOUR SWITCHER
 *
 * This function takes in a (destructured) object with two properties,
 * `displayAlert` and `selected`.
 *
 * `selected` determines if the FavIcon is filled with red colour or empty. It
 * takes boolean values.
 *
 * `displayAlert`: its not clear what it does. But it does display a small red-
 * yellow circle in the corner of the FavIcon heart.
 *
 */
const FavIcon = ({ displayAlert, selected }) => {

  return (

    // This creates a small heart image in the top-right of the
    // `TopNavigationBar`. The heart has a small circle in the top-right corner.
    // It appears that if any photo is favourited, the heart will turn from a
    // red border to fully red. I'm not sure what the little circle is supposed
    // to do, but it does have a red border and yellow fill. The red circle is
    // probably supposed to turn on when more than one favourite item is
    // selected.
    <svg width="20" height="17" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">


      {/* The code for the heart. */}
      <path
        fill={selected ? "#C80000" : "#EEEEEE"}
        d="M11 18C11 18 1 12.5909 1 6.02273C1 4.8616 1.41649 3.73633 2.17862 2.83838C2.94075 1.94043 4.00143 1.32526 5.1802 1.09755C6.35897 0.869829 7.58301 1.04363 8.64406 1.58938C9.70512 2.13512 10.5376 3.0191 11 4.09092C11.4624 3.0191 12.2949 2.13512 13.3559 1.58938C14.417 1.04363 15.641 0.869829 16.8198 1.09755C17.9986 1.32526 19.0593 1.94043 19.8214 2.83838C20.5835 3.73633 21 4.8616 21 6.02273C21 12.5909 11 18 11 18Z"
        stroke="#C80000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />


      {/* The code for the little circle. */}
      {
        !!displayAlert &&
        <circle
          cx="21"
          cy="4"
          r="2.75"
          fill="#FFFF00"
          stroke="#C80000"
          strokeWidth="0.5"
        />
      }

    </svg>
  );

};

export default FavIcon;
