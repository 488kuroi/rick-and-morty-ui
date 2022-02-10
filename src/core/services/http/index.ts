import axios from "axios";
import HeadersInterceptor from "./headers.interceptor";
import {
  HeadersErrorInterceptor,
  ResponseErrorInterceptor,
} from "./errors.interceptor";
import ResponseInterceptor from "./response.interceptor";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
// const DEBUG = process.env.REACT_APP_ENVIRONMENT === "development";

const HttpService = async (method = "get", path: string, body: any = false) => {
  const instance = axios.create();

  const config: {
    url: any;
    method: any;
    data?: any;
  } = {
    url: `${API_BASE_URL}/${path}`,
    method: method,
  };

  if (body) {
    config["data"] = JSON.stringify(body);
  }
  if (body instanceof FormData) {
    config["data"] = body;
  }

  instance.interceptors.request.use(
    HeadersInterceptor,
    HeadersErrorInterceptor
  );
  instance.interceptors.response.use(
    ResponseInterceptor,
    ResponseErrorInterceptor
  );

  return await instance(config);
};

export default HttpService;
