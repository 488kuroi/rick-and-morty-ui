import { encryptData, decryptData } from "@utils";

const STORAGE_KEY = process.env.REACT_APP_STORAGE_KEY;
const salt =
  process.env.REACT_APP_SALT || "6c090785-ecdf-11eb-adc1-0242ac120004";

const CredentialsManager = {
  storeItem: function (key: any, data: any, encrypt: boolean = true) {
    let value = data;
    if (encrypt) {
      const encryptedData = encryptData(data, salt);
      value = encryptedData;
    }
    localStorage.setItem(`${key}`, value);
  },
  retrieveItem: function (key: any, decrypt: boolean = true): Boolean|any {
    let mkLocalData = localStorage.getItem(`${key}`);

    if (mkLocalData) {
      let value = mkLocalData;
      if (decrypt) {
        const originalData = decryptData(mkLocalData, salt);
        value = originalData;
      }

      return value;
    } else {
      return false;
    }
  },
  deleteItem: function (key: any) {
    localStorage.removeItem(`${key}`);
  },
  deleteAuthItem: function () {
    // for boiler specific auth custom items only
    localStorage.removeItem(`${STORAGE_KEY}_token`);
    localStorage.removeItem(`${STORAGE_KEY}_username`);
    localStorage.removeItem(`${STORAGE_KEY}_passcrypt`);
    localStorage.removeItem(`${STORAGE_KEY}_user`);
  },
  retrieveTokenAuth: function () {
    const user = this.retrieveItem(`${STORAGE_KEY}_user`);
    if ( user ) {
      return user.currentUser.token;
    }

    return false

  },
};

export default CredentialsManager;
