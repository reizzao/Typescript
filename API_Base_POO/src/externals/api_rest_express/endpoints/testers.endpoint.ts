import { router } from "../../../server.rest.express.ts"

// export const testerRoutes = () => {

router.get("/", (req, res) => {
  res.send("Bem vindo a API REST -- 1");
});

// receber param via url da rota
router.get("/info_via_param/:nome/:empresa/:opcional?", (req, res) => {
  // const data = { c1: "foo", c2: "bar" }
  res.send(`Ola ${req.params.nome} da empresa ${req.params.empresa}`);
});

// }