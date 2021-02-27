const fetch = require("node-fetch");

function distance(lat1, lon1, lat2, lon2) {
  var p = 0.017453292519943295; // Math.PI / 180
  var c = Math.cos;
  var a =
    0.5 -
    c((lat2 - lat1) * p) / 2 +
    (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

const HASURA_OPERATION = `
  {
    parking_lot{
      id
      location{
        latitude
        longitude
      }
    }
  }
`;

// execute the query in Hasura
const execute = async (variables, reqHeaders) => {
  const fetchResponse = await fetch("http://localhost:8080/v1/graphql", {
    method: "POST",
    headers: reqHeaders || {},
    body: JSON.stringify({
      query: HASURA_OPERATION,
      variables,
    }),
  });
  return await fetchResponse.json();
};

const DISTANCE_LIMIT = 10;
// Request Handler
const handler = async (req, res) => {
  // get request input
  const { arg1 } = req.body.input;
  const { lat, lng } = arg1;

  // execute the Hasura operation
  const { data, errors } = await execute();

  // In case of errors:
  if (errors) {
    return res.status(400).json({
      message: "error happened",
    });
  }

  // run some business logic
  const [lot1, lot2, lot3] = data.parking_lot
    .map((lot) => {
      const dist = distance(
        lat,
        lng,
        lot.location.latitude,
        lot.location.longitude
      );
      if (dist >= DISTANCE_LIMIT) {
        return null;
      }
      return {
        parking_lot_id: lot.id,
        distance: dist,
      };
    })
    .filter((x) => x != null)
    .sort((a, b) => a.distance - b.distance);

  // success
  return res.json([lot1, lot2, lot3]);
};

module.exports = handler;
