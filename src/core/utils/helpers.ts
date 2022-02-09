
import CryptoJS from "crypto-js";
import { store } from "@src/store/reducers";
import { showLoader, hideAllLoaders } from "@features/loaders/loaders.slice";


export const encryptData = (data: any, salt: any) =>
  CryptoJS.AES.encrypt(JSON.stringify(data), salt).toString();

export const decryptData = (ciphertext: any, salt: any) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, salt);
  try {
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (err) {
    return null;
  }
};

export async function* asyncGenerator( yieldFunction: any ): any {
  let page = 1;
  let maxPages = 2;
  while (page <= maxPages) {
    let toYield = undefined;
    try {
      toYield = await yieldFunction( page )
        .then((x: any) => x)
        .catch((err: any) => {
          console.debug(err);
          // maxPages = 0;
        });
      
      maxPages = toYield?.info?.pages;
      page++;
    } finally {
      yield toYield;
    }
  }
}

export async function loadTableData( yieldFunction: any, formatter: any, setter: Function, cb: Function|null) {
  store.dispatch(showLoader('showLine'))


  for await (let res of asyncGenerator( yieldFunction )) {
    if (res) {
      setter( ( prevData: Array<any> ) => [ ...prevData, ...formatter(res?.results || []) ] )
    }
  }
  store.dispatch(hideAllLoaders())
  if (cb) { cb() }
  
}