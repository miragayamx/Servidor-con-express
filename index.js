const express = require("express");
const fs = require("fs");

const app = express();

const PORT = 8080;
const file = "./productos.txt";
const visitas = {
  visitas: {
    items: 0,
    item: 0,
  },
};

app.get("/items", async (req, res) => {
  try {
    visitas.visitas.items += 1;
    const data = await fs.promises.readFile(file, "utf-8");
    const parseData = JSON.parse(data);
    if (!Array.isArray(parseData))
      throw new Error("No es posible recuperar los datos");
    const response = parseData.reduce(
      (acc, item) => {
        return {
          items: acc.items.concat(item),
          cantidad: acc.cantidad + 1,
        };
      },
      { items: [], cantidad: 0 }
    );
    res.json(response);
  } catch (err) {
    console.log(err);
  }
});

app.get("/item-random", async (req, res) => {
  try {
    visitas.visitas.item += 1;
    const data = await fs.promises.readFile(file, "utf-8");
    let response = [];
    response = JSON.parse(data);
    if (!Array.isArray(response))
      throw new Error("No es posible recuperar los datos");
    const randomNumber = Math.round(Math.random() * (response.length - 1));
    res.json({ item: response[randomNumber] });
  } catch (err) {
    console.log(err);
  }
});

app.get("/visitas", (req, res) => {
  res.json(visitas);
});

const server = app.listen(PORT, () => {
  console.log(
    `El servidor esta corriendo en el puerto: ${server.address().port}`
  );
});
server.on("error", (err) => console.log(`Error en servidor ${err}`));
