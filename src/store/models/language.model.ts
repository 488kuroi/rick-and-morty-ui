import StorageManager from '@src/core/utils/storage-manager';

const STORAGE_KEY = process.env.REACT_APP_STORAGE_KEY;

const OLD_LANGUAGE: Language | boolean = StorageManager.retrieveItem(`${STORAGE_KEY}_language`) || 'en';

export interface Language {
    language : string;
}

export const initialState : Language =  OLD_LANGUAGE !== false ? OLD_LANGUAGE as Language : {
    language: 'en',
}