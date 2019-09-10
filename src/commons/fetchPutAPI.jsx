const fetchPutAPI = async (url, body) => {
  await fetch(url, {
    method: "PUT",
    mode: "cors", // no-cors, cors, *same-origin
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: body,
    cache: "no-cache" // *default, no-cache, reload, force-cache, only-if-cached // body data type must match "Content-Type" header
  });
};

export default fetchPutAPI;
