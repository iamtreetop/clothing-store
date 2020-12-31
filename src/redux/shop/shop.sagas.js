import { takeLatest, call, put, all } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
  FETCH_COLLECTIONS_START
} from './shop.actions';

export function* fetchCollectionsAsync() {
  yield console.log("i am fired");

  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
    // collectionRef
    //   .get()
    //   .then(snapshot => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     dispatch(fetchCollectionsSuccess(collectionsMap));
    //   })
    //   .catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    FETCH_COLLECTIONS_START,
    fetchCollectionsAsync 
  );
};

export function* shopSagas() {
  yield all([
    call(fetchCollectionsStart)
  ]);
};