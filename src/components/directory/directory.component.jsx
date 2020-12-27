import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({id, ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  )
}

const mapSTP = createStructuredSelector({
  sections: selectDirectorySections
});

// const mapSTP = (state) => {
//   return ({
//     sections: selectDirectory(state)
//   })
// };

export default connect(mapSTP)(Directory);