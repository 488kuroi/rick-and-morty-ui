import CredentialsManager from '@src/core/utils/credentialsmanager';

const STORAGE_KEY = process.env.REACT_APP_STORAGE_KEY;

const OLD_LANGUAGE: Language | boolean = CredentialsManager.retrieveItem(`${STORAGE_KEY}_language`) || 'en';

export interface Language {
    language : string;
}

export const initialState : Language =  OLD_LANGUAGE !== false ? OLD_LANGUAGE as Language : {
    language: 'en',
}