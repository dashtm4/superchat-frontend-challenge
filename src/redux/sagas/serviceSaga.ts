import { call, put, takeEvery } from 'redux-saga/effects'

import { fetchServices } from '@/service/services';
import actionTypes from '@/redux/actions'
import { IActivatePromoCode } from '@/redux/actions/types';

function * fetchServicesSaga () {
  try {
    const { data: {
      bonuses: services,
      header: status,
    } } = yield call(fetchServices);

    yield put({
      type: actionTypes.FETCH_SERVICES_SUCCEED,
      payload: {
        services,
        status,
      },
    });
  } catch (error) {
    console.log('> error: ', error);
  }
}

function * fetchServicesWatcher () {
  yield takeEvery(actionTypes.FETCH_SERVICES, fetchServicesSaga);
}

function * activatePromoCodeSaga ({ payload }: IActivatePromoCode) {
  const { link, promoCode } = payload;
  try {
    yield put({
      type: actionTypes.ACTIVATE_PROMOCODE_SUCCEED,
      payload: {
        message: 'SUCCESS',
        link,
        promoCode,
      },
    });
  } catch (error) {
    console.log('> error: ', error);
  }
}

function * activatePromoCodeWatcher () {
  yield takeEvery(actionTypes.ACTIVATE_PROMOCODE, activatePromoCodeSaga);
}

export {
  activatePromoCodeWatcher,
  fetchServicesWatcher,
};
