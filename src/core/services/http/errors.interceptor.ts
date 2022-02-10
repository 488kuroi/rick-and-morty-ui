const DEBUG =
  process.env.REACT_APP_ENVIRONMENT === "development" ||
  process.env.REACT_APP_ENVIRONMENT === "local";

export const ResponseErrorInterceptor = (error: any) => {
  if (DEBUG) { console.error("ResponseErrorInterceptor", JSON.stringify(error)); }
  return Promise.reject(error);
};

export const HeadersErrorInterceptor = (error: any) => {
  if (DEBUG) {
    console.error("Headers error ", error);
  }
  return Promise.reject(error);
};
