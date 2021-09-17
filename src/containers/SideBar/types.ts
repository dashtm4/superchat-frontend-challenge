import { PATHS } from '../../utils/constants';

type TPaths = keyof typeof PATHS;

interface ISidebarItem {
  link: TPaths;
  title: string;
};

export type {
  ISidebarItem,
};
