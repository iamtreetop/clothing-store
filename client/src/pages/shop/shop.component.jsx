import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
// import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import Spinner from '../../components/spinner/spinner.component';

import { ShopPageContainer } from './shop.styles';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);

const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);

const ShopPage = ({ fetchCollectionsStart, match }) => {

  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])

  return (
    <ShopPageContainer>
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </ShopPageContainer>
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