interface IService {
  activated?: boolean;
  description: string;
  link: string;
  promocode: string;
  title: string;
}

interface IStatus {
  balance: number;
  nextPayout: number;
  currency: string;
}

interface IServiceState {
  services: IService[];
  status: IStatus;
}

interface IRootState {
  service: IServiceState;
}

export type {
  IService,
  IStatus,
  IServiceState,
  IRootState,
};
