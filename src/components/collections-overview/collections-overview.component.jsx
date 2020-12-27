import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

const CollectionOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(({id, ...otherCollectionProps}) => {
        return (
          <CollectionPreview key={id} {...otherCollectionProps} />
        )
      })}
    </div>
  )
}

const mapSTP = createStructuredSelector({
  collections: selectCollectionsForPreview
});

// const mapSTP = (state) => {
//   return ({
//     collections: selectCollections(state)
//   })
// };

export default connect(mapSTP)(CollectionOverview);