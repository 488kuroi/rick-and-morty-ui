import Singleton from "./repository";

class LocationsRepository extends Singleton {

  getLocationsByPage( page: number = 1) {
    return this.apiGet(`location?page=${page}`)
      .then((res: any) => res)
      .catch((err: any) => Promise.reject({ err }));
  }

  getLocationsByIds( ids: Array<number>) {
    return this.apiGet(`location/${ids.join(',')}`)
      .then((res: any) => res)
      .catch((err: any) => Promise.reject({ err }));
  }

}

export default new LocationsRepository() as any;