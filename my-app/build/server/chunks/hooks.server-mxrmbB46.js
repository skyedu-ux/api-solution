async function handleFetch({ request, fetch }) {
  request.headers.get("Authorization");
  console.log("asdasdasdasd");
  return fetch(request);
}

export { handleFetch };
//# sourceMappingURL=hooks.server-mxrmbB46.js.map
