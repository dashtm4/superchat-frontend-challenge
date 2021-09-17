import { all } from 'redux-saga/effects';
import {
  activatePromoCodeWatcher,
  fetchServicesWatcher,
} from './serviceSaga'

export default function * rootSaga () {
  yield all([
    activatePromoCodeWatcher(),
    fetchServicesWatcher(),
  ]);
};
