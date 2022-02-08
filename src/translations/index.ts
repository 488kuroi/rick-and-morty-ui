

import i18next from "i18next";

import common_en from "@translations/en/common.json";
import common_it from "@translations/it/common.json";


i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        it: {
            common: common_it               // 'common' is our custom namespace
        },
    },
});

const _t = i18next.t.bind(i18next);

export { _t };
export default i18next;