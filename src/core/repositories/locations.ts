import Singleton from "./repository";

class LocationsRepository extends Singleton {

  getLocationsByPage( page: number = 1) {
    // return new Promise( ( res, rej ) => res( USER.USER_LOGIN.data ) );
    return this.apiGet(`location?page=${page}`)
      .then((res: any) => res)
      .catch((err: any) => Promise.reject({ err }));
  }

}

export default new LocationsRepository() as any;