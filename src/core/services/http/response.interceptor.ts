

const ResponseInterceptor = (response: any) => {

  if (response.status === 200) {
    let dataResponse;

    if (response.data != null) {
      dataResponse = response.data;
      return dataResponse;
    } else {
      return Promise.reject("Unexpected error");
    }
  } else {
    console.log("ERROR RESPONSE", response);

    return Promise.reject(
      "Failed request: " +
        response.data.status_description +
        (response.data.errors
          ? response.data.errors.map((error: any) => error.value.toUpperCase())
          : "")
    );
  }
};

export default ResponseInterceptor;
