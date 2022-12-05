export default function handler(request, response) {
  // api/[name].ts -> /api/lee
  // req.query.name -> "lee"
  console.log(request.query.test);
  const { test } = request.query;
  return response.end(`Hello ${test}!`);
}
