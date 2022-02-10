import StorageManager from '@src/core/utils/storage-manager';
const STORAGE_KEY = process.env.REACT_APP_STORAGE_KEY;

const OLD_MODE: DarkMode|boolean = StorageManager.retrieveItem(`${STORAGE_KEY}_darkMode`) || false;

export interface DarkMode {
    isDark : boolean;
}

export const initialState : DarkMode =  OLD_MODE !== false ? OLD_MODE as DarkMode : {
    isDark: true,
}