import got from 'got';
const HttpHelper = () => {
  return {
    /**
    * Got Wrapper  
    * @public
    * @param {String} url
    * @param {Object} options
    * @return {Promise}
    */
    gotWrapper: (url, options) =>
      got(url, options)
  }
}

export const HttpHelperInstance = Object.create(HttpHelper());
