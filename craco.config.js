/* craco.config.js */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
        '@src'                 : path.resolve(__dirname, 'src' ),
        '@components'          : path.resolve(__dirname, 'src/components/index.ts' ),
        '@partials'            : path.resolve(__dirname, 'src/partials/index.ts' ),
        '@videos'              : path.resolve(__dirname, 'src/assets/videos' ),
        '@images'              : path.resolve(__dirname, 'src/assets/images' ),
        '@assets'              : path.resolve(__dirname, 'src/assets' ),
        '@themes'              : path.resolve(__dirname, 'src/assets/themes/index.ts' ),
        '@pages'               : path.resolve(__dirname, 'src/pages/index.ts' ),
        '@routes'              : path.resolve(__dirname, 'src/routing/index.ts' ),
        '@store'               : path.resolve(__dirname, 'src/store' ),
        '@reducers'            : path.resolve(__dirname, 'src/store/reducers/index.ts' ),
        '@middlewares'         : path.resolve(__dirname, 'src/store/middlewares' ),
        '@features'            : path.resolve(__dirname, 'src/store/features' ),
        '@models'              : path.resolve(__dirname, 'src/store/models/index.ts' ),
        '@selectors'           : path.resolve(__dirname, 'src/store/selectors/index.ts' ),
        '@core'                : path.resolve(__dirname, 'src/core/*' ),
        '@interfaces'          : path.resolve(__dirname, 'src/core/interfaces/index.ts' ),
        '@services'            : path.resolve(__dirname, 'src/core/services/*' ),
        '@http'                : path.resolve(__dirname, 'src/core/services/http/index.ts' ),
        '@utils'               : path.resolve(__dirname, 'src/core/utils/index.ts' ),
        '@storagemanager'      : path.resolve(__dirname, 'src/core/utils/storage-manager/index.ts' ),
        '@repositories'        : path.resolve(__dirname, 'src/core/repositories' ),
        '@translations'        : path.resolve(__dirname, 'src/translations' ),
        '@mocks'               : path.resolve(__dirname, 'src/assets/mocks/index.ts' ),
    }
  },
};