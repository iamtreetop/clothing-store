import { 
  firestore, 
  convertCollectionsSnapshotToMap 
} from '../../firebase/firebase.utils';

export const FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START';
export const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS';
export const FETCH_COLLECTIONS_FAILURE = 'FETCH_COLLECTIONS_FAILURE';

export const fetchCollectionsStart = () => {
  return ({
    type: FETCH_COLLECTIONS_START,
  })
};

export const fetchCollectionsSuccess = (collectionsMap) => {
  // debugger
  return ({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
  })
};

export const fetchCollectionsFailure = (errorMessage) => {
  // debugger
  return ({
    type: FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
  })
};

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};