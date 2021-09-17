import { IServiceState } from '@/redux/reducers/types';

interface IFetchServices {
  type: string;
}

interface IFetchServicesSucceed {
  type: string;
  payload: IServiceState;
}

interface IActivatePromoCodeParam {
  link: string;
  promoCode: string;
}

interface IActivatePromoCode {
  type: string;
  payload: IActivatePromoCodeParam;
}

interface IActivatePromoCodeSucceed {
  type: string;
  payload: {
    message: string;
    link: string;
    promoCode: string;
  };
}

export type {
  IFetchServices,
  IFetchServicesSucceed,
  IActivatePromoCodeParam,
  IActivatePromoCode,
  IActivatePromoCodeSucceed,
}
