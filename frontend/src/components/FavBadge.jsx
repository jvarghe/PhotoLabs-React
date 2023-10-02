import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ hasFavourites }) => {

  return (
    <div className='fav-badge'>

      {/* The Fav Icon is expecting actual (boolean) values, so I'm invoking
          the `hasFavourites` function references here, so that they pass in the
          values to the props in `FavIcon.jsx`.
      */}
      <FavIcon
        displayAlert={hasFavourites()}
        selected={hasFavourites()}
      />

    </div>
  );

};

export default FavBadge;