import { IActivatePromoCodeParam } from './types';

const serviceActionTypes = {
  FETCH_SERVICES: 'FETCH_SERVICES',
  FETCH_SERVICES_SUCCEED: 'FETCH_SERVICES_SUCCEED',

  ACTIVATE_PROMOCODE: 'ACTIVATE_PROMOCODE',
  ACTIVATE_PROMOCODE_SUCCEED: 'ACTIVATE_PROMOCODE_SUCCEED',
};

const fetchServices = () => ({
  type: serviceActionTypes.FETCH_SERVICES,
});

const activatePromoCode = (payload: IActivatePromoCodeParam) => ({
  type: serviceActionTypes.ACTIVATE_PROMOCODE,
  payload,
});

export {
  fetchServices,
  activatePromoCode,
};

export default serviceActionTypes;
