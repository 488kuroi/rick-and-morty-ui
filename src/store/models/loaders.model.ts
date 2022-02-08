// import { closeModal } from '@features/modal/modal.slice';

export interface Loaders {
  showCircle: boolean;
  showLine: boolean;
}

export const initialState: Loaders = {
  showCircle: false,
  showLine: false,
};
