import { openModal, closeModal } from "@store/features/modal/modal.slice";
import { store } from "@store/reducers";
import i18next from "@translations/index";
import CredentialsManager from "@credentialsmanager";
import { MODAL } from '@models'

const DEBUG =
  process.env.REACT_APP_ENVIRONMENT === "development" ||
  process.env.REACT_APP_ENVIRONMENT === "local";
const translations: any = i18next.getDataByLanguage(i18next.language);
const fakeUrl = process.env.REACT_APP_API_FAKE_URL;

export const ResponseErrorInterceptor = (error: any) => {
  const cleanUrl = error.config.url.replace(fakeUrl, "");

  if (DEBUG) {
    console.error("ResponseErrorInterceptor", JSON.stringify(error));
  }

  const errorContent: MODAL.Modal = {
    modalStatus: "error",
    title: translations[`common`][`modals`]["warning"],
    subTitle: translations[`common`][`modals`]["generic_request_error"],
    text: `Url: ${cleanUrl}
									<br />
									${translations[`common`][`modals`]["message"]}: ${error.message}
									`,
  };
  
  const ERROR_CODE = error.message.replace(/[^0-9]/g, "");
  try {
    errorContent.text = (
      translations[`common`][`API`][cleanUrl]
        ? translations[`common`][`API`][cleanUrl][
          ERROR_CODE
          ]
        : translations[`common`][`API`][ERROR_CODE]
    ).toString();
  } finally {
    store.dispatch(closeModal());
    setTimeout(() => store.dispatch(openModal(errorContent)), 1000)
    
    if (ERROR_CODE === '401') {
      setTimeout(() => {
        CredentialsManager.deleteAuthItem();
        store.dispatch(closeModal());
        window.location.href = '/login';
      }, 5000 )
    }
    
    return Promise.reject(error);
  }
};

export const HeadersErrorInterceptor = (error: any) => {
  // const cleanUrl = error.config.url.replace(fakeUrl, "");

  if (DEBUG) {
    console.error("Headers error ", error);
  }
  store.dispatch(closeModal());
  setTimeout( () => store.dispatch(
    openModal({
      modalStatus: "error",
      title: "Headers error",
      text: `Url: ${error.config.url.replace(fakeUrl, "")}
                        <br />
                        message: ${error.message}
                       `,
    })
  ), 1000 )
  return Promise.reject(error);
};
