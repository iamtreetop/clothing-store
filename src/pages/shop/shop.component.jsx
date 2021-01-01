import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
// import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// import WithSpinner from '../../components/with-spinner/with-spinner.component'

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';


// const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);


// class ShopPage extends React.Component {
const ShopPage = ({ fetchCollectionsStart, match }) => {

  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])

  return (
    <div className='shop-page'>
      <Route 
        exact path={`${match.path}`} 
        component={CollectionsOverviewContainer}
        // render={(props) => <CollectionOverviewWithSpinner isLoading={!isFetchingCollections} {...props} />} 
      />
      <Route 
        path={`${match.path}/:collectionId`} 
        // render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionloaded} {...props} />}
        component={CollectionPageContainer}
      />
    </div>
  );
};

// const mapSTP = createStructuredSelector({
//   isFetchingCollections: selectIsCollectionFetching,
//   isCollectionloaded: selectIsCollectionLoaded
// });

const mapDTP = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null, 
  mapDTP
)(ShopPage);