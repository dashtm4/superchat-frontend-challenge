// import { createSelector } from 'reselect'

import { IRootState } from 'src/redux/reducers/types';

const getServices = (state: IRootState ) => state.service.services;

const getStatus = (state: IRootState) => state.service.status;

export {
  getServices,
  getStatus,
};
