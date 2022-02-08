
import { openModal, closeModal } from '@store/features/modal/modal.slice';
import i18next from "@translations/index";
import { store } from '@store/reducers';

const fakeUrl = process.env.REACT_APP_API_FAKE_URL;

const ResponseInterceptor = ( response: any ) => {
    

    const translations: any = i18next.getDataByLanguage( i18next.language );


    if (response.status === 200 ) {

    let dataResponse

        if ( response.data != null ) {

            dataResponse = response.data;
            return dataResponse;

        } else {
            store.dispatch(closeModal());
            

            setTimeout( () => store.dispatch(
                openModal( {
			        modalStatus: 'error',
                    title: translations[`common`][`modals`][ 'oops' ],
                    subTitle: translations[`common`][`modals`][ 'generic_response_error' ],
                    text: JSON.stringify( response ),
                } )
            ), 1000 )

            return Promise.reject( "Unexpected error" );
        }
    } else {

        console.log( 'ERROR RESPONSE', response )

        let modalContent: any = {
            title: translations[`common`][`modals`][ 'warning' ],
						subTitle: translations[`common`][`modals`][ 'request_error' ],
            text: `
                    ${ response.data.status ? (`
                        ${ translations[`common`][`API`][ 'code' ] }: ${ response.data.status }
                        <br />
                        <br />
                    `) : '' }
                    url: ${ response.config.url.replace( fakeUrl, '' ) }
                    <br />
                    ${ translations[`common`][`modals`][ 'message' ] }: ${ response.data.status ? translations[`common`][`API`][ response.data.status ] : translations[`common`][`API`][ 9999 ] }
                   `,
        }

        store.dispatch(closeModal());
        setTimeout( () => store.dispatch(
            openModal( modalContent )
        ), 1000 )
        

        return Promise.reject( "Fail to login: " + response.data.status_description + ( response.data.errors ? response.data.errors.map( (error: any) => error.value.toUpperCase()) : '' )  );
    }

}


export default ResponseInterceptor;