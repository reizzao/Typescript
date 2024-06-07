// @deno-types="npm:@types/express@4.17.15"
import express from "serverRest";
import testerRoutes  from "./externals/api_rest_express/endpoints/testers.endpoint.ts"

export const app = express();
export const router = express.Router();
const portRest = 8000

// Rotas
app.use(testerRoutes)

app.listen(portRest, () => console.log(`Server_ON in ${portRest}`));
