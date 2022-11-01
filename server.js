const { Client } = require("pg");
const express = require("express");
const app = express();
const port = 8080;

const client = new Client({
  password: "root",
  user: "root",
  host: "postgres",
});

const insertData = async (cam, cpu, latency) => {
  try {
      await client.query(
          `INSERT INTO performanceData (cam, cpu, latency)  
          VALUES ($1, $2, $3)`, [cam, cpu, latency]); 
      return true;
  } catch (error) {
      console.error(error.stack);
      return false;
  }
};

const deleteData = async (id) => {
  try {
      await client.query(
          `DELETE FROM performanceData WHERE id=$1`, [id]); 
      return true;
  } catch (error) {
      console.error(error.stack);
      return false;
  }
};

app.get("/addData", async (req, res) => {
  insertData(req.query.cam, req.query.cpu, req.query.latency);
  res.end();
});

app.get("/deleteData", async (req, res) => {
  deleteData(req.query.id);
  res.end();
});

app.get("/performanceData", async (req, res) => {
  const results = await client
    .query("SELECT * FROM performanceData")
    .then((payload) => {
      return payload.rows;
    })
    .catch(() => {
      throw new Error("Query failed");
    });
  res.setHeader("Content-Type", "application/json"); 
  res.status(200);
  res.send(JSON.stringify(results));
});

(async () => {
  await client.connect();

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
})();

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 300);
//   reject("oops");
// });

// myPromise.then(() => {
//   console.log("hello");
// });