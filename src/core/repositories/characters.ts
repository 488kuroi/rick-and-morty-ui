import Singleton from "./repository";

class CharactersRepository extends Singleton {

  getCharactersByPage( page: number = 1) {
    return this.apiGet(`character?page=${page}`)
      .then((res: any) => res)
      .catch((err: any) => Promise.reject({ err }));
  }

  getCharactersByIds( ids: Array<number>) {
    return this.apiGet(`character/${ids.join(',')}`)
      .then((res: any) => res)
      .catch((err: any) => Promise.reject({ err }));
  }

}

export default new CharactersRepository() as any;