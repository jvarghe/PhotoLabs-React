import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ selected }) => {

  return (
    <div className='fav-badge'>

      <FavIcon
        // NOTE: `displayAlert` IS NOT IMPLEMENTED BECAUSE I'M NOT SURE WHAT
        // TO DO WITH THE LITTLE YELLOW CIRCLE.
        // displayAlert={ selected }
        selected={selected}
      />

    </div>
  );

};

export default FavBadge;