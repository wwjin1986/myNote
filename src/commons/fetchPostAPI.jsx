const fetchPostAPI = async (url, body) => {
  return await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: body,
    cache: "no-cache" // *default, no-cache, reload, force-cache, only-if-cached // body data type must match "Content-Type" header
  })
    .then(response => response.json())
    .catch(error => {
      return error;
    });
};

export default fetchPostAPI;
