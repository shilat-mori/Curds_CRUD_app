const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let curds = [
  { id: 1, text: "blow", colorIndex: 2 },
  { id: 2, text: "pink", colorIndex: 0 },
  { id: 3, text: "green", colorIndex: 1 },
  { id: 4, text: "light-blow", colorIndex: 3 },
];

let curds_count = 4;

let colors = [
  { color: "#ffccdb" },
  { color: "#bafdc2" },
  { color: "#4e96f4" },
  { color: "#9ef4ff" },
];

app.get("/getColors", (req, res) => {
  res.json(colors);
});

app.get("/getAll", (req, res) => {
  res.json(curds);
});

app.get("/getById/:id", (req, res) => {
  let curd = curds.find((c) => c.id == req.params.id);
  if (curd) {
    res.json(curd);
  } else {
    res.status(404).send({ error: "color" + req.params.text + " not found" });
  }
});

const validationCheck = (req, res, next) => {
  const curd = req.body;
  if (!curd.text || typeof curd.text !== "string") {
    res.status(400).send({ error: "invalid text", req: req.body.text });
    return;
  }
  if (
    typeof curd.colorIndex !== "number" ||
    curd.colorIndex == -1
  ) {
    res.status(400).send({ error: "invalid color" });
    return;
  }

  next();
};

app.post("/addColor", validationCheck, (req, res) => {
  const curd = {
    id: curds_count + 1,
    text: req.body.text,
    colorIndex: req.body.colorIndex,
  };
  curds_count += 1;
  curds.push(curd);
  res.send();
});

app.delete("/deleteColor/:id", (req, res) => {
  curds = curds.filter((c) => c.id != req.params.id);
  console.log(curds);
  res.send();
});

app.put("/updateColor", validationCheck, (req, res) => {
  const index = curds.findIndex((c) => c.id == req.body.id);
  if (index + 1) {
    curds[index].text = req.body.text;
    curds[index].colorIndex = req.body.colorIndex;
    console.log(curds);
    
  } else res.status(404).send({ error: "color not found" });
  res.send();
});

app.listen(5000, () => {
  console.log("server listening on fort 5000");
});
