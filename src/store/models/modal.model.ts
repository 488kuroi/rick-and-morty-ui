
export interface Modal {
  isOpen?: boolean;
  closeButton?: boolean;
  title?: string;
  subTitle?: string;
  text?: string;
  modalStatus?: string;
  data?: any;
  type?: string;
}

export const initialState: Modal = {
  isOpen: false,
  title: "",
  text: "",
};
