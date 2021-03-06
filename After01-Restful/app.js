const express = require("express");
const Contenedor = require("./contenedor/contenedor");
const { Router } = express;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const router = Router();
const productos = new Contenedor(__dirname + "/data/productos.json");

router.get("/", (req, res) => {
  return res.json(productos.list);
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  return res.json(productos.find(id));
});

router.post("/", (req, res) => {
  let obj = req.body;
  return res.json(productos.insert(obj));
});


router.put("/:id", (req, res) => {
  let obj = req.body;
  let id = req.params.id;
  return res.json(productos.update(id, obj));
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  return res.json(productos.deleteById(id));
});

app.use("/api/productos", router);
app.use(express.static("./views"));
app.listen(3000);
