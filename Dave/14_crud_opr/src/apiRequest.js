const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw Error('Please reload the app');
  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
};

export default apiRequest;

/* 
< HTTP STATE CODE >

1XX - Informational: The server has received the request and is continuing the process
2XX - Successful: The request was successful and the browser has received the expected information
3XX - Redirection: You have been redirected and the completion of the request requires further action
4XX - Client Error: The website or the page could not be reached, either the page is unavailable or the request contains bad syntax
5XX - Server Error: While the request appears to be valid, the server could not complete the request

Most frequency CODE

2XX

200 : OK
201 : Created
202 : Accepted
203 : Non-Authoritative Information
204 : No Content

3XX

304 : Not Modified
305 : Use Proxy
306 : Switch Proxy

4XX

400 : Bad Request
401 : Unauthorized
403 : Forbidden
404 : Not Found
406 : Not Acceptable

5XX

500 : Internal Server Error
501 : Not Implemented
502 : Bad Gateway
503 : Service Unavailable
*/
