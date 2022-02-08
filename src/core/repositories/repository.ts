import HttpService from "@http";

export default class Singleton {

  getError(code: number = 418, message: string = "I'm a teapot") {
    return {
      code: code,
      message: message,
    };
  }

  api(method = "get", path: string, body?: object) {
    return HttpService(method, path, body);
  }

  apiPost(path: string, body: object) {
    return this.api("post", path, body);
  }

  apiPut(path: string, body: object) {
    return this.api("put", path, body);
  }

  apiGet(path: string) {
    return this.api("get", path);
  }

  apiDel(path: string) {
    return this.api("delete", path);
  }
}
