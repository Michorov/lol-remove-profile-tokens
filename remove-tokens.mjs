import { authenticate, createHttp1Request } from "league-connect";

const credentials = await authenticate();

await createHttp1Request(
  {
    method: "POST",
    url: "/lol-challenges/v1/update-player-preferences/",
    body: { challengeIds: [] },
  },
  credentials
);
