import Singleton from "./repository";

class EpisodesRepository extends Singleton {

  getEpisodesByPage( page: number = 1) {
    return this.apiGet(`episode?page=${page}`)
      .then((res: any) => res)
      .catch((err: any) => Promise.reject({ err }));
  }

  getEpisodesByIds( ids: Array<number>) {
    return this.apiGet(`episode/${ids.join(',')}`)
      .then((res: any) => res)
      .catch((err: any) => Promise.reject({ err }));
  }

}

export default new EpisodesRepository() as any;