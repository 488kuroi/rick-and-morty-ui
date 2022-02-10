
const HeadersInterceptor = (config: any) => {
  config.headers.common["Content-Type"] = "application/json";
  config.headers.common["Access-Control-Allow-Origin"] = "*";
  config.headers.common["Accept"] = "application/json";

  // ADD HEADERS SUCH A BEARER TOKEN IF REQUIRED

  return config;
};

export default HeadersInterceptor;
