import request from "request-promise";

const options = {
  method: "GET",
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills exercise.",
  },
  json: true,
};

async function getJoke() {
  const res = await request(options);
  console.log(res)
  return res.joke;
}

export default getJoke;

/**
/workspaces/skills-write-javascript-actions (main) $ node src/main.js 

{
  id: 'baFQZv4w5wc',
  joke: 'My New Years resolution is to stop leaving things so late.',
  status: 200
}
My New Years resolution is to stop leaving things so late.

::set-output name=joke::My New Years resolution is to stop leaving things so late.
**/